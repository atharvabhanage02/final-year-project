const Student = require("../models/studentModel");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const sendToken = require("../utils/jwtToken");
// Create Student User
// User Registration
exports.registerStudentUser = catchAsyncErrors(async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;
  const student = await Student.create({
    firstName,
    lastName,
    email,
    password,
  });
  res.status(200).json({
    success: true,
    message: "User created successfully",
    student,
  });
  // sendToken(student, 201, res);
});

// Login User
exports.loginUser = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(
      new ErrorHandler("Please enter email and password correctly"),
      400
    );
  }
  const user = await Student.findOne({ email }).select("+password");

  if (!user) {
    return next(new ErrorHandler("Invalid Email or Password", 401));
  }

  const isPasswordMatched = await user.comparePassword(password);

  if (!isPasswordMatched) {
    return next(new ErrorHandler("Invalid Email or Password", 401));
  }

  // sendToken(user, 200, res);
});

// Logout User
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

// Get all Students -- Admin
exports.getAllStudents = async (req, res, next) => {
  const students = await Student.find();
  res.status(200).json({
    success: true,
    students,
  });
};

exports.createNewProfile = async (req, res, next) => {
  const { email, role, yoe, linkedin_profile, personal_website } = req.body;
  const updatedData = {
    role,
    yoe,
    linkedin_profile,
    personal_website,
  };
  const student = await Student.findOneAndUpdate({ email }, updatedData);

  res.status(200).send({
    success: true,
    student,
  });
};

exports.getStudentInfo = async (req, res, next) => {
  const { id } = req.params;
  const student = await Student.findOne({ _id: id });
  res.status(200).json({
    success: true,
    message: "Student details fetched successfully",
    student,
  });
};

exports.updateStudentAboutSection = async (req, res, next) => {
  const { id } = req.params;
  const { firstName, lastName, bio } = req.body;
  const student = await Student.findOneAndUpdate(
    { _id: id },
    { firstName, lastName, bio }
  );
  res.status(200).json({
    success: true,
    message: "About section updated successfully",
    student,
  });
};

exports.updateStudentSocials = async (req, res, next) => {
  const { id } = req.params;
  const {
    personal_website,
    linkedin_profile,
    github_profile,
    leetcode_profile,
  } = req.body;
  const student = await Student.findOneAndUpdate(
    { _id: id },
    { personal_website, linkedin_profile, github_profile, leetcode_profile }
  );
  res.status(200).json({
    success: true,
    message: "Social Profiles updated successfully",
    student,
  });
};

exports.updateStudentAchievements = async (req, res, next) => {
  const { id } = req.params;
  const { achievements } = req.body;
  const student = await Student.findOneAndUpdate({ _id: id }, { achievements });
  res.status(200).json({
    success: true,
    message: "Achievements section updated successfully",
    student,
  });
};

exports.addEducation = async (req, res, next) => {
  const { id } = req.params;
  const { college_name, graduation, degree, gpa, max_gpa } = req.body;
  const student = await Student.findOneAndUpdate(
    { _id: id },
    { college_name, graduation, degree, gpa, max_gpa }
  );
  res.status(200).json({
    success: true,
    message: "Education added successfully",
    student,
  });
};

exports.updateStudentSkills = async (req, res, next) => {
  const { id } = req.params;
  const { skills } = req.body;
  const student = await Student.findOneAndUpdate({ _id: id }, { skills });
  res.status(200).json({
    success: true,
    message: "Skills section updated successfully",
    student,
  });
};
