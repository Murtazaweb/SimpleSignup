/**
 * Created by DELL on 29/11/2014.
 */

var express = require('express');
var router = express.Router();


router.get = function(req, res){
    db('user').find().done(function (err, models) {
        if ( err )
            console.log("Error in Index of user:"+err);
        else
            res.render( 'user/index', { title: 'ADD USER', data: models });
    });
};

router.create=function (req, res){
    var user={};
    user.USERNAME1=req.body.name;
    user.PASSWORD1=req.body.pass;
    user.AGE1=req.body.age;


    db('user').create(user, function (err, model) {
        if (err)
            console.log("Error in Create of User:"+err);
        else

            res.redirect('/user');

    });

};
module.exports =router;