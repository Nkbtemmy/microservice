// import bcrypt from 'bcryptjs';
const bcrypt = require("bcryptjs");
import Responses from "../utils/helpers/response";
import User from "../database/models/userSchema";
import { signinToken } from "./../utils/helpers/jwt";
import Subscription from "../database/models/subscriptionSchema";

export default class UserControllers {
  static async signup(req, res) {
    try {
      const { email, password, subscriptionId } = req.body;
      if (!email || !password || !subscriptionId) {
        return res.status(400).send({
          message: "Required field can not be empty",
        });
      }
      const subscription = await Subscription.findById(subscriptionId);
      if (!subscription) {
        return Responses.error(res, 404, {
          message: "subscription not found",
        });
      }
      const user = new User({
        email,
        password: bcrypt.hashSync(password, 10),
        subscription: subscriptionId,
      });
      user
        .save()
        .then((data) => {
          data.password = undefined;
          const token = signinToken({ ...data });
          return Responses.success(res, 201, {
            message: "User created successfully",
            token,
            data,
          });
        })
        .catch((err) => {
          return Responses.error(res, 400, {
            message: "Some error occurred while creating the User.",
            error: err.message,
          });
        });
    } catch (error) {
      return Responses.error(res, 500, {
        message: "Server error",
        error: error.message,
      });
    }
  }

  static async login(req, res) {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return res.status(400).send({ message: "Please input password/email" });
      }
      const user = await User.findOne({ email }).select("+password");

      if (!user || !bcrypt.compareSync(password, user.password)) {
        return res.status(400).send({
          message: "Password/email is invalid!",
        });
      }
      const token = signinToken({ ...user });
      return res.status(201).json({
        status: "success",
        message: "The email and password valid,Logged In",
        token,
      });
    } catch (error) {
      return Responses.error(res, 500, {
        message: "Server error",
        error: error.message,
      });
    }
  }

  static async getAllUsers(req, res) {
    User.find()
      .then((users) => {
        return Responses.success(res, 200, {
          message: "users retreived successfully",
          lenght: users.length,
          data: users,
        });
      })
      .catch((err) => {
        return Responses.error(res, 500, {
          message: "Server error",
          error: err.message,
        });
      });
  }
}
