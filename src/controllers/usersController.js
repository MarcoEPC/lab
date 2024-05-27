const express = require("express")
const router = express.Router()
const bcrypt = require("bcryptjs")
const adminAuth = require("../middlewares/adminAuth")
//const User=require("../models/User")

router.get("/admin/users",/* adminAuth,*/(req, res) => {
    res.render("admin/users")
})
router.get("/admin/createUser", (req, res) => {
    res.render("admin/createUser")
})
router.post("/admin/users/create", adminAuth, (req, res) => {
    var email = req.body.email
    var password = req.body.password

    User.findOne({ where: { email: email } }).then(user => {
        if (user == undefined) {
            var salt = bcrypt.genSaltSync(10)
            var hash = bcrypt.hashSync(password, salt)

            User.create({
                email: email,
                password: hash
            }).then(() => {
                res.redirect("/")
            }).catch((err) => {
                res.redirect("/")
            })
        } else {
            res.redirect("/admin/users/create")
        }
    })

})
router.get("/logout", (req, res) => {
    req.session = undefined
    res.redirect("/")
})

module.exports = router