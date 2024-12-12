const mongoose = require('mongoose');
const { Schema } = mongoose;

const companySchema = new Schema({
     name: { type: String, required: true },
     description: { type: String },
     location: { type: String },
     jobPosts: [{ type: Schema.Types.ObjectId, ref: 'JobPost' }],
     createdAt: { type: Date, default: Date.now },
     updatedAt: { type: Date, default: Date.now },
     createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true }
   });
   
   const Company = mongoose.model('Company', companySchema);
   
export default Company