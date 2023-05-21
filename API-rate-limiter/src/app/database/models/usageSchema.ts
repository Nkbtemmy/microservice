import mongoose from "../config/dbconfig";

const usageSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  daily: { type: Number, default: 0 },
  monthly: { type: Number, default: 0 },
  system: { type: Number, default: 0 },
});

const Usage = mongoose.model("Usage", usageSchema);

export default Usage;
