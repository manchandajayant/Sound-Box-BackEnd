const express = require("express");
const app = express();
const cors = require("cors");
const jsonParser = express.json();
const corsMiddleWare = cors();
const spaceRouter = require("./Spaces/router");
const authRouter = require("./Authorisation/routerLogin");
const userRouter = require("./Users/routerSignup");
const fileRouter = require("./Files/router");

const port = process.env.PORT || 4000;

app.use(corsMiddleWare);
app.use(jsonParser);
app.use(spaceRouter);
app.use(authRouter);
app.use(userRouter);
app.use(fileRouter);

app.listen(port, () => console.log(`Listening on port ${port}`));
