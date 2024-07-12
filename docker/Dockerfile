# Use the official Node.js 22.3 image
FROM node:22.3

# Install git
RUN apt-get update && apt-get install -y git

# Set the working directory
WORKDIR /app

# Copy the package.json and yarn.lock files
COPY package.json yarn.lock ./

# Clear the cache
RUN yarn cache clean

# Install the dependencies using yarn
RUN yarn install

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN yarn build

# Expose port 3000
EXPOSE 3000

# Start the application
CMD ["yarn", "start"]
