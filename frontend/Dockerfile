# Use an official Node.js runtime as the base image
FROM node:20 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first to install dependencies
# This helps cache dependencies if package.json doesn't change
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the entire application source code
COPY . .

# Build the React app
RUN npm run build

# Use an official Nginx image to serve the build files
FROM nginx:stable

# Copy the built files from the previous stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 to allow traffic
EXPOSE 80

# Start Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]
