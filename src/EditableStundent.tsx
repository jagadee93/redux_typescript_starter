import React, { useState } from "react";

interface IStudent {
  SName: string;
  SRollNo: string;
  SEmail: string;
  id: number;
}

import FilterImg from "./FilterImg";

const EditableStudent: React.FC = () => {
  const initialDetails: IStudent = {
    SName: "",
    SRollNo: "",
    SEmail: "",
    id: Date.now(),
  };
  const [studentDetails, setStudentDetails] =
    useState<IStudent>(initialDetails);

  const [studentList, setStudentList] = useState<IStudent[]>([]);
  const [editMode, setEditMode] = useState<boolean>(false);

  function updateStudentData(e: React.ChangeEvent<HTMLInputElement>): void {
    setStudentDetails({
      ...studentDetails,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e: React.FormEvent): void {
    e.preventDefault();

    if (editMode) {
      const UpdatedList = studentList.map((PrevStudent) => {
        if (PrevStudent.id === studentDetails.id) {
          return { ...PrevStudent, ...studentDetails };
        } else {
          return studentDetails;
        }
      });

      setStudentList(UpdatedList);
      setEditMode(false);
    } else {
      setStudentList([...studentList, studentDetails]);
    }
    setStudentDetails(initialDetails);
  }

  function handleEdit(e: React.FormEvent): void {
    e.preventDefault();
    const foundStudent: IStudent = studentList.find((student) => {
      return student.id === Number(e.target.id);
    });
    if (foundStudent) {
      setEditMode(true);
      setStudentDetails(foundStudent);
    }
  }

  return (
    <div>
      <h1>App</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="SName"
            placeholder="enter name"
            value={studentDetails.SName}
            onChange={updateStudentData}
          />
        </label>

        <label>
          email:
          <input
            type="email"
            placeholder="enter email"
            name="SEmail"
            value={studentDetails.SEmail}
            onChange={updateStudentData}
          />
        </label>

        <label>
          RollNo:
          <input
            type="text"
            placeholder="enter roll no"
            name="SRollNo"
            value={studentDetails.SRollNo}
            onChange={updateStudentData}
          />
        </label>

        <button>Submit</button>
      </form>
      {studentList?.map((student) => {
        return (
          <form
            key={String(student.id)}
            id={String(student.id)}
            onSubmit={handleEdit}
          >
            <ul
              id={String(student.id + Date.now())}
              key={String(student.id + Date.now())}
            >
              <li>{student.SName}</li>
              <li>{student.SRollNo}</li>
              <li>{student.SEmail}</li>
              <button>Edit</button>
            </ul>
          </form>
        );
      })}

      <FilterImg />
    </div>
  );
};
export default EditableStudent;
