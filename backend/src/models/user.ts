const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  email: { type: String, unique: true, required: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['JOB_SEEKER', 'RECRUITER', 'ADMIN'], default: 'JOB_SEEKER' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  applications: [{ type: Schema.Types.ObjectId, ref: 'Application' }],
  yourJobs: [{ type: Schema.Types.ObjectId, ref: 'JobPost' }],
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
  jobsCreated: [{ type: Schema.Types.ObjectId, ref: 'Company' }]
});

const User = mongoose.model('User', userSchema);
