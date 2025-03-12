import userRoutes from "./users.js";

const setupRoutes = (app) => {
  app.use("/users", userRoutes);
};

export default setupRoutes;