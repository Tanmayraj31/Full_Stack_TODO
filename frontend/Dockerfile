# Use Node image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files first (better caching)
COPY package*.json ./

# Install dependencies
RUN npm install && npm cache clean --force


# Copy rest of the app
COPY . .

# Expose React dev server port
EXPOSE 5173

# Start React app
CMD ["npm", "run","dev"]


