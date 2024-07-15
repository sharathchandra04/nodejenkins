# Use the official Node.js 14 image as a base
FROM node:20

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available) to /app
COPY package*.json ./

# Install npm dependencies
RUN npm install

# Copy the entire application code to /app
COPY . .

# Expose the port on which your app runs
EXPOSE 3000

# Command to run when starting the container
CMD ["node", "src/server.js"]

