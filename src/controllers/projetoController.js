const express = require("express")
const router = express.Router()
const adminAuth = require("../middlewares/adminAuth")

router.get("/admin/projetos", /*adminAuth,*/(req, res) => {
    res.render("admin/projetos")
})
router.get("/admin/createprojeto", /*adminAuth,*/(req, res) => {
    res.render("admin/createprojeto")
})


module.exports = router