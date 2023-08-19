const Patient = require('../../../models/patient');
const Report = require('../../../models/report');
const Doctor = require('../../../models/doctor');

exports.register= async (req, res) => {

  const doctor =await req.doctor._id;      // fetching doctor's id

 
    try {
      const { name, phone } = await req.body; 
      console.log(phone)
      let patient;
      patient = await Patient.find({
        phone
      });
      
      //create a patient if no patient exists
      if (patient.length !== 0) {
        return res.status(200).json({
          success: true,
          body: patient[0]
        });
      }
      
      
      patient = await Patient.create({
        name,
        phone,
        doctor
      });
      
      // Returning response after registering the patient 
      return res.status(201).json({
        success: true,
        body: patient,
        msg:'Patient Registered Sucessfully!'
      });
    } catch (err) {
      // Error handling
      console.log(err);
      return res.status(401).json({
        success: false,
        msg:'Error in Registering the patient !'
      });
    }
  };

  