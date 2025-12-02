# Development Dockerfile for Astro + Tailwind CSS
FROM node:22-alpine

WORKDIR /app

# Install dependencies first for better caching
COPY package*.json ./
RUN npm install

# Copy source files
COPY . .

# Expose Astro dev server port
EXPOSE 4321

# Environment for Docker container networking
ENV HOST=0.0.0.0
ENV PORT=4321

# Start dev server
CMD ["npm", "run", "dev"]
