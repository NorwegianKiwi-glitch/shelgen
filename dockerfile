# Use Node.js LTS image
FROM node:18

# Set working directory inside container
WORKDIR /app

# Copy package.json and package-lock.json if you have them
COPY package*.json ./

# Install dependencies (if you use Express, etc.)
RUN npm install

# Copy all files into container
COPY . .

# Expose the port your server.js uses (commonly 3000 or 8080)
EXPOSE 3000

# Run the server
CMD ["node", "server.js"]
