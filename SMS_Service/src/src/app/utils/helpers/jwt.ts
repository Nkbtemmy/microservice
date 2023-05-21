import jwt from "jsonwebtoken";

export const signinToken = (params: any, secret = process.env.JWT_SECRET) => {
  const token = jwt.sign(params, secret, {
    expiresIn: process.env.TOKEN_EXPIRATION || "24h",
  });
  return token;
};

export const decodeToken = (token: string, secret = process.env.JWT_SECRET) => {
  const payload = jwt.verify(token, secret);
  return payload;
};
