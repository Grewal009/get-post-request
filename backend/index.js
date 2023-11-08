const express = require("express");
const app = express();
const port = 8080;

// express dosenot understand what type of data form is sending.
// so we need to convert data into readable stream for express.
app.use(express.urlencoded({ extended: true })); //convert urlencoded data

app.use(express.json()); //convert json data

app.get("/register", (req, res) => {
  console.log("data ", req.query);
  let { user, password } = req.query;
  res.send(`standard GET response, Welcome ${user}!`);
});

app.post("/register", (req, res) => {
  console.log(req.body);
  let { user, password } = req.body;
  res.send(`standard POST response, Welcome ${user}!`);
});

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
