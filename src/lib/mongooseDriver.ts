import mongoose from "mongoose";

export class MongooseDriver {
  private url: string;
  constructor(url: string) {
    this.url = url;
  }

  async connect() {
    try {
      await mongoose.connect(this.url);

      console.log("MongoDB connected");
    } catch (error) {
      console.log("MongoDB connection error: " + error);
    }
  }
}
