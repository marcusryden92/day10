const bodyParser = require("body-parser");

const logger = (req, _, next) => {
  console.log(req.headers);
  next();
};

const handlePost = (db) => {
  return (res, req) => {
    db.push(req.body);
    res.status(201).end();
  };
};

const handleGet = (db) => {
  fakedatabase.push(req.body);
  res.json(req.boy);
};

function setupRouting(app, db) {
  app.use(bodyParser.json());
  app.use(logger);

  app.post("/todo", handlePost);
  app.get("/todo", handleGet);
}

module.exports = { setupRouting };
