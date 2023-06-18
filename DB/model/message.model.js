import mongoose, { Schema, model, Types } from "mongoose";

const messageSchema = new Schema(
  {
    message: {
      type: String,
      required: true,
    },
    receiverId: {   /**  الشخص الي رح يستقبل الرسالة */
      type: Types.ObjectId,
      required: true,
    },
    
  },
  {
    timestamps: true,
  }
);
const messageModel =mongoose.model.Message || model("Message", messageSchema);  

export default messageModel;
