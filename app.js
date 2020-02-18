const express = require('express');
const pth = require('path');
const hbs = require('hbs');
const app = express();
const publicDirectoryPath = pth.join(__dirname, './public');
const viewsPath = pth.join(__dirname, './templates/views');
const partialsPath = pth.join(__dirname, './templates/partials');

const port = process.env.PORT || 3000;

//handlebars
app.use(express.static(publicDirectoryPath));
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

app.get('/', (req, res) => {
    res.render('index', {
        title: "Career portal",
        name: "Wasim"
    })
});

app.get('/profile', (req, res) => {
    res.render('profile', {
        title: "Profile page",
        name: "Wasim"
    })
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: "About page",
        name: "Wasim"
    })
});

app.get('/login', (req, res) => {
    res.render('login', {
        title: "Login",
        name: "Wasim"
    })
});

app.listen(port, () => {
    console.log("Server is up on port " + port)
});

