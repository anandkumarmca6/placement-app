const express = require('express');
const app = express();
const port = 3000;
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');
const flash = require('connect-flash');
const session = require('express-session');
//  set passport settings
const cookieParser = require('cookie-parser');

const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');
const MongoStore = require('connect-mongo');
// date time format
const sassMiddleware = require('node-sass-middleware');

const customMware = require('./config/middleware');
// set sass
app.use(
  sassMiddleware({
    src: './assets/scss',
    dest: './assets/css',
    debug: true,
    outputStyle: 'extended',
    prefix: '/css',
  })
);
// set form encoded
app.use(express.urlencoded({ extended: true }));
//set cookie parser
app.use(cookieParser());
// set static folder path
app.use(express.static('./assets'));
app.use(expressLayouts);
// extract styles and scripts from sub pages into layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);
//set view template engine
app.set('view engine', 'ejs');
app.set('views', './views');
// mongo store used to store session cookie in db
app.use(
  session({
    name: 'placement',
    secret: '@1925',
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 1000 * 60 * 100,
    },
    store: MongoStore.create(
      {
        mongoUrl:
          'mongodb+srv://placementapp:placementapp@cluster0.cjmdero.mongodb.net/?retryWrites=true&w=majority',
        dbName: 'placement',
        stringify: false,
        autoRemove: 'disabled',
      },
      function (err) {
        console.log(err || 'connect mongodb set up ok');
      }
    ),
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);
// use flash
app.use(flash());
app.use(customMware.setFlash);
// Use express route
app.use('/', require('./routes'));

app.listen(port, function (err) {
  if (err) {
    console.log(`Error in running server ${err}`);
  }
  console.log(`Server is running on port ${port}`);
});
