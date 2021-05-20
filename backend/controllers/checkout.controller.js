const history = require("../models/history");
const cart = require("../models/carts");
const item = require("../models/item");
const seller = require("../models/seller");
const buyer = require("../models/buyer");
const nodemailer = require("nodemailer");

// const checkout = async (req,res) => {
//     const items = [...req.body.items];
//     items.forEach(element => {
//         item.model.findOne({_id: element._id})
//         .then(result => {
//             --result.quantity;
//             item.model.findByIdAndUpdate({_id: result._id})
//         })
//         .catch(err => res.json(err));
//     });
// }

const checkout = async (req,res) => {
    const items = [...req.body.items];
    items.forEach(element => {
        const input = new history({
            buyerId: req.body.buyerId,
            item: req.body.item,
            date: new Date(),
            status: "PAID",
            deliverable: req.body.delivery ? true : false
        });

        input.save()
        .then(result => {
            cart.findOneAndRemove({_id: element.cartId})
            .catch(err => {
                res.json(err);
            });
        })
        .catch(err => res.json(err));


    });
}

const mail = (req,res) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'excaliburshopping@gmail.com',
          pass: 'EXmail1234'
        }
      });
      
      var mailOptions = {
        from: 'excaliburshopping@gmail.com',
        to: req.body.mail,
        subject: 'Sending Email using Node.js',
        html: `<h1>Hello ${req.body.name}</h1>`
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
          res.send("done");
        }
      });
}

module.exports = {mail};