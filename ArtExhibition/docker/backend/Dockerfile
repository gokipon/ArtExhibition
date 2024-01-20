# Use an official Node runtime as the parent image
FROM node:14

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install any needed packages specified in package.json
RUN npm install

# Bundle the app source inside the Docker image
# (i.e., copy the rest of the project's files into the image)
COPY . .

# Make port 8080 available to the world outside this container
EXPOSE 8080

# Define the command to run the app
# This uses the package.json "start" script
CMD [ "npm", "start" ]
