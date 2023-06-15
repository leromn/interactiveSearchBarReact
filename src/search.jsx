import { useState, useEffect } from "react";
import axios from "axios";

export default function Search() {
  const [query, setQuery] = useState("");
  const [resutList, setResultList] = useState(["..."]);

  const search = () => {
    // make the search api call
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then((data) => {
        console.log(data.data);
        setResultList(data.data);
      })
      .catch((error) => console.log(error));
  };

  const routineStart = () => {
    setTimeout(search, 1000);
  };
  return (
    <div className="App">
      <input
        value={query}
        type="text"
        onChange={(e) => setQuery(e.target.value)}
        onFocus={routineStart}
      />
      <button onClick={search}>search</button>
      <ul>
        {resutList.map((result) => {
          return <li>{result.title}</li>;
        })}
      </ul>
    </div>
  );
}
