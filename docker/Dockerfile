# Use the official Node.js 22.3 image
FROM node:22.3

# Install git
RUN apt-get update && apt-get install -y git

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY ./package*.json ./

# Install the dependencies using npm
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Start the application
CMD ["npm", "run", "start"]
