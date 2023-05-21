import User from "../database/models/userSchema";
import Usage from "../database/models/usageSchema";

// Middleware to check the limits of a logged-in user
const checkUserLimits = async (req, res, next) => {
  try {
    // Assuming you have user authentication and req.user holds the user ID
    const userId = req.user._id;

    // Retrieve the user's subscription
    const user = await User.findById(userId).populate("subscription");

    if (!user || !user.subscription) {
      // User or subscription not found
      return res.status(404).json({ error: "User or subscription not found" });
    }

    const subscription: any = user.subscription;

    // Check the limits
    const {
      daily: dailyLimit,
      monthly: monthlyLimit,
      system: systemLimit,
    } = subscription.limits;
    // Get the current usage for the user
    const userUsage = await Usage.findOne({ userId });

    let { daily, monthly, system } = userUsage || {};

    // Increment the usage
    daily = daily ? daily + 1 : 1;
    monthly = monthly ? monthly + 1 : 1;
    system = system ? system + 1 : 1;

    // Check if the limits are exceeded
    if (daily > dailyLimit) {
      return res.status(429).json({ error: "Daily limit exceeded" });
    }

    if (monthly > monthlyLimit) {
      return res.status(429).json({ error: "Monthly limit exceeded" });
    }

    if (system > systemLimit) {
      return res.status(429).json({ error: "System limit exceeded" });
    }

    // Save the updated usage data
    if (userUsage) {
      userUsage.daily = daily;
      userUsage.monthly = monthly;
      userUsage.system = system;
      await userUsage.save();
    } else {
      await Usage.create({
        userId,
        daily: daily,
        monthly: monthly,
        system: system,
      });
    }

    next();
  } catch (error) {
    // Handle error
    res.status(500).json({ error: "Internal server error" });
  }
};

export default checkUserLimits;
