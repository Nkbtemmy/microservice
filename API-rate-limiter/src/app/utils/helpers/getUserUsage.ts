// Assuming you have a data storage mechanism such as a database
import Usage from "../../database/models/usageSchema";

// Function to retrieve the current usage of the user
const getUserUsage = async (userId) => {
  try {
    // Retrieve the usage data for the user
    const userUsage = await Usage.findOne({ userId });

    if (!userUsage) {
      // Usage data not found, return default values
      return {
        dailyUsage: 0,
        monthlyUsage: 0,
        systemUsage: 0,
      };
    }

    // Return the usage values from the user's data
    return {
      dailyUsage: userUsage.daily,
      monthlyUsage: userUsage.monthly,
      systemUsage: userUsage.system,
    };
  } catch (error) {
    // Handle error
    throw new Error("Failed to retrieve user usage");
  }
};

export default getUserUsage;
