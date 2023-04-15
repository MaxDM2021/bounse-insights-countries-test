const app = require('./app');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();


mongoose.set('strictQuery', false);

const { HOST_URI } = process.env;


app.listen(3001, () => {
  console.log("Server running. Use our API on port: 3000")
})


async function main() {
  try {
    await mongoose.connect(HOST_URI);
    console.log('Database connection successful');

    app.listen(3001, () => {
      console.log('Server running. Use our API on port: 3001');
    });
  } catch (error) {
    console.error('main failed', error.message);
  }
}

main();