import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setDAta] = useState();
  useEffect(() => {
    const fetcheddata = async () => {
      try {
        const apiResponse = await fetch("https://restcountries.com/v3.1/all");
        if (!apiResponse.ok) {
          console.log("no response got");
        }
        const result = await apiResponse.json();
        setDAta(result);
      } catch (error) {
        console.log(error);
      }
    };
    fetcheddata();
  }, []);
console.log(data);
  return (
    <>
      <div className="container">
        <h1 className="heading">Country App</h1>
        {data && data.map((items) => (
          <div key={items.cca3} className="country-card">
            {items.flags && items.flags.png && (
              <img
                src={items.flags.png}
                alt="country-flag"
                className="flag-image"
              />
            )}
            <p className="country-name">{items.name.common}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;