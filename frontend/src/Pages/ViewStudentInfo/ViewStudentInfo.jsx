import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { current } from "@reduxjs/toolkit";
import { Link } from "react-router-dom";

const ViewStudentInfo = () => {
  const { studentId } = useParams();
  console.log("Params are  ", studentId);
  const [currentStudent, setCurrentStudent] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `http://localhost:5000/api/v1/student/${studentId}/info`
      );
      console.log("Current Student ", response.data.student);
      setCurrentStudent(response.data.student);
    })();
  }, []);

  return (
    <div className=" margin-auto border-2 border-solid border-neutral-200 rounded-md px-6 py-6 mb-20">
      <div className="border-2 border-solid border-neutral-200 rounded-md px-6 py-6 mb-20 flex flex-col gap-4">
        <div className="flex justify-between">
          <p className="font-bold text-xl">
            {currentStudent?.firstName} {currentStudent?.lastName}
          </p>
          <div className="flex gap-2">
            <Link
              className="text-sm border border-solid w-fit rounded-md px-1 py-1 tracking-tighter bg-[#ededed] cursor-pointer"
              to={currentStudent?.github_profile}
            >
              <AiFillGithub />
            </Link>
            <Link
              className="text-sm border border-solid w-fit rounded-md px-1 py-1 tracking-tighter bg-[#ededed] cursor-pointer"
              to={currentStudent?.linkedin_profile}
            >
              <AiFillLinkedin />
            </Link>
            <Link
              className="text-xs border border-solid w-fit rounded-md px-1 py-1 tracking-tighter bg-[#ededed] cursor-pointer"
              to={currentStudent?.personal_website}
            >
              Website
            </Link>
          </div>
        </div>
        <div>
          <p className="text-sm mb-2 text-[#717584]">Looking for</p>
          <p className="text-sm">{currentStudent?.bio}</p>
        </div>
        <div>
          <p className="text-sm mb-2 text-[#717584]">Education</p>
          {currentStudent.education ? (
            currentStudent?.education.map((edu, i) => {
              return (
                <div key={i}>
                  <p className="font-bold">{edu?.degree}</p>
                  <p className="text-sm text-[#717584]">
                    {edu?.college_name} {edu?.graduation}
                  </p>
                </div>
              );
            })
          ) : (
            <p>No Education added</p>
          )}
        </div>
        <div>
          <p className="text-sm mb-2 text-[#717584]">Skills</p>
          <div className="flex gap-2">
            {currentStudent.skills ? (
              currentStudent?.skills.map((skill, i) => {
                return (
                  <p
                    className="text-sm border border-solid w-fit rounded-md px-1 py-1 tracking-tighter bg-[#ededed]"
                    key={i}
                  >
                    {skill}
                  </p>
                );
              })
            ) : (
              <p>No Skills added</p>
            )}
          </div>
        </div>
        <div>
          <p className="text-sm mb-2 text-[#717584]">Desired Role</p>
          <p className="text-sm border border-solid w-fit rounded-md px-1 py-1 tracking-tighter bg-[#ededed] ">
            {currentStudent?.primary_role}
          </p>
        </div>
        <div>
          <p className="text-sm mb-2 text-[#717584]">Achievements</p>
          <p>{currentStudent?.achievements}</p>
        </div>
      </div>
    </div>
  );
};

export { ViewStudentInfo };
