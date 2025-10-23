// middleware to check the userid and hasPremiumPlan

import { clerkClient } from "@clerk/express";
export const auth = async (req, res, next) => {
  try {

    const { has, userId } = await req.auth();
    if (!userId) {
      return res.json({
        success: false,
        message: "Authentication failed. Invalid or missing token.",
      });
    }

    const hasPremiumPlan = await has({ plan: "premium" });
    const user = await clerkClient.users.getUser(userId);
    

    if (!hasPremiumPlan && user.privateMetadata.free_usage) {
      req.free_usage = user.privateMetadata.free_usage;
    } else {
      await clerkClient.users.updateUserMetadata(userId, {
        privateMetadata: {
          free_usage: 0,
        },
      });
      req.free_usage = 0;
    }
   

    req.plan = hasPremiumPlan ? "premium" : "free";
    next();
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
