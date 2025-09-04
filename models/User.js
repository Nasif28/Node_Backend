import mongoose from "mongoose";
import AutoIncrementFactory from "mongoose-sequence";

const AutoIncrement = AutoIncrementFactory(mongoose);

const userSchema = new mongoose.Schema({
  id: { type: Number },
  user_name: { type: String, required: true },
  age: Number,
  isActive: { type: Boolean, default: true },
  email: { type: String, unique: true },
  password: String,
  createdAt: { type: Date, default: Date.now },
});

userSchema.plugin(AutoIncrement, { inc_field: "id", id: "user_id_counter" });

const User = mongoose.model("User", userSchema);
export default User;
