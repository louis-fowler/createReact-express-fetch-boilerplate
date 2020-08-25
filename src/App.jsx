import React, { useEffect, useState } from "react";
import { fetchTest } from "./api/test";
import "./App.css";

function App() {
  const [test, setTest] = useState("");

  useEffect(() => {
    fetchTest()
      .then(res => {
        console.log(res);
        setTest(res);
      })
      .catch(error => console.error(`There was an error : ${error}`));
  }, []);

  return (
    <div className='App'>
      <p>{test}</p>
    </div>
  );
}

export default App;
