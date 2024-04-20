FROM node:20.11.1
ENV NODE_ENV=production
WORKDIR /app
# Update package list
RUN apt-get update

# Install ubuntu dependencies
RUN apt-get install -y build-essential sqlite3 libsqlite3-dev libvips-dev

# Clean up packages
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# Install node dependencies
COPY package.json yarn.lock ./
RUN yarn install

# Copy the rest of the files
COPY . .

# Build the app
RUN yarn build

# Expose the strapi port
EXPOSE 1337

# Run the app
CMD ["yarn", "start"]

