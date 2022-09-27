const express = require("express");
const app = express();
const cors = require("cors");
const Usuarios = require("./models/Usuarios");
const db = require("./config/index");
const router = require("./routes/index");
const localStrategy = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const sessions = require("express-session");
const passport = require("passport");
const morgan = require("morgan");

require("./config/association");

// parsing middleware

app.use(morgan("tiny"));
app.use(express.json());
app.use(cors());

app.use(cookieParser());
app.use(
  sessions({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new localStrategy(
    { usernameField: "email", passwordField: "password" },
    function (email, password, done) {
      Usuarios.findOne({ where: { email: email } })
        .then((user) => {
          if (!user) {
            return done(null, false);
          }
          user.hash(password, user.salt).then((hash) => {
            if (hash !== user.password) {
              return done(null, false);
            }
            return done(null, user);
          });
        })
        .catch((error) => {
          done(error);
        });
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  Usuarios.findByPk(id).then((user) => done(null, user)).catch(done);
});
 
app.use("/api", router);

app.get("/", function (req, res, next) {
  res.send("bienvenide comandante");
});

app.use((err, req, res, next) => {
  res.status(500).send(err.message);
});

db.sync({ force: true })
  .then(function () {
    app.listen(8080, () =>
      console.log("Servidor escuchando en el puerto 8080")
    );
  })
  .catch(console.error);

module.exports = app;
