import cors from "cors";
import express, { Application } from "express";
import userRoutes from "../routes/user.route";

class Server {
    private app: Application;
    private port: string;
    private apiPaths = {
        users: "/api/users",
    };

    /**
     * Server constructor.
     * Initializes the Express app, sets the port,
     * calls middlewares and routes methods.
     */
    constructor() {
        this.app = express();
        this.port = process.env.PORT || "8000";
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static("public"));
    }

    routes() {
        this.app.use(this.apiPaths.users, userRoutes);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`server running on port ${this.port}`);
        });
    }
}

export default Server;
