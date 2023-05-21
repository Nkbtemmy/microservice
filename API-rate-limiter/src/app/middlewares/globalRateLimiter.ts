let globalRequestCount = 0;
const GLOBAL_REQUEST_QUOTA = 1000; // You put here number of requests you don't want to exceed

// Middleware to implement global quotas and throttling
const globalRateLimiter = (req, res, next) => {
  globalRequestCount++;
  if (globalRequestCount > GLOBAL_REQUEST_QUOTA) {
    return res.status(503).json({ error: "Service Unavailable" });
  }
  next();
};

export default globalRateLimiter;
