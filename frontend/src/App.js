import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:5000/user")
      .then(res => setData(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Data from the backend:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>

    </div>
  );
}

export default App;
