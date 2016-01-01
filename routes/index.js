var express = require('express');
var router = express.Router();
var nodemailer = require("nodemailer");




/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', { title: 'Express' });
});

router.post('/contact', function (req, res) {
    var mailOpts, smtpTrans;


    smtpTrans = nodemailer.createTransport('SMTP', {
        service: 'Gmail',
        auth: {
            user: "beast.onmode20@gmail.com",
            pass: "51214syed51214"
        }
    });
    //Mail options
    mailOpts = {
        from: req.body.name + ' &lt;' + req.body.email + '&gt;', //grab form data from the request body object
        to: 'beast.onmode20@gmail.com',
        subject: 'Website contact form',
        text: req.body.message
    };
    smtpTrans.sendMail(mailOpts, function (error, response) {
        //Email not sent
        if (error) {
            console.log('error occured');
        }
        else {
            res.render('new');
            console.log(response);
        }
    });
});



module.exports = router;
