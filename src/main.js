const express = require("express");

const { setupRouting } = require("./express");

const PORT = process.env.PORT || 8080;

async function main() {
  const fakedatabase = [];
  const app = express();

  setupRouting(app, fakedatabase);

  app.listen(process.env.PORT, () => {
    console.log("Server listening on: " + PORT);
  });
}

main();
