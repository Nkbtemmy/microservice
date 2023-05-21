import { Response } from "express";
export default class Responses {
  static error(res: Response, status: number, error: object) {
    return res.status(status).json({ status, ...error });
  }

  static success(res: Response, status: number, data: object) {
    return res.status(status).json({ status, ...data });
  }
}
