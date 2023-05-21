const RateLimitConfig = {
  freemium: {
    daily: 100,
    monthly: 3000,
    system: 10000,
  },
  premium: {
    daily: 500,
    monthly: 10000,
    system: 50000,
  },
  other: {
    daily: 300,
    monthly: 5000,
    system: 20000,
  },
};

export default RateLimitConfig;
