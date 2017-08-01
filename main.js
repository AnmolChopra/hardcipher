var express=require('express');
var nodemailer = require("nodemailer");
var app=express();
var port = process.env.PORT || 8080;
app.use(express.static('Public'));
//app.engine('.html', require('ejs').renderFile);

app.get('/', function(req, res) {
    res.render('index.html');
});
/*
    Here we are configuring our SMTP Server details.
    STMP is mail server which is responsible for sending and recieving email.
*/
var smtpTransport = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
        user: "anmolchopra123@gmail.com",
        pass: "Ch0pr@ji13"
    }
});
/*------------------SMTP Over-----------------------------*/

/*------------------Routing Started ------------------------*/

app.get('/',function(req,res){
    res.sendfile('Public/index.html');
});
app.get('/send',function(req,res){
    var mailOptions={
        to : req.query.to,
        subject : req.query.subject,
        text : "Cilent Named "+ req.query.name +". Of Email Id "+ req.query.cmailid +"  and Contact No. "+ req.query.mobile + ". Has query  " + req.query.text + ". Please check towards This query and get in touch with as soon as possible." 
    }
    console.log(mailOptions);
    smtpTransport.sendMail(mailOptions, function(error, response){
     if(error){
            console.log(error);
        res.end("error");
     }else{
            console.log("Message sent: " + res.message);
        res.end("sent");
         
         }
});
});

/*--------------------Routing Over----------------------------*/

app.listen(3000,function(){
    console.log("Express Started on Port 3000");
});