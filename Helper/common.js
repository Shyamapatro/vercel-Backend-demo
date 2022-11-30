var _ = require("underscore");


module.exports = {

	verifyJoiSchema: async(data, schema) => {
		console.log(data)
		const validSchema = await schema.validate(data);
		if ((validSchema) && (validSchema.error)) {
			throw validSchema.error;
		} else {
			
			return validSchema.value;
		}
	},

};