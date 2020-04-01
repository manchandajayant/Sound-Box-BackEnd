const { Router } = require("express");
const Spaces = require("./model");
const router = new Router();
const Files = require("../Files/model");

router.post("/space", (req, res, next) => {
  console.log("this is a new space", req.body);
  Spaces.create(req.body)
    .then(spaces => res.json(spaces))
    .catch(next);
});

router.get("/space", (req, res, next) => {
  //console.log("this is a get call to find all spaces", res.body);
  Spaces.findAll({
    attributes: ["id", "name", "builtIn", "description", "url"],

    raw: true
  })
    .then(spaces => {
      res.json(spaces);
    })
    .catch(next);
});
router.get("/space/:id", (req, res, next) => {
  //console.log("this is to fetch space by id");
  Spaces.findByPk(req.params.id, { include: Files })
    .then(space => {
      res.json(space);
    })
    .catch(next);
});

router.put("/space/:id", (req, res, next) => {
  Spaces.findByPk(req.params.id)
    .then(spaces => spaces.update(req.body))
    .then(spaces => res.send(spaces))
    .catch(next);
});

router.delete("/space/:id", (req, res, next) => {
  Spaces.destroy({ where: { id: req.params.id } })
    .then(number => res.send({ number }))
    .catch(next);
});

module.exports = router;
