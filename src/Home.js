import { useState } from "react";

const Home = () => {
  const [exe, exeName] = useState("hassan");
  const [age, setAge] = useState(25);
  const handleClick = () => {
    exeName("Aftab");
    setAge(36);
  };
  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>
        {exe} is {age} old
      </p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default Home;
