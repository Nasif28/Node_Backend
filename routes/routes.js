import userRoutes from "./userRoutes.js";
import bookRoutes from "./bookRoutes.js";

export default (app) => {
  app.use("/api/users", userRoutes);
  app.use("/api/books", bookRoutes);
};
