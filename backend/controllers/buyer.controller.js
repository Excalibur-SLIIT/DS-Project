const buyer = require("../models/buyer");

const get = async (req, res) => {
    await buyer.find()
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
    await buyer.findOne({ _id: req.params.id })
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
    await buyer.findOne({ username: req.body.username })
        .then(result => {
            if (result != null) {
                res.json({
                    status: "exists"
                });
            } else {
                const newUser = new buyer({
                    username: String(req.body.username),
                    password: req.body.password,
                    fname: req.body.fname,
                    lname: req.body.lname,
                    email: req.body.email,
                    mobile: Number(req.body.mobile)
                });
                newUser.save()
                    .then(result => res.status(200).json({
                        status: "successful",
                        result
                    }))
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
    await buyer.findOneAndUpdate({ _id: req.params.id }, req.body).
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
    await buyer.findOneAndRemove({ _id: req.params.id })
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
    await buyer.findOne({ "username": req.body.username })
        .then(result => {
            if (result === null) {
                res.status(404);
                res.json({
                    status: "unsuccessful",
                    description: "User not available"
                });
            } else if (String(result.password) === req.body.password) {
                res.status(200);
                res.json({
                    status: "Successfull",
                    description: "User found",
                    result
                });
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