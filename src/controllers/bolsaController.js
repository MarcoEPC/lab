const express = require("express")
const router = express.Router()
const adminAuth = require("../middlewares/adminAuth")

router.get("/admin/bolsas", /*adminAuth,*/(req, res) => {
    res.render("admin/bolsas")
})
router.get("/admin/createbolsa", /*adminAuth,*/(req, res) => {
    res.render("admin/createbolsa")
})

module.exports = router