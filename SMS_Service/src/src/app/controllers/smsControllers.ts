import Responses from "../utils/helpers/response";
import TeleSignSDK from "telesignsdk";
const { Vonage } = require("@vonage/server-sdk");
import dotenv from "dotenv";

dotenv.config();

export default class Smscontrollers {
  static async telesignal(req, res) {
    const { TELESIGNAL_CUSTOMER_ID, TELESIGNAL_API_KEY, TELESIGNAL_END_POINT } =
      process.env;

    const timeout = 10 * 1000; // 10 secs

    const client = new TeleSignSDK(
      TELESIGNAL_CUSTOMER_ID,
      TELESIGNAL_API_KEY,
      TELESIGNAL_END_POINT,
      timeout
    );
    const { phoneNumber, message } = req.body;
    // const phoneNumber = "250783256940";
    // const message = "You're hired; so schedule appointment at 2:30PM.";
    const messageType = "ARN";
    function messageCallback(error, responseBody) {
      if (error === null) {
        return Responses.success(res, 200, {
          message: responseBody["status"]["description"],
          statusCode: responseBody["status"]["code"],
          data: responseBody,
        });
      } else {
        return Responses.error(res, 401, {
          message: "Unable to send message.",
          error: error.message,
        });
      }
    }
    client.sms.message(messageCallback, phoneNumber, message, messageType);
  }

  static async venage(req, res) {
    const VONAGE_API_KEY = process.env.VONAGE_API_KEY;
    const VONAGE_API_SECRET = process.env.VONAGE_API_SECRET;
    const VONAGE_BRAND_NAME = process.env.VONAGE_BRAND_NAME;

    const { phoneNumber, message } = req.body;

    const vonage = new Vonage({
      apiKey: VONAGE_API_KEY,
      apiSecret: VONAGE_API_SECRET,
    });

    const from = VONAGE_BRAND_NAME;
    const to = phoneNumber;
    const text = message;

    await vonage.sms
      .send({ to, from, text })
      .then((resp) => {
        return Responses.success(res, 200, {
          message: "Message sent successfully",
          data: resp,
        });
      })
      .catch((err) => {
        return Responses.error(res, 403, {
          message: "There was an error sending the messages.",
          error: err.message,
        });
      });
  }
}
