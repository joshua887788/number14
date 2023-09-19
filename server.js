const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
app.engine('handlebars', exphbs.engine);
app.set('view engine', 'handlebars');


const userRoutes = require('./controllers/userController');
const postRoutes = require('./controllers/postController');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sequelize = require('./config/connection');
const sess = {
    secret: 'YourSecretKey',  
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};
app.use(session(sess));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Setting up routes
app.use('/users', userRoutes);
app.use('/posts', postRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
 



