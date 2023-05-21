import Responses from "../utils/helpers/response";
import sendEmail from "../utils/email";

export default class EmailController {
  static async sendEmail(req, res) {
    try {
      const { to, subject, message } = req.body;
      const send = sendEmail({
        email: to,
        subject,
        message,
      });
      if (send) {
        return Responses.success(res, 200, {
          message: "email sent successfully",
        });
      }
    } catch (error) {
      return Responses.error(res, 500, {
        message: "server error",
        error: error.message,
      });
    }
  }
}
