const _ = require("underscore");
const moment = require("moment");
const Joi = require("joi");
const Response = require("../config/response");
let commonHelper = require("../Helper/common");
let Services = require("../services");
let message = require("../config/messages");
let todoProjection = ["id", "firstName", "lastName", "dataOfBirth"];

module.exports = {
  getAllUsers: async () => {
    let getAlltodoDetails = await Services.userServices.getAllUsers(todoProjection);
    if (getAlltodoDetails) {
      return getAlltodoDetails;
    } else {
      return {
        rows: [],
        count: 0,
      };
    }
  },
  addUser: async (payloadData) => {
    console.log(payloadData);
    const schema = Joi.object().keys({
      firstName: Joi.string().required(),
      lastName: Joi.string().optional(),
      dataOfBirth:Joi.date().optional(),
    });

    let payload = await commonHelper.verifyJoiSchema(payloadData, schema);
    console.log("Payload Data", payload);
    let condition = {
        firstName: payload.firstName,
    };
    let checktodo = await Services.userServices.getUser(condition,["firstName"]);
    console.log("checktodo data",checktodo);
    if (checktodo) throw Response.error_msg.alreadyExist;
    let objToSave = {};
    if (_.has(payload, "firstName") && payload.firstName != "")
      objToSave.firstName = payload.firstName;
    if (_.has(payload, "lastName") && payload.lastName != "")
      objToSave.lastName = payload.lastName;
    if (_.has(payload, "dataOfBirth") && payload.dataOfBirth != "")
      objToSave.dataOfBirth = payload.dataOfBirth;
    let addUserData = await Services.userServices.addUser(objToSave);
    if (addUserData) {
      return message.success.ADDED;
    } else {
      throw Response.error_msg.InvalidData;
    }
  },
};
