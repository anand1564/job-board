const mongoose = require('mongoose');
const { Schema } = mongoose;

const jobPostSchema = new Schema({
     title: { type: String, required: true },
     description: { type: String },
     company: { type: Schema.Types.ObjectId, ref: 'Company', required: true },
     location: { type: String },
     minSalary: { type: Number },
     maxSalary: { type: Number },
     status: { type: String, enum: ['OPEN', 'CLOSED', 'IN_REVIEW'], default: 'OPEN' },
     createdAt: { type: Date, default: Date.now },
     updatedAt: { type: Date, default: Date.now },
     applicants: [{ type: Schema.Types.ObjectId, ref: 'Application' }],
     comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
     createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
     tags: [String] // Embedded array of tags
   });
   
   const JobPost = mongoose.model('JobPost', jobPostSchema);
   
export default JobPost