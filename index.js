const PORT = process.env.PORT || 5000;
var exphbs  = require('express-handlebars');
const express = require('express');
const path = require('path'); // nodeJS module that deals with file paths
const members = require('./Members');


const app = express();

// Handle bars Middleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Homepage route
app.get('/', (req, res) => res.render('index', {
    title: "Members App",
    members
}));

// Set a static folder
app.use(express.static(path.join(__dirname, 'public')));

// Members API routes
app.use('/api/members', require('./routes/api/members'));

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));

// const logger = require('./middleware/Logger');

// init middleware
// app.use(logger);