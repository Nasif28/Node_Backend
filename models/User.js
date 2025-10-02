import mongoose from "mongoose";
// import AutoIncrementFactory from "mongoose-sequence";

// const AutoIncrement = AutoIncrementFactory(mongoose);

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true, trim: true },
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      lowercase: true,
    },
    password: { type: String, required: true },
    role: { type: String, enum: ["user", "admin"], default: "user" },
    isActive: { type: Boolean, default: true },
    // createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

// userSchema.plugin(AutoIncrement, { inc_field: "id", id: "user_id_counter" });

const User = mongoose.model("User", userSchema);
export default User;
