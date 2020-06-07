let express = require("express");
let body = require("body-parser");
let route = express.Router();
let app = express();
let stack = [];

app.use(body.text({ type: "*/*" }));

route.post("/", (req, res, next) => {
  stack.push(req.body);

  return next();
});

route.delete("/", (req, res, next) => {
  stack.pop();

  return next();
});

route.get("/:index", (req, res) => {
  if (req.params.index >= 0 && req.params.index < stack.length) {
    return res.end("" + stack[req.params.index]);
  }
  res.status(404).end();
});

route.use((req, res) => {
  res.send(stack);
});

app.use("/stack", route);
app.listen(3000);

/**let express = require("express");
let app = express();
let stack = [];

app.post("/stack", (req, res, next) => {
  let buffer = "";

  req.on("data", (data) => {
    buffer += data;
  });
  req.on("end", () => {
    stack.push(buffer);
    return next();
  });
});

app.delete("/stack", (req, res, next) => {
  stack.pop();
  return next();
});

app.get("/stack/:index", (req, res) => {
  if (req.params.index >= 0 && req.params.index < stack.length) {
    return res.end("" + stack[req.params.index]);
  }
  res.status(404).end();
});

app.use("/stack", (req, res) => {
  res.send(stack);
});

app.listen(3000);**/

/**let express = require("express");
let app     = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000);**/
