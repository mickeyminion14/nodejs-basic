const http = require("http");

const router = require('./routes/admin')
const express = require("express");

const app = express();

app.use(express.static('./public'));
app.use(router);
app.use(express.json());

// app.use("/admin",routerName);

app.listen(8088, () => {
  console.log("server is running on 8088");
})