import mongoose from "mongoose";
const DestinationSchema = new mongoose.Schema({
    name: {
     type:String,requried:true
    },
    price: {
        type:String,requrired:true
    },
    image: {
        type:String
    }
});

const Destination = mongoose.model("Destination", DestinationSchema);

export default Destination
