const mongoose = require("mongoose");
const { Schema, model, Types } = mongoose;

const HouseSchema = new Schema(
    {
        dtype: {type: String, required : true},
        house_id: { type: Number, required: true},
        bath_room: {type: Number, required: true},
        bed: {type: Number, required: true},
        house_type: {type: String, required : true},
        person_capacity: {type: Number, required: true},
        room_size: {type: Number, required: true},
    }
);

const House = mongoose.model("House", HouseSchema);
module.exports = { House };