const mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
const jwt=require('jsonwebtoken');

const doctorSchema = new mongoose.Schema({
  email: {
      type: String,
      required: true,
      unique: true
  },
  password: {
      type: String,
      required: true
  },
  username: {
      type: String,
      required: true
  }
}, {
  timestamps: true
});


//useing bcrypt library to save password in crypted manner in db

doctorSchema.pre("save", async function() {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);

});



// Sign JWT and return
doctorSchema.methods.getSignedJwtToken = function() {
  return jwt.sign({ id: this._id }, 'secret', {
    expiresIn: '120m'
  });
};

//bcrypt library another function of checking the password enterd with the password in db
doctorSchema.methods.matchPassword = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};
const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports =Doctor;