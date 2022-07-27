const express = require("express");
const app = express();
const cors = require("cors");
const Usuarios = require("./models/Usuarios");
const db = require("./config/index");
const router = require("./routes/index");
const LocalStrategy = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const sessions = require("express-session");
const passport = require("passport");
const morgan = require('morgan')

require('./config/association')

// parsing middleware

app.use(morgan('tiny'))
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", router);
app.use(cookieParser());
app.use(
  sessions({
    secret: "eber",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());
passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    function (email, password, done) {
      Usuarios.findOne({ where: { email } })
        .then((user) => {
          if (!user) {
            return done(null, false); // user not found
          }
          user.hash(password, user.salt).then((hash) => {
            if (hash !== user.password) {
              return done(null, false); // invalid password
            }
            done(null, user); // success :D
          });
        })
        .catch(done);
    }
  )
);
passport.serializeUser(function (users, done) {
  done(null, users.id);
});

passport.deserializeUser(function (id, done) {
  User.findByPk(id).then((users) => done(null, users));
});

app.get("/", function (req, res, next) {
  res.send("bienvenide comandante");
});

app.use((err, req, res, next) => {
  res.status(500).send(err.message);
});
 
db.sync({ force: false })
  .then(function () {
    app.listen(8080, () =>
      console.log("Servidor escuchando en el puerto 8080")
    );
  })
  .catch(console.error);
  
  module.exports = app;
