const router = require("express").Router()

const {
  getAllCategories,
  getOneCategory,
  createCategory,
  updateOneCategory,
  deleteOneCategory,
  getCategoryEvent
} = require("../controllers/category.controller")

const {
  checkAuth,
  checkAdmin
} = require('../middelwares')


router.get("/", getAllCategories)
router.get("/:id", getOneCategory)
router.get('/:id/event', getCategoryEvent)
router.post("/",checkAuth, checkAdmin, createCategory)
router.put("/:id",checkAuth, checkAdmin, updateOneCategory)
router.delete("/:id", checkAuth, checkAdmin, deleteOneCategory)

module.exports = router