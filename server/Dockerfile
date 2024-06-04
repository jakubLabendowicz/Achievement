# syntax=docker/dockerfile:1

ARG NODE_VERSION=18.13.0
ARG NODE_ENV=production

FROM node:${NODE_VERSION}-alpine

# Use build argument for environment
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies based on the environment
RUN npm i

COPY prisma ./prisma/

# Copy the rest of the source files into the image.
COPY . .

RUN npx prisma generate

# Expose the port that the application listens on.
EXPOSE 8080

# Run the application.
CMD ["npm", "run", "dev"]
