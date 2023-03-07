const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  class: {
    type: String,
  },
  primary_role: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: true,
  },
  profile_image: [
    {
      public_id: {
        type: String,
      },
      url: {
        type: String,
        // required: true,
      },
    },
  ],
  skills: [],
  linkedin_profile: {
    type: String,
  },
  github_profile: {
    type: String,
  },
  leetcode_profile: {
    type: String,
  },
  personal_website: {
    type: String,
  },
  achievements: {
    type: String,
  },
  projects: [
    {
      name: {
        type: String,
      },
      summary: {
        type: String,
      },
      github_link: {
        type: String,
      },
      live_link: {
        type: String,
      },
      description: {
        type: String,
      },
    },
  ],
  cgpa: {
    type: Number,
    required: true,
  },
});
module.exports = mongoose.model("Student", studentSchema);
