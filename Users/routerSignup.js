const { Router } = require("express");
const User = require("./model");
const bcrypt = require('bcryptjs');

const router = new Router();

router.post("/signup", async (req, res, next) => {
  try {
    const user = {
      userName: req.body.userName || "mma",
      email: req.body.email || "3@3.com",
      password: bcrypt.hashSync(req.body.password, 10) || "ka",
    };
    console.log(user)
    const userCreate = await User.create(user);
    res.send(userCreate);
  } catch (error) {
    next(error);
  }
});

router.get("/user", (req, res, next) => {
  User.findAll({ attributes: ["email"], raw: true })
    .then((userlist) => res.send(res.json({ userlist })))
    .catch(next);
});

router.get("/user/:id", (req, res, next) => {
  User.findByPk(req.params.id)
    .then((user) => {
      res.json(user);
    })
    .catch(next);
});

router.delete("/user/:id", (req, res, next) => {
  User.destroy({ where: { id: req.params.id } })
    .then((use) => res.send({ use }))
    .catch(next);
});

module.exports = router;
