const express = require("express")
const router = express.Router()
const adminAuth = require("../middlewares/adminAuth")

router.get("/admin/parceiros", /*adminAuth,*/(req, res) => {
    res.render("admin/parceiros")
})
router.get("/admin/createparceiro", /*adminAuth,*/(req, res) => {
    res.render("admin/createparceiro")
})
router.get("/admin/editParceiro", /*adminAuth,*/(req, res) => {
    res.render("admin/editParceiro")
})
router.get("/admin/showParceiro", /*adminAuth,*/(req, res) => {
    res.render("admin/showParceiro")
})
router.get("/admin/delParceiro", /*adminAuth,*/(req, res) => {
    res.render("admin/delParceiro")
})
module.exports = router