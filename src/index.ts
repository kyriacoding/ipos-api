import express, { Request, Response } from "express"; // Import the Express framework
import colors from "colors";

import cors from "cors"; // Import the CORS middleware
import dotenv from "dotenv"; // Import the dotenv module

dotenv.config(); // Load environment variables from a .env file into process.env

const app = express(); // Create an Express application instance

app.use(cors()); // Enable Cross-Origin Resource Sharing (CORS) for all routes

const PORT = process.env.PORT || 8000; // Set the server's port from environment variables or default to 8000

app.use(express.json()); // Parse incoming JSON requests and make the data available in req.body

app.listen(PORT, () => {
  // Start the server and listen on the specified port
  console.log(
    colors.white.bold.bgGreen(`Server is running on http://localhost:${PORT}`)
  ); // Log a message indicating the server is running
  console.log(colors.blue("MongoDB connected successfully"));
});

// GET REQUEST
app.get("/customers", (req: Request, res: Response) => {
  const customers = [
    { name: "John Doe", email: "john.doe@example.com", phone: "+1234567890" },
    {
      name: "Joel Smith",
      email: "joel.smith@example.com",
      phone: "+0987654321",
    },
  ];

  return res.status(200).json(customers);
});
