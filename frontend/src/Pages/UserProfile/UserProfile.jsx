import React, { useEffect } from "react";
import { Navbar } from "../../Components/Navbar/Navbar";
import { ProfileContainer } from "../../Components/ProfileContainer/ProfileContainer";
import { ProgressBar } from "../../Components/ProgressBar/ProgressBar";
import { Sidebar } from "../../Components/Sidebar/Sidebar";
import { ProfileOverview } from "../../Components/ProfileContainer/ProfileOverview";
import { useDispatch, useSelector } from "react-redux";
import { getStudentInfo } from "../../redux/features/studentSlice";

function UserProfile() {
  const studentId = useSelector((state) => state.job.id);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("Student id ", studentId);
    dispatch(getStudentInfo(studentId));
  }, []);
  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="w-full flex mr-32 ml-36 flex-col">
          <ProgressBar />
          <ProfileContainer />
        </div>
      </div>
    </div>
  );
}
export { UserProfile };
