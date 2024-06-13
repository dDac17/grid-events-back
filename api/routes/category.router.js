const router = require("express").Router()

const {
  getAllCategories,
  getOneCategory,
  createCategory,
  updateOneCategory,
  deleteOneCategory,
  getCategoryEvent
} = require("../controllers/category.controller")

router.get("/", getAllCategories)
router.get("/:id", getOneCategory)
router.get('/:id/event', getCategoryEvent)
router.post("/", createCategory)
router.put("/:id", updateOneCategory)
router.delete("/:id", deleteOneCategory)

module.exports = router