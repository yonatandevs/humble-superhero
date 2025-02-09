# Use the official Node.js image as the base image
FROM node:latest

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files first to leverage Docker cache
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all application files, including src folder
COPY . .

# Ensure TypeScript and Nest CLI are installed globally in case they're needed
RUN npm install -g @nestjs/cli typescript

# Build the NestJS application (this compiles the code from src/ to dist/)
RUN npm run build

# Expose the port the app runs on
EXPOSE 4004

# Define the command to run the app
CMD ["node", "dist/main.js"]
