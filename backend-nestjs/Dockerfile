# Use a Node.js runtime as a parent image
FROM node:18.14.2-alpine

# Install yarn
RUN apk add --no-cache yarn

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and yarn.lock files into the container
COPY package.json yarn.lock ./

# Install dependencies using Yarn
RUN yarn install --frozen-lockfile

# Copy the rest of the application files into the container
COPY . .

# Build the application
RUN yarn build

# Expose the port on which the application will run
EXPOSE 5050

# Start the application
CMD ["yarn", "start:prod"]
