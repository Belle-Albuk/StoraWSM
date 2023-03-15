require('dotenv').config();
const express = require('express');
const app = express();

app.use('/public', express.static(process.cwd() + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Index page
app.route('/')
    .get(function(req, res) {
        res.sendFile(process.cwd() + '/views/dashboard.html')
    });

// Dashboard page
app.route('/dashboard')
    .get(function(req, res) {
        res.sendFile(process.cwd() + '/views/dashboard.html')
    });

// If can't find
app.use((req, res, next) => {
    res.status(404)
        .type('text')
        .send('Not Found');
})

const listener = app.listen(process.env.PORT || 3000, function () {
    console.log('StoraWSM is listening on port ' + listener.address().port);   
});