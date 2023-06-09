import {useRef} from "react";
import MyBotton from "../../components/MyButton/MyBotton";
import MyInput from "../../components/MyInput/MyInput";
import styles from "./DeleteRecord.module.css";
import {useNavigate } from 'react-router-dom';

const URL = "http://localhost:8080/";
const DeleteRecord = () => {

  const nameRef = useRef();
  const navigate = useNavigate();

  const deleleHandler = async (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    if (!name) return;
    console.log("delete", name);
    
    try {
      const response = await fetch(URL+"delete", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({name}),
      });
      const result = await response.json();
      console.log(result);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
    nameRef.current.value = "";
  };

  return (
    <>
      <h2 className={styles.header}>Delete a Record by name</h2>
      <div className={styles.container}>
        <MyInput label="Name" ref={nameRef} placeholder="Enter Name " type="text" />
        <MyBotton text="Delete" onSubmit={deleleHandler} />
      </div>
    </>
  );
};

export default DeleteRecord;
