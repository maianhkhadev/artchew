import mongoose from "mongoose";

const DATABASE_CONNECTION = 'mongodb://root:jUTNy5NQno898cQgRzDXL5Z4Wwr3CCv13keuL8k3enwli4WvIqHx5RleM69TFVOM@89.116.23.169:5432/?directConnection=true'

const connectDB = async () => {
  try {
    await mongoose.connect(DATABASE_CONNECTION);
    console.log("MongoDB connected successfully!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

export default connectDB;
