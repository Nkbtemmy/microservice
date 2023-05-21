import responses from "../responses";

const subscriptions = {
  "/subscriptions": {
    post: {
      tags: ["Subscription"],
      summary: "Create New Subscription",
      description: "Create New Subscription.",
      security: [{ JWT: [] }],
      parameters: [
        {
          in: "body",
          name: "body",
          required: true,
          schema: {
            example: {
              name: "freemium",
              limits: {
                daily: 100,
                monthly: 3000,
                system: 10000,
              },
            },
          },
        },
      ],
      consumes: ["application/json"],
      responses,
    },
    get: {
      tags: ["Subscription"],
      summary: "Get all Subscriptions",
      description: "Get all Subscriptions.",
      security: [{ JWT: [] }],
      parameters: [],
      consumes: ["application/json"],
      responses,
    },
  },
  "/subscriptions/{id}": {
    put: {
      tags: ["Subscription"],
      summary: "update Subscription",
      description: "update Subscription.",
      security: [{ JWT: [] }],
      parameters: [
        {
          in: "path",
          name: "id",
          required: true,
          description: "subscription ID",
          schema: {
            example: "939f62a9-5077-4600-ad51-21a15d8eeed3",
          },
        },
        {
          in: "body",
          name: "body",
          required: true,
          schema: {
            example: {
              name: "freemium",
              limits: {
                daily: 10,
                monthly: 3000,
                system: 10000,
              },
            },
          },
        },
      ],
      consumes: ["application/json"],
      responses,
    },
    get: {
      tags: ["Subscription"],
      summary: "Get one Subscription",
      description: "Get one Subscription.",
      security: [{ JWT: [] }],
      parameters: [
        {
          in: "path",
          name: "id",
          required: true,
          description: "subscription ID",
          schema: {
            example: "939f62a9-5077-4600-ad51-21a15d8eeed3",
          },
        },
      ],
      consumes: ["application/json"],
      responses,
    },
    delete: {
      tags: ["Subscription"],
      summary: "Delete one Subscription",
      description: "Delete one Subscription.",
      security: [{ JWT: [] }],
      parameters: [
        {
          in: "path",
          name: "id",
          required: true,
          description: "subscription ID",
          schema: {
            example: "939f62a9-5077-4600-ad51-21a15d8eeed3",
          },
        },
      ],
      consumes: ["application/json"],
      responses,
    },
  },
};

export default subscriptions;
