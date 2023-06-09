import React from 'react'
import { useRef } from 'react';
import styles from './UpdateRecord.module.css';
import MyInput from '../../components/MyInput/MyInput';
import MyBotton from '../../components/MyButton/MyBotton';
import {useNavigate } from 'react-router-dom';
const URL = "http://localhost:8080/";
const UpdateRecord = () => {
  const nameRef = useRef();
  const satRef = useRef();
  const navigate = useNavigate();

  const updateHandler = async(e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const sat = satRef.current.value;
    if (!name) return;
    console.log("deletre", name);
    
    try {
      const response = await fetch(URL+"update", {
        method: "put",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({name,sat}),
      });
      const result = await response.json();
      console.log(result);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
    nameRef.current.value = "";
    satRef.current.value = "";
  };

  return (
    <>
      <h2 className={styles.header}>Update a Record by name</h2>
      <div className={styles.container}>
        <MyInput label="Name" ref={ nameRef } placeholder="Enter Name " type="text" />
          <MyInput label="Sat Score" ref={ satRef } placeholder="Enter Sat Score " type="text" />
        <MyBotton text="Update" onSubmit={updateHandler} />
      </div>
    </>
  );
}

export default UpdateRecord
