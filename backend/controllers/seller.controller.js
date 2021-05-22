const mongo = require("mongoose");
const seller = require("../models/seller");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");

const get = async (req, res) => {
    await seller.find()
        .then(result => {
            if (Array.isArray(result) && result.length == 0) {
                res.json({
                    status: "items not found",
                });
            } else {
                res.json({
                    status: "available",
                    count: result.length,
                    result
                })
            }
        })
        .catch(err => res.json({
            status: "error",
            err
        }));
}

const getById = async (req, res) => {
    await seller.findOne({ id: req.params.id })
        .then(result => {
            if (result == null) {
                res.json({
                    status: "not found"
                });
            } else {
                res.json({
                    status: "available",
                    result
                })
            }
        })
        .catch(err => {
            res.json({
                status: "error",
                error: err
            });
        })
}

const create = async (req, res) => {
    await seller.findOne({ username: req.body.username })
        .then(result => {
            if (result != null) {
                res.json({
                    status: "exists"
                });
            } else {
                const newUser = new seller({
                    username: req.body.username,
                    fname: req.body.fname,
                    lname: req.body.lname,
                    password: req.body.password,
                    companyName: req.body.companyName,
                    email: req.body.email,
                    mobile: req.body.mobile,
                    address: req.body.address
                });
                newUser.save()
                    .then(() => {
                        //Return jsonwebtoken
                        const payload = {
                            user: {
                                id: newUser.id,
                            },
                        };
                        jwt.sign(
                            payload,
                            config.get("jwtSecret"),
                            { expiresIn: 360000 },
                            (err, token) => {
                                if (err) throw err;
                                res.json({ token });
                            }
                        );
                    })
                    .catch(err => {
                        res.json({
                            status: "error",
                            error: err
                        });
                    });
            }
        })
        .catch(err => {
            res.json({
                status: "error",
                error: err
            });
        })
};

const update = async (req, res) => {
    await seller.findOneAndUpdate({ _id: req.params.id }, req.body).
        then(result => {
            if (result == null) {
                res.json({
                    status: "not found"
                });
            } else {
                buyer.findOne({ _id: req.params.id }).then(result => {
                    res.status(200).json({
                        status: "susccessful",
                        result
                    })
                })
            }
        })
        .catch(err => res.json({
            status: "error",
            err
        }));
}

const remove = async (req, res) => {
    await seller.findOneAndRemove({ _id: req.params.id })
        .then(result => res.status(200).json({
            status: "successful",
            result
        }))
        .catch(err => res.json({
            status: "error",
            err
        }));
};

const login = async (req, res) => {
    await seller.findOne({ "username": req.body.username })
        .then(result => {
            if (result === null) {
                res.status(404);
                res.json({
                    status: "unsuccessful",
                    description: "User not available"
                });
            } else if (String(result.password) === req.body.password) {

                //Return jsonwebtoken

                const payload = {
                    user: {
                        id: result.id,
                    },
                };

                jwt.sign(
                    payload,
                    config.get("jwtSecret"),
                    { expiresIn: 360000 },
                    (err, token) => {
                        if (err) throw err;
                        res.json({ token });
                    }
                );

            } else {
                res.status(404);
                res.json({
                    status: "unsuccessful",
                    description: "Password is wrong, Try again"
                });
            }
        })
        .catch(err => res.json({
            status: "error",
            err
        }));
}

module.exports = { get, getById, create, update, remove, login };