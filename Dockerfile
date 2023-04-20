# Base image based on Node.js
FROM node

# Set working directory
WORKDIR /app

# Copy the folders with the application to the container
COPY . . 


# Installing backend and frontend dependencies
RUN cd backend && npm i
RUN cd frontend && npm i

# Open the port on which the server will run
EXPOSE 3000

# Start the server
CMD ["sh", "-c", "cd backend && npm run start & cd frontend && npm run build"]