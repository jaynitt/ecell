import Startup from "../model/startup.js";
import express from "express";
const router = express.Router();

// Add new startup
// router.post("/startupadd", async (req, res) => {
//   const { title, description, members } = req.body;
//   try {
//     const startup = new Startup({ title, description, members });
//     await startup.save();
//     res.json({ message: "Startup registered", startup });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: "Error registering startup" });
//   }
// });

// // Delete a startup
// router.post("/startupdelete", async (req, res) => {
//   const { id } = req.body;
//   try {
//     const startupToDelete = await Startup.findByIdAndDelete(id);
//     if (!startupToDelete) {
//       return res.json({ message: "Startup not found" });
//     }
//     res.json({ message: "Startup deleted successfully" });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: "Error deleting startup" });
//   }
// });

// // Edit/update a startup
// router.post("/startupedit", async (req, res) => {
//   const { id, title, description, members } = req.body;

//   const updateFields = {};
//   if (title !== undefined && title !== "") updateFields.title = title;
//   if (description !== undefined && description !== "") updateFields.description = description;
//   if (members !== undefined && members !== "") updateFields.members = members;

//   try {
//     const updatedStartup = await Startup.findByIdAndUpdate(id, updateFields, { new: true });
//     if (!updatedStartup) {
//       return res.json({ message: "Startup not found" });
//     }
//     res.json({ message: "Startup updated successfully", startup: updatedStartup });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: "Error updating startup" });
//   }
// });

// Get all startups or search by title
router.get("/", async (req, res) => {
  const title = req.query.title;

  try {
    let startups;
    if (title) {
      startups = await Startup.find({ title });
    } else {
      startups = await Startup.find();
    }
    res.json(startups);
   
  } catch (error) {
    console.log(error, "in route");
    res.status(500).json({ message: "Error fetching startups" });
  }
});

export default router;
