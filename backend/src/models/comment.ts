const commentSchema = new Schema({
     text: { type: String, required: true },
     author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
     jobPost: { type: Schema.Types.ObjectId, ref: 'JobPost', required: true },
     createdAt: { type: Date, default: Date.now },
     updatedAt: { type: Date, default: Date.now }
   });
   
const comment = mongoose.model('Comment', commentSchema);
   