const { create, login } = require("../controllers/auth.controller");

const router = require("express").Router();

//REGISTER
router.post("/register", create);
//LOGIN

router.post("/login", login);

module.exports = router;
