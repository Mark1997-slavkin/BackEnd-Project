const registerSchema = require("./joi/registerSchema");
const editSchema = require("./joi/editSchema");
const loginSchema = require("./joi/loginSchema");

// const config = require("config");
// const validator = config.get("VALIDATOR");
const validator = "joi";

const validateRegistration = (user) => {
  if (validator === "joi") {
    const { error } = registerSchema.validate(user);
    return error ? error.details[0].message : "";
  }
};

const validateLogin = (user) => {
  if (validator === "joi") {
    const { error } = loginSchema.validate(user);
    return error ? error.details[0].message : "";
  }
};

const validateEdit = (user) => {
  if (validator === "joi") {
    const { error } = editSchema.validate(user);
    return error ? error.details[0].message : "";
  }
};

module.exports = { validateRegistration, validateLogin, validateEdit };
