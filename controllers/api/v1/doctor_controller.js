const Doctor=require('../../../models/doctor');
const jwt=require('jsonwebtoken');


//Registering the doctor in the form
module.exports.register = async function(req,res) {
  try {

    const doctor=  await Doctor.create(req.body);
      
      return res.status(200).json({
          success: true,
          message:doctor
      });

  } catch (err) {
      return res.status(500).json({
          success: false,
          message:err.message
      });
  }
}

//Login for Doctor
module.exports.login= async (req, res)=>{
  try {
    let { email, password } = req.body; 
    //if body is empty
    if (!email || !password) {
      return res.status(400).json({ 
        success: false,
        msg:'Empty email id / password'
      });
    }

    let doctor = await Doctor.findOne({ email: email });
    if (!doctor) {
      return res.status(401).json({ 
        success: false, 
        msg: "Invalid Username / Password !" 
      });
    }

    // Checking if password matches 
    // calling function from Doctor model bcrypt function.

    const isMatch = await doctor.matchPassword(password);
    // Error handling if the password does'nt match
    if (!isMatch) {
      return res.status(401).json({ 
        success: false, 
        msg: "Invalid Username or Password!" 
      });
    }

    // Get JWT token
    const token = doctor.getSignedJwtToken();

    // Return response
    res.status(200).json({
      success: true,
      token,
      msg: `Log-In Sucessful! Save the token for later reference  ${doctor.username}!`
    });

  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      msg:'Error in Loging in !'
    });
  }
}
