const express = require("express")
const router = express.Router()
const adminAuth = require("../middlewares/adminAuth")

router.get("/admin/bolsas", /*adminAuth,*/(req, res) => {
    res.render("admin/bolsas")
})
router.get("/admin/createBolsa", /*adminAuth,*/(req, res) => {
    res.render("admin/createBolsa")
})
router.get("/admin/editBolsa", /*adminAuth,*/(req, res) => {
    res.render("admin/editBolsa")
})
router.get("/admin/showBolsa", /*adminAuth,*/(req, res) => {
    res.render("admin/showBolsa")
})
router.get("/admin/delBolsa", /*adminAuth,*/(req, res) => {
    res.render("admin/delBolsa")
})

module.exports = router