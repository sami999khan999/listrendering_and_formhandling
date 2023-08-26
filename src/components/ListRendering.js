import React from "react";
import ListRenderingChild from "./ListRenderingChild";

const students = [
  {
    id: 5,
    name: "sami",
    birthYear: 111,
    skill: "Java Script",
  },
  {
    id: 1,
    name: "sami",
    birthYear: 111,
    skill: "Java Script",
  },
  {
    id: 2,
    name: "Maruf",
    birthYear: 823,
    skill: "Python",
  },
  {
    id: 3,
    name: "Arif",
    birthYear: 123,
    skill: "React",
  },
  {
    id: 4,
    name: "Bappy",
    birthYear: 375,
    skill: "Java Script",
  },
];

const ListRendering = () => {
  return (
    <div>
      {students.map((student, i) => (
        <div>
          <ListRenderingChild student={student} key={student.id} />
        </div>
      ))}
    </div>
  );
};

export default ListRendering;
