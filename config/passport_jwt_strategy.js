const passport = require('passport');
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

const Doctor = require('../models/doctor');

// using passport authentication
let opts = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: "secrethospitalkey"
}
//hello

passport.use(new JWTStrategy(opts, function(jwtPayLoad, done){
   
    Doctor.findById(jwtPayLoad._id, function(err, user){
        if (err){
            console.log('JWT Error in finding the user!'); 
            return done(err,false);}

        if (user){
            return done(null, user);
        }else{
            return done(null, false);
        }
    })

}));

module.exports = passport;
