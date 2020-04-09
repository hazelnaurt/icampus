const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json({extended: false}));
app.use(bodyParser.urlencoded({extended: false}))

app.use(express.static(path.join(__dirname, 'public')));

app.get('/blog', (req, res, next) => {
    //console.log(req.query);
    res.json({
        posts: [
            {
                heading: "Snow life",
                imgUrl: "imgz/pix2.jpg",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem esse vero quidem dolore dolorum distinctio nostrum temporibus ducimus enim quibusdam."
            },
            {
                heading: "Roll Your Boat",
                imgUrl: "imgz/pix1.jpg",
                text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi aperiam ipsam placeat quibusdam minima quasi deserunt neque voluptatibus consequuntur sed."
            },
            {
                heading: "Mount Everest",
                imgUrl: "imgz/pix3.jpg",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem esse vero quidem dolore dolorum distinctio nostrum temporibus ducimus enim quibusdam."
            },
            {
                heading: "Volta lake ride",
                imgUrl: "imgz/pix1.jpg",
                text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi aperiam ipsam placeat quibusdam minima quasi deserunt neque voluptatibus consequuntur sed."
            }
        ]
    });
});

app.use('/', (req, res, next) => {
    res.send('index.html');
});

app.listen(3000, () => {
    console.log('server running');
});