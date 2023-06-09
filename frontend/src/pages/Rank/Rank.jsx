import React, { useState } from "react";
import { useRef } from "react";
import styles from "./Rank.module.css";
import MyInput from "../../components/MyInput/MyInput";
import MyBotton from "../../components/MyButton/MyBotton";

const URL = "http://localhost:8080/";
const Rank = () => {
  const nameRef = useRef();
  const [ data, setData ] = useState(null);
  
  const getRankHandler =async (e) => {
    e.preventDefault();
    let name = nameRef.current.value;
    if (!name) return;
    console.log("rank", name);
    let lowername = name.toLowerCase();
    try {
      const response = await fetch(URL+"rank/"+lowername);
      const result = await response.json();
      console.log(result);
      setData(result);
      
    } catch (error) {
      console.log(error);
    }
    
  };

  return (
    <>
      <h2 className={styles.header}> Get a Record Rank by name</h2>
      <div className={styles.container}>
        <MyInput
          label="Name"
          ref={nameRef}
          placeholder="Enter Name "
          type="text"
        />

        <MyBotton text="Get Rank" onSubmit={ getRankHandler } />
        { data && <h3>{ `Rank of ${data.name} is : ${data.rank}` }</h3>}
      </div>
    </>
  );
};

export default Rank;
