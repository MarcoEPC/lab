const express = require("express")
const router = express.Router()
const adminAuth = require("../middlewares/adminAuth")

router.get("/admin/parceiros", /*adminAuth,*/(req, res) => {
    res.render("admin/parceiros")
})
router.get("/admin/createparceiro", /*adminAuth,*/(req, res) => {
    res.render("admin/createparceiro")
})

module.exports = router