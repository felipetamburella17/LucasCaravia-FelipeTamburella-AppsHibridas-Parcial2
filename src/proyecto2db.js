import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect('mmongodb+srv://admin:VG6rjaeouog82q4c@database.p2gtu3q.mongodb.net/?retryWrites=true&w=majority&appName=Database');
        console.log(">>>>> DB is connected")
    } catch (error) {
        console.log(error);
    }
};
