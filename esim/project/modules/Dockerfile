# Use official Node.js image
FROM node:18

# Set working directory inside container
WORKDIR /app

# Copy package.json and package-lock.json first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all project files into container
COPY . .

# Expose port your app runs on
EXPOSE 3000

# Start the server
CMD ["node", "server.js"]