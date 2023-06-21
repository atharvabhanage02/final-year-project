import "./App.css";
import { Routes, Route } from "react-router-dom";
import Profile from "./Pages/Profile/Profile";
import { Jobs } from "./Pages/Jobs/Jobs";
import { UserProfile } from "./Pages/UserProfile/UserProfile";
import { AppliedApplications } from "./Pages/Applied Jobs/AppliedApplications";
// import { VerifyRecruiter } from "./Pages/RecruiterProfile/VerifyRecruiter";
import { CreateJob } from "./Pages/RecruiterJobs/CreateJob";
import { PostedJob } from "./Pages/RecruiterJobs/PostedJob";
import { RecruiterProfile } from "./Pages/RecruiterProfile/RecruiterProfile";
import { LoginPage } from "./Pages/Authentication/LoginPage";
import { SignupPage } from "./Pages/Authentication/SignupPage";
import { LandingPage } from "./Pages/LandingPage/LandingPage";
import { ViewStudentInfo } from "./Pages/ViewStudentInfo/ViewStudentInfo";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/jobs" element={<Jobs />} />
        <Route
          path="/createprofile"
          element={
            <div className="flex items-center justify-center bg-neutral-200">
              <Profile />
            </div>
          }
        />
        <Route path="/" element={<LandingPage />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/applied" element={<AppliedApplications />} />

        {/* Authentication */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        {/* The other side */}
        {/* <Route path="/recruiter/profile" element={<UserProfile />} /> */}
        <Route path="/recruiter/createjob" element={<CreateJob />} />
        <Route path="/recruiter/postedjob" element={<PostedJob />} />
        <Route path="/recruiter/company" element={<RecruiterProfile />} />
        <Route path="/student/:studentId" element={<ViewStudentInfo />} />
      </Routes>
    </div>
  );
}

export default App;
