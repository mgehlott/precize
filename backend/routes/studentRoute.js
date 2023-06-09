const express = require("express");
const {
  getAllData,
  insertData,
  updateData,
  deleteData,
  getRank
} = require("../controllers/studentController");

const router = express.Router();

router.get("/", getAllData);
router.post("/", insertData);
router.put("/update", updateData);
router.post("/delete", deleteData);
router.get('/rank/:name',getRank);

module.exports = router;
