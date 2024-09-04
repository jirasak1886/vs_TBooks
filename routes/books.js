const express = require("express");
const router = express.Router();

// Import Controller
const { add, update, deletebook, getbook, getid } = require("../controllers/bookController");
// APIs Routing Config
router.post('/',add);
router.put('/:id',update);
router.delete('/:id',deletebook);
router.get('/',getbook);
router.get('/:genre',getid);
// Export router
module.exports=router;