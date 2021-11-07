const { Router } = require("express");
const Files = require("./model");
const router = new Router();

router.post("/file", async (request, response, next) => {
  try {
    const { name, description, spaceId, location } = request.body;

    const entity = { name, description, spaceId, location };
    console.log("name",entity)
    const file = await Files.create(entity);
    console.log("file",file)
    response.send(file);
  } catch (error) {
    next(error);
  }
});
router.get("/file", (req, res, next) => {
  //console.log("this is a get call to find all files", res.body);
  Files.findAll({
    attributes: ["id", "name", "location", "description", "url"],
    raw: true
  })
    .then(files => {
      res.json(files);
    })
    .catch(next);
});

router.delete("/file/:spaceId", (req, res, next) => {
  Files.destroy({ where: { id: req.params.spaceId } })
    .then(number => res.send({ number }))
    .catch(next);
});

module.exports = router;
