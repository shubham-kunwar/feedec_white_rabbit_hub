const express = require('express');
const app = express();
var path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const User = require('./models/user');

// Connect mongodb
const MongoDBURI = process.env.MONGO_URI || 'mongodb+srv://feedcoreDB:feedcoredb@cluster0.aioxg.mongodb.net/myDatabase?retryWrites=true&w=majority';

mongoose.connect(MongoDBURI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  });

  const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
});
  
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'views')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/',(req,res,next)=>{
    return res.render("index")
})
app.get('/login',(req,res,next)=>{
    return res.render("login",{})
})
app.post('/login', (req, res, next) => {
	User.findOne({ email: req.body.email }, (err, data) => {
        console.log(data)
		if (!data) {
			res.redirect('/');
		} else {
			return res.render('admin.ejs', { "name": data.username, "email": data.email });
		}
	});
});


app.get('/register',(req,res,next)=>{
    return res.render("register.ejs")
})

app.post('/register',(req,res,next)=>{

    let newPerson = new User({
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
    });
    newPerson.save((err, Person) => {
        if (err)
            console.log(err);
        else
            console.log('Success');
    });
    res.send({ "Success": "User Registered!" });
    return res.render("register.ejs")

})


app.listen(80,()=>{
    console.log("server listening on port 80")
})

