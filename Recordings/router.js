const { Router } = require("express");
const Recordings = require("./model");
const router = new Router();

router.post("/recording?sslmode=require", async (request, response, next) => {
  try {
    const { name, description, spaceId, location } = request.body;

    const entity = { name, description, spaceId, location };

    const recording = await Recordings.create(entity);

    response.send(recording);
  } catch (error) {
    next(error);
  }
});
router.get("/recording?sslmode=require", (req, res, next) => {
  //console.log("this is a get call to find all recordings", res.body);
  Recordings.findAll({
    attributes: ["id", "name", "location", "description", "url", "spaceId"],
    raw: true
  })
    .then(recordings => {
      res.json(recordings);
    })
    .catch(next);
});

router.delete("/recording/:spaceId?sslmode=require", (req, res, next) => {
  Recordings.destroy({ where: { id: req.params.spaceId } })
    .then(number => res.send({ number }))
    .catch(next);
});

module.exports = router;
