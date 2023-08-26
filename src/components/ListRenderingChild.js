import React from "react";

const ListRenderingChild = ({ student }) => {
  return (
    <div>
      <h1>{student.name}</h1>
      <p>Skill: {student.skill}</p>
      <p>Age: {new Date().getFullYear() - student.birthYear}</p>
    </div>
  );
};

export default ListRenderingChild;
