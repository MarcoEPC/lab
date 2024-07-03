const express = require("express")
const router = express.Router()
const adminAuth = require("../middlewares/adminAuth")

router.get("/admin/projetos", /*adminAuth,*/(req, res) => {
    res.render("admin/projetos")
})
router.get("/admin/createProjeto", /*adminAuth,*/(req, res) => {
    res.render("admin/createProjeto")
})
router.get("/admin/editProjeto", /*adminAuth,*/(req, res) => {
    res.render("admin/editProjeto")
})
router.get("/admin/showProjeto", /*adminAuth,*/(req, res) => {
    res.render("admin/showProjeto")
})
router.get("/admin/delProjeto", /*adminAuth,*/(req, res) => {
    res.render("admin/delProjeto")
})

module.exports = router