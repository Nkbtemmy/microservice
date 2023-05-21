import responses from "../responses";

const sms = {
  "/sms/telesignal": {
    post: {
      tags: ["SMS"],
      summary: "Send new sms",
      description: "Send new sms.",
      security: [{ JWT: [] }],
      parameters: [
        {
          in: "body",
          name: "body",
          required: true,
          schema: {
            example: {
              phoneNumber: "250783256940",
              message: "A text message sent using the telesignal SMS API",
            },
          },
        },
      ],
      consumes: ["application/json"],
      responses,
    },
  },
  "/sms/venage": {
    post: {
      tags: ["SMS"],
      summary: "Send new sms",
      description: "Send new sms.",
      security: [{ JWT: [] }],
      parameters: [
        {
          in: "body",
          name: "body",
          required: true,
          schema: {
            example: {
              phoneNumber: "250787311654",
              message: "A text message sent using the Vonage SMS API",
            },
          },
        },
      ],
      consumes: ["application/json"],
      responses,
    },
  },
};

export default sms;
