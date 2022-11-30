
const Model = require("../models");
const Response = require("../config/response");
const baseService = require("./base");


/**
 * ######### @function addUser ########
 * ######### @params => criteria, objToSave  ########
 * ######### @logic => Used to add admin ########
 */
exports.addUser = async (objToSave) => {
	var newUserData= new Model.User(objToSave);
	console.log("newUserData",newUserData)
	return await baseService.saveData(newUserData);
	
	
};


// exports.addUser = (objToSave) => {
//    console.log("objToSave",objToSave)
//    var newUserData= new User(objToSave);
// 	return new Promise((resolve, reject) => {
	   
//         newUserData.save().then((result) => {
// 				console.log("data is saved successfully",result)
// 				resolve(result);
// 			}).catch((err) => {
// 				console.log(err);
// 				reject(Response.error_msg.implementationError);
// 			});
// 	});
// };

/**
 * ######### @function getUser ########
 * ######### @params => criteria, objToSave  ########
 * ######### @logic => Used to add admin ########
 */


 exports.getUser = async(criteria, projection) => {
	return await baseService.getSingleRecord(Model.User, criteria, projection);

};
 

/**
 * ######### @function getAllAdmins ########
 * ######### @params => criteria, projection,limit, offset     ########
 * ######### @logic => Used to retrieve all the matching admin users ########
 */
exports.getAllUsers = () => {
	return new Promise((resolve, reject) => {
		Model.User.find()
			.then(result => {
				resolve(result);
			}).catch(err => {
				console.log("getAll err ==>>  ", err);
				reject(Response.error_msg.implementationError);
			});
	});
};
