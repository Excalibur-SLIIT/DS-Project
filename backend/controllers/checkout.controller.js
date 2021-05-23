const history = require("../models/history");
const cart = require("../models/carts");
const item = require("../models/item");
const seller = require("../models/seller");
const buyer = require("../models/buyer");
const nodemailer = require("nodemailer");
const config = require("config");
const twilio = require("twilio")(
	config.get("twilio-account-sid"),
	config.get("twilio-auth")
);

const checkout = async (req, res) => {
	const buyerId = req.user.id;
  const total = req.body.total;
  const items = Array();
  req.body.items.forEach(item => {
    items.push({
      buyerId: buyerId,
      sellerId: item.sellerId,
      item: item.id,
      date: new Date(),
      status: "PAID",
      deliverable: item.deliverable ? item.address : "non-delivery",
      paymentMethod: item.paymentMethod,
      payment: item.price
    });
  });

  await history.insertMany(items)
  .then(result => {
    buyer.findOne({ _id: buyerId })
        .then(resul => {
            if (resul == null) {
                res.json({
                    status: "not found"
                });
            } else {
                buyermail({
                  mail: resul.email,
                  name: resul.fname + " " + resul.lname,
                  total: total
                });
                buyersms({
                  number: resul.mobile
                });
            }
        })
        .catch(err => {
            res.json({
                status: "error",
                error: err
            });
        })
  })
  .catch(err => console.log(err));
};

const buyermail = (data) => {
	var transporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: config.get("gmail-address"),
			pass: config.get("gmail-password"),
		},
	});

	var mailOptions = {
		from: "excaliburshopping@gmail.com",
		to: data.mail,
		subject: "Sending Email using Node.js",
		html: `
        <h1>Hello ${data.name}</h1>
        <p>Your order has been placed</p>
        <ul>
          <li>Total: ${data.total}</li>
        </ul>
        <h3>Thank you for the purchase. Happy Shopping!!!</h3>
        `,
	};

	transporter.sendMail(mailOptions, function (error, info) {
		if (error) {
			console.log(error);
		} else {
			console.log("Email sent: " + info.response);
		}
	});
};

const buyersms = async (data) => {
	twilio.messages
		.create({
			to: data.number,
			from: config.get("twilio-number"),
			body: "Your order has been placed. Thank you for the purchase. Happy shopping",
		})
		.then((message) => console.log(message.sid))
		.catch((err) => res.json(err));
};

module.exports = { checkout};
