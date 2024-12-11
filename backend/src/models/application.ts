const applicationSchema = new Schema({
     user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
     jobPost: { type: Schema.Types.ObjectId, ref: 'JobPost', required: true },
     status: { type: String, default: 'PENDING' }, // e.g., PENDING, ACCEPTED, REJECTED
     appliedAt: { type: Date, default: Date.now }
   });
   
   const Application = mongoose.model('Application', applicationSchema);
   