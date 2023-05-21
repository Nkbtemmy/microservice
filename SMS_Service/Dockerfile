# Base image
FROM node:lts-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) files
COPY package*.json ./

# Install dependencies
RUN npm install

# Install pm2 globally
RUN npm install -g pm2
RUN npm install -g typescript

# Copy application code
COPY . .

# Build TypeScript code
RUN npm run build

# Environmental variables
ENV HOST=https://api-rate-limiter-0pqt.onrender.com
ENV NODE_ENV=production

# Expose a port (optional, depending on your application)
EXPOSE 9099

# Start the application using pm2
CMD ["pm2-runtime", "start", "npm", "--", "start", "-i", "max"]

