import mongoose from "../config/dbconfig";

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  subscription: { type: mongoose.Schema.Types.ObjectId, ref: "Subscription" },
});

const User = mongoose.model("User", userSchema);

export default User;
