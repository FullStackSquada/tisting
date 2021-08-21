const mongoose = require('mongoose');

const products = new mongoose.Schema({
	type: { type: String, required: true },
	name: { type: String, required: true },
	price : { type: Number, required: true },
	img: { type: String, required: true },
	description: { type: String, required: true },                        
	quantity: { type: Number, required: true },
	averageRating:{ type: Number},
	totalRating : { type: Number},
	rating: [{ type:mongoose.Schema.Types.ObjectId, ref: 'Rating'
}],
	comment: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comments'
}],
	
});                                                                                                                              

module.exports = mongoose.model('Products', products);
