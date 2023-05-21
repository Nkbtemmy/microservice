import "dotenv/config";
import Response from "../utils/helpers/response";
import User from "../database/models/userSchema";
import { decodeToken } from "../utils/helpers/jwt";

export const isAuth = (req, _, next) => {
  const authHeader = req.header("Authorization");
  if (!authHeader) {
    req.isAuth = false;
    return next();
  }
  const token = authHeader.split("Bearer ")[1];
  if (!token || token === "") {
    req.isAuth = false;
    return next();
  }

  let decodedToken;
  try {
    decodedToken = decodeToken(token);
  } catch (err) {
    req.isAuth = false;
    return next();
  }

  if (!decodedToken) {
    req.isAuth = false;
    return next();
  }
  req.isAuth = true;
  decodedToken = decodedToken._doc;
  req.userId = decodedToken._id;
  return next();
};

export const protectedRoute = async (req, res, next) => {
  if (!req.isAuth) {
    return Response.error(res, 401, { message: "unauthorized" });
  }
  const { userId } = req;
  try {
    const foundUser = await User.findById(userId);
    if (!foundUser) {
      return Response.error(res, 404, {
        message: "Unavailable user",
      });
    }
    req.user = foundUser;
    return next();
  } catch (err) {
    return Response.error(res, 401, {
      message: "invalid token,login to get one",
      error: err.message,
    });
  }
};
