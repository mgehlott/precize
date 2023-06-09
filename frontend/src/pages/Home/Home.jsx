import { useEffect, useState } from "react";
import SingleItem from "../../components/SingleItem/SingleItem";

const URL = "http://localhost:8080/";
const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(URL);
        const data = await response.json();
        console.log(data);
        setData(data);
      } catch (error) {
        console.log("error occurs", error);
      }
    };
    fetchData();
  }, []);

  return (
    <table>
      {data.length === 0 ? (
        <h3>No data found</h3>
      ) : (
        data.map((d) => {
          return <SingleItem key={d._id} {...d} />;
        })
      )}
    </table>
  );
};

export default Home;
