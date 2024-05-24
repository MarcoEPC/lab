const express = require("express")
const router = express.Router()
const adminAuth = require("../middlewares/adminAuth")

router.get("/admin/dashboard", /*adminAuth,*/(req, res) => {
    res.render("admin/dashboard")
})


module.exports = router