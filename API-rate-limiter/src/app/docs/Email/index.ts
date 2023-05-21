import responses from "../responses";

const email = {
  "/email/send": {
    post: {
      tags: ["Email"],
      summary: "Send new email",
      description: "Send new email.",
      security: [{ JWT: [] }],
      parameters: [
        {
          in: "body",
          name: "body",
          required: true,
          schema: {
            example: {
              to: "admin@irembo.com",
              subject: "Greetings from Mr NKUBITO",
              message:
                "Hello there; Hope you day is going well and i wish you to keep that vibes",
            },
          },
        },
      ],
      consumes: ["application/json"],
      responses,
    },
  },
};

export default email;
