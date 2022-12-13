const Home = () => {
  const handleClick = (e) => {
    console.log("Hello", e);
  };

  const againHandleClick = (name, e) => {
    console.log("Hello" + name, e.target);
  };

  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={(e) => againHandleClick("Subhan", e)}>
        Again Click Me
      </button>
    </div>
  );
};

export default Home;
