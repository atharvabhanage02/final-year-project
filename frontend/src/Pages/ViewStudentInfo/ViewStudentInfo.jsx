import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const ViewStudentInfo = () => {
  const studentId = useParams();
  const [currentStudent, setCurrentStudent] = useState([]);
  useEffect(() => {
    (async () => {
      const student = await axios.get(`/student/studentId/info`);
      console.log("Current Student ", student);
      setCurrentStudent(student);
    })();
  }, []);

  return <div>ViewStudentInfo</div>;
};

export { ViewStudentInfo };
