import mongoose from "../config/dbconfig";

const subscriptionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  limits: {
    daily: { type: Number, default: 100 },
    monthly: { type: Number, default: 3000 },
    system: { type: Number, default: 10000 },
  },
});

const Subscription = mongoose.model("Subscription", subscriptionSchema);

export default Subscription;
