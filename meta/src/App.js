import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [country, setCountry] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  let [search, setSearch] = useState("");
  const getData = async (page = 1) => {
    setLoading(true);

    try {
      let res = await axios(
        `https://metta-backend.onrender.com/country?_limit=10&_page=${page}`
      );
      setCountry(res.data);
      setLoading(false);
    } catch (err) {
      console.log("err", err);
      setError(true);
    }
  };

  const handleSearch = async () => {
    setLoading(true);

    if (search.length > 0) {
      search = search.charAt(0).toUpperCase() + search.slice(1);
    }
    try {
      let res = await axios(
        `https://metta-backend.onrender.com/country?_limit=10&_page=${page}&name=${search}`
      );
      setCountry(res.data);
      setLoading(false);
    } catch (err) {
      console.log("err", err);
      setError(true);
    }
  };

  useEffect(() => {
    getData(page);
  }, [page]);
  return (
    <div className="App">
      <h1>Welcome to My country Page</h1>
      <br />
      <br />
      <div className="Search_Bar">
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="Search Country"
          placeholder="Search Country By name🔎"
          className="input"
        />
        <button onClick={handleSearch} className="btn_search">
          Search{" "}
        </button>
      </div>
      <br />
      <div className="grid">
        {loading && <p>Loading...</p>}
        {error && <p>Error loading data</p>}
        {!loading &&
          !error &&
          country.map((el) => (
            <div
              key={el.name}
              style={{
                boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                padding: "12px",
              }}
            >
              <h2>{el.name}</h2>
              {/* Render other data properties as needed */}
            </div>
          ))}
      </div>
      <br />
      <br />
      <div className="button-div">
        <button className="btn" onClick={() => setPage(page - 1)}>
          Prev
        </button>
        <button className="btn">{page}</button>
        <button className="btn" onClick={() => setPage(page + 1)}>
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
