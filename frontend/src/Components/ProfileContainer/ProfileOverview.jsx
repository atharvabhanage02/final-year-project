import { useEffect } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { useSelector } from "react-redux";
function ProfileOverview() {
  const studentInfo = JSON.parse(localStorage.getItem("student"));

  return (
    <div className="border-2 border-solid border-neutral-200 rounded-md px-6 py-6 mb-20">
      <p className="text-2xl font-bold m-2">What recruiters will see</p>
      <div className="border-2 border-solid border-neutral-200 rounded-md px-6 py-6 mb-20 flex flex-col gap-4">
        <div className="flex justify-between">
          <p className="font-bold text-xl">
            {studentInfo.firstName} {studentInfo.lastName}
          </p>
          <div className="flex gap-2">
            <p className="text-sm border border-solid w-fit rounded-md px-1 py-1 tracking-tighter bg-[#ededed] cursor-pointer">
              <AiFillGithub />
            </p>
            <p className="text-sm border border-solid w-fit rounded-md px-1 py-1 tracking-tighter bg-[#ededed] cursor-pointer">
              <AiFillLinkedin />
            </p>
            <p className="text-xs border border-solid w-fit rounded-md px-1 py-1 tracking-tighter bg-[#ededed] cursor-pointer">
              Website
            </p>
          </div>
        </div>
        <div>
          <p className="text-sm mb-2 text-[#717584]">Looking for</p>
          <p className="text-sm">{studentInfo.bio}</p>
        </div>
        <div>
          <p className="text-sm mb-2 text-[#717584]">Education</p>
          {studentInfo.education.map((edu, i) => {
            return (
              <div key={i}>
                <p className="font-bold">{edu.degree}</p>
                <p className="text-sm text-[#717584]">
                  {edu.college_name} {edu.graduation}
                </p>
              </div>
            );
          })}
        </div>
        <div>
          <p className="text-sm mb-2 text-[#717584]">Skills</p>
          <div className="flex gap-2">
            {studentInfo &&
              studentInfo.skills.map((skill, i) => {
                return (
                  <p
                    className="text-sm border border-solid w-fit rounded-md px-1 py-1 tracking-tighter bg-[#ededed]"
                    key={i}
                  >
                    {skill}
                  </p>
                );
              })}
          </div>
        </div>
        <div>
          <p className="text-sm mb-2 text-[#717584]">Desired Role</p>
          <p className="text-sm border border-solid w-fit rounded-md px-1 py-1 tracking-tighter bg-[#ededed] ">
            {studentInfo.primary_role}
          </p>
        </div>
        {/* <div>
          <p className="text-sm mb-2 text-[#717584]">Achievements</p>
          <p>{studentInfo?.achievements}</p>
        </div> */}
      </div>
    </div>
  );
}
export { ProfileOverview };
