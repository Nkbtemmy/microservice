import responses from "../responses";

const user = {
  "/users": {
    post: {
      tags: ["User"],
      summary: "Create New User",
      description: "Create New User.",
      security: [{ JWT: [] }],
      parameters: [
        {
          in: "body",
          name: "body",
          required: true,
          schema: {
            example: {
              email: "admin@example.org",
              password: "password123!",
              subscriptionId: "646649b83c8cd2bb2e86b1b2",
            },
          },
        },
      ],
      consumes: ["application/json"],
      responses,
    },
    get: {
      tags: ["User"],
      summary: "Get all user",
      description: "Get all user.",
      security: [{ JWT: [] }],
      parameters: [],
      consumes: ["application/json"],
      responses,
    },
  },
  "/users/login": {
    post: {
      tags: ["User"],
      summary: "login user",
      description: "login user.",
      security: [{ JWT: [] }],
      parameters: [
        {
          in: "body",
          name: "body",
          required: true,
          schema: {
            example: {
              email: "admin@example.org",
              password: "Password123!",
            },
          },
        },
      ],
      consumes: ["application/json"],
      responses,
    },
  },
};

export default user;
