const express = require("express");
const router = express.Router();
const controller = require("./controller");

router.post("/login", controller.login)

router.get("/logout", controller.logout)

router.post("/register", controller.register)

router.get("/getposts", controller.getPosts);

router.post("/newpost", controller.post)

router.get("/user", (req, res) => {
    res.send(req.user)
})


module.exports = router;