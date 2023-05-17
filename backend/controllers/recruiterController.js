const Recruiter = require("../models/recruiterModel")
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const sendToken = require("../utils/jwtToken");

//Recruiter registration 
exports.registerRecruiterUser = catchAsyncErrors(async (req, res, next) => {
    const { firstName, lastName, email, password, company_name, company_info } = req.body;
    const recruiter = await Recruiter.create({
        firstName, 
        lastName, 
        email, 
        password,
        company_name, 
        company_info
    });
    sendToken(recruiter, 201, res);
});

//Recruiter login
exports.loginRecruiter = catchAsyncErrors(async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
      return next(
        new ErrorHandler("Please enter email and password correctly"),
        400
      );
    }
    const user = await Recruiter.findOne({ email }).select("+password");
  
    if (!user) {
      return next(new ErrorHandler("Invalid Email or Password", 401));
    }
  
    const isPasswordMatched = await user.comparePassword(password);
  
    if (!isPasswordMatched) {
      return next(new ErrorHandler("Invalid Email or Password", 401));
    }
  
    sendToken(user, 200, res);
  });

  //logout
// exports.logout = catchAsyncErrors(async (req, res, next) => {
//   res.cookie("token", null, {
//     expires: new Date(Date.now()),
//     httpOnly: true,
//   });

//   res.status(200).json({
//     success: true,
//     message: "Logged out successfully",
//   });
// });