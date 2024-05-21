const express = require("express")
const router = express.Router()


router.get('/', (req, res) => {
    res.render('index.ejs')
})
router.get("/bolsas", (req, res) => {
    res.render("bolsas")
})
router.get("/bolsad", (req, res) => {
    res.render("bolsadetalhe")
})
router.get("/sobre", (req, res) => {
    res.render("sobre")
})
router.get("/projetos", (req, res) => {
    res.render("projectos")
})
router.get("/projetod", (req, res) => {
    res.render("projetodetalhe")
})
router.get("/parcerias", (req, res) => {
    res.render("parcerias")
})
router.get("/login", (req, res) => {
    res.render("login")
})

router.post("/authenticate", (req, res) => {
    var email = req.body.email
    var password = req.body.password
    User.findOne({ where: { email: email } }).then(user => {
        if (user != undefined) {
            var verificacao = bcrypt.compareSync(password, user.password)
            if (verificacao) {
                req.session.user = {
                    id: user.id,
                    email: user.email
                }
                res.redirect("/admin/dashboad")
            } else {
                res.redirect("/login")
            }
        } else {
            res.redirect("/login")
        }
    })
})

module.exports = router
