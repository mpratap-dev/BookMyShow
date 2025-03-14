import movieRouter from "./movies.js";
import userRoutes from "./users.js";

const setupRoutes = (app) => {
  app.use("/users", userRoutes);
  app.use("/movies", movieRouter);
}

export default setupRoutes;