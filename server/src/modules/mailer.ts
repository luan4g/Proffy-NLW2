import nodemailer from "nodemailer";
const hbs = require("nodemailer-express-handlebars");

const { host, port, user, pass } = require("../config/mailer");

const transport = nodemailer.createTransport({
  host,
  port,
  auth: {
    user,
    pass,
  },
});

transport.use(
  "compile",
  hbs({
    viewEngine: {
      extname: ".html",
      layoutsDir: "./src/resources/mail",
      defaultLayout: "auth/forgot-password",
      partialsDir: "./src/resources",
    },
    viewPath: "./src/resources/mail",
    extName: ".html",
  })
);

export default transport;
