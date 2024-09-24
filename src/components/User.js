import { useState } from "react";

const User = (props) => {
  const [count] = useState(0);
  const [count2] = useState(1);

  return (
    <div className="user-card m-4 p-4 rounded-lg bg-gray-50">
      <h2>Count = {count}</h2>
      <h2>Count2 = {count2}</h2>
      <h2>Name: {props.name}</h2>
      <h3>Location: Goa</h3>
      <h4>Contact: ankitak17</h4>
    </div>
  );
};

export default User;
