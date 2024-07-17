# Use the official Node.js image.
FROM node:16

# Create and set the working directory.
WORKDIR /app

# Copy the package.json and package-lock.json files.
COPY package*.json ./

# Install the dependencies.
RUN npm install

# Copy the rest of the application code.
COPY . .

# Build the application.
RUN npm run build

# Expose the port the app runs on.
EXPOSE 4173

# Start the application.
CMD ["npm", "run", "preview", "--", "--host"]
