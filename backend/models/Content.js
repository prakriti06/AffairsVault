const mongoose = require('mongoose');

const SubjectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  resources: [{ type: String }],
});

module.exports = mongoose.model('Subject', SubjectSchema);

