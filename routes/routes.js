import userRoutes from "./userRoutes.js";
import bookRoutes from "./bookRoutes.js";
import authRoutes from "./authRoutes.js";

export default (app) => {
  app.use("/api/users", userRoutes);
  app.use("/api/books", bookRoutes);
  app.use("/api/auth", authRoutes);
};
