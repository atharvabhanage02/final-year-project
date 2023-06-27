import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  studentInfo: [],
  updateStatus: {},
};

// Get Student Info
export const getStudentInfo = createAsyncThunk("student/info", async (id) => {
  return await axios.get(`http://localhost:5000/api/v1/student/${id}/info`);
});

// All Update API's
export const updateAboutSection = createAsyncThunk(
  "student/updateAbout",
  async (updateInfo) => {
    const { id, payload } = updateInfo;
    return await axios.put(
      `http://localhost:5000/api/v1/student/${id}/update_about`,
      payload
    );
  }
);
export const updateSocialSection = createAsyncThunk(
  "student/updateAbout",
  async (updateInfo) => {
    const { id, payload } = updateInfo;
    return await axios.put(
      `http://localhost:5000/api/v1/student/${id}/update_socials`,
      payload
    );
  }
);
export const updateSkillsSection = createAsyncThunk(
  "student/updateAbout",
  async (updateInfo) => {
    const { id, payload } = updateInfo;
    console.log("Skills payload ", payload);
    return await axios.put(
      `http://localhost:5000/api/v1/student/${id}/update_skills`,
      payload
    );
  }
);
export const updateAchievementsSection = createAsyncThunk(
  "student/updateAbout",
  async (updateInfo) => {
    const { id, payload } = updateInfo;
    return await axios.put(
      `http://localhost:5000/api/v1/student/${id}/update_achievements`,
      payload
    );
  }
);

export const addEducationSection = createAsyncThunk(
  "student/updateAbout",
  async (updateInfo) => {
    const { id, payload } = updateInfo;
    return await axios.put(
      `http://localhost:5000/api/v1/student/${id}/add_education`,
      payload
    );
  }
);
// ******************

const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getStudentInfo.fulfilled, (state, action) => {
      console.log("payload is ", action.payload);
      state.studentInfo = action.payload.data.student;
      localStorage.setItem(
        "student",
        JSON.stringify(action.payload.data.student)
      );
      console.log("Localstorage ", localStorage.getItem("student"));
    });
    builder.addCase(updateAboutSection.fulfilled, (state, action) => {
      console.log("Update API call", action.payload);
      state.updateStatus = action.payload.data;
    });
    builder.addCase(updateAboutSection.rejected, (state, action) => {
      console.log("Update API rejected");
    });
  },
});
export const {} = studentSlice.actions;
export default studentSlice.reducer;
