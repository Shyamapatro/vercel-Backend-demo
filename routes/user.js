var express = require("express");
var router = express.Router();
let Controllers = require("../Controllers");
const sendResponse = require("../Helper/sendResponse");

router.post("/api/user/add", (req, res) => {
  let payload = req.body;
  console.log("Payload data", payload);
  return sendResponse.executeMethod(Controllers.userController.addUser, payload, req, res);
});

router.get("/api/user/getall", (req, res) => {
  let payload = req.query;
  return sendResponse.executeMethod(Controllers.userController.getAllUsers, payload, req, res);
});


module.exports = router;
