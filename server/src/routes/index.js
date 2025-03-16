import movieRouter from "./movies.js";
import theatersRouter from "./theaters.js";
import userRoutes from "./users.js";

const setupRoutes = (app) => {
  app.use("/users", userRoutes);
  app.use("/movies", movieRouter);
  app.use("/theaters", theatersRouter);
}

export default setupRoutes;