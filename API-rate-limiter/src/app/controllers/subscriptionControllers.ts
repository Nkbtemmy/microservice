import Responses from "../utils/helpers/response";
import Subscription from "../database/models/subscriptionSchema";

export default class SubscriptionControllers {
  static async create(req, res) {
    try {
      const { name, limits } = req.body;
      if (!name || !limits.daily || !limits.monthly || !limits.system) {
        return res.status(400).send({
          message: "please input required field(s)",
        });
      }
      const subscription = new Subscription({ ...req.body });
      subscription
        .save()
        .then((data) => {
          return Responses.success(res, 201, {
            message: "Subscription created successfully",
            data,
          });
        })
        .catch((err) => {
          return res.status(500).send({
            message: "Same error occurred while creating an article",
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

  static async getAll(req, res) {
    try {
      Subscription.find()
        .then((subscription) => {
          return res.status(200).send({
            status: "Success",
            result: subscription.length,
            data: subscription,
          });
        })
        .catch((err) => {
          return res.status(500).send({
            message: "Some error occurred while retrieving subscription.",
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

  static async getOne(req, res) {
    try {
      Subscription.findById(req.params.id)
        .then((subscription) => {
          if (!subscription) {
            return res.status(404).send({
              message: `subscription  with id  ${req.params.id} not found`,
            });
          }
          return res.status(200).send({
            message: "Subscription retreived successfuly",
            data: subscription,
          });
        })
        .catch((err) => {
          if (err.kind === "ObjectId") {
            return res.status(404).send({
              message: `subscription not found with id ${req.params.id}`,
            });
          }
          return res.status(500).send({
            message: "Error retrieving subscription with id " + req.params.id,
          });
        });
    } catch (error) {
      return Responses.error(res, 500, {
        message: "Server error",
        error: error.message,
      });
    }
  }

  static async update(req, res) {
    try {
      Subscription.findOneAndUpdate(req.params.id, req.body, { new: true })
        .then((subscription) => {
          if (!subscription) {
            return res.status(404).send({
              message: `subscription not found with id ${req.params.id}`,
            });
          }
          return res.status(200).send({
            message: "subscription updated successfully",
            data: subscription,
          });
        })
        .catch((err) => {
          if (err.kind === "ObjectId") {
            return res.status(404).send({
              message: `subscription not found with id ${req.params.id}`,
            });
          }
          return res.status(500).send({
            message: `Error updating subscription with id ${req.params.id}`,
          });
        });
    } catch (error) {
      return Responses.error(res, 500, {
        message: "Server error",
        error: error.message,
      });
    }
  }

  static async delete(req, res) {
    try {
      Subscription.findByIdAndRemove(req.params.id)
        .then((subscription) => {
          if (!subscription) {
            return res.status(404).send({
              message: "subscription not found with id " + req.params.id,
            });
          }
          return res
            .status(200)
            .send({ message: "subscription deleted successfully!" });
        })
        .catch((err) => {
          if (err.kind === "ObjectId" || err.name === "NotFound") {
            return res.status(404).send({
              message: "subscription not found with id " + req.params.id,
            });
          }
          return res.status(500).send({
            message: "Could not delete subscription with id " + req.params.id,
          });
        });
    } catch (error) {
      return Responses.error(res, 500, {
        message: "Server error",
        error: error.message,
      });
    }
  }
}
