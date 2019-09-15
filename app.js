const express = require('express');

const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const cookieParser = require('cookie-parser');
const nodemailer = require("nodemailer");
const config = require('./config');


const app = express();
const port = config.port;

app.use(fileUpload());

app.set('view engine', 'ejs');
app.use('/stylesheets', express.static(__dirname + '/public/stylesheets'));
app.use('/images', express.static(__dirname + '/public/images'));
app.use('/scripts', express.static(__dirname + '/public/scripts'));

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({
	extended: true
})); // support encoded bodies

app.use(cookieParser());

app.listen(port, () => {
	console.log("server started on ", port, "port")
});

app.get('/', (req, res) => {
	
	res.render('index_ua');
});