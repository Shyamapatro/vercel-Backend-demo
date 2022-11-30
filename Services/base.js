const Response = require("../config/response");

exports.saveData = (newUserData) => {
    // console.log("Collection Name: " + newUserData)
	return new Promise((resolve, reject) => {
	    newUserData.save().then((result) => {
				console.log("data is saved successfully",result)
				resolve(result);
			}).catch((err) => {
				console.log(err);
				reject(Response.error_msg.implementationError);
			});
	});
};


exports.getSingleRecord = (model, criteria, projection) => {
	console.log(`getSingle`,model, criteria, projection)
	return new Promise((resolve, reject) => {
		model.findOne(criteria,projection).then(result => {
				resolve(result);
			}).catch((err) => {
				console.log(err);
				reject(Response.error_msg.implementationError);
			});
	});
};