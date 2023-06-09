import React from "react";
import MyInput from "../../components/MyInput/MyInput";
import styles from "./Insert.module.css";
import { useRef } from "react";
import MyBotton from "../../components/MyButton/MyBotton";
import { useNavigate } from "react-router-dom";

const URL = "http://localhost:8080/";
const Insert = () => {
  const nameRef = useRef();
  const addressRef = useRef();
  const cityRef = useRef();
  const countryRef = useRef();
  const pincodeRef = useRef();
  const satRef = useRef();
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const address = addressRef.current.value;
    const city = cityRef.current.value;
    const country = countryRef.current.value;
    const pincode = pincodeRef.current.value;
    const sat = satRef.current.value;
    console.log(name, address, city, country, pincode, sat);
    if (!name || !address || !city || !country || !pincode || !sat) {
      return;
    }
   console.log("pass");
    const studnet = {
      name,
      address,
      city,
      country,
      pincode,
      sat,
    };

    try {
      const response = await fetch(URL, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(studnet),
      });
      const result = await response.json();
      console.log(result);
      navigate("/");
    } catch (error) {
      console.log(error);
    }

    nameRef.current.value = "";
    addressRef.current.value = "";
    cityRef.current.value = "";
    countryRef.current.value = "";
    pincodeRef.current.value = "";
    satRef.current.value = "";
  };

  return (
    <div className={styles.form}>
      <div className={styles.formControl}>
        <MyInput
          label="Name"
          ref={nameRef}
          placeholder="Enter Your Name"
          type="text"
        />
        <MyInput
          label="Address"
          ref={addressRef}
          placeholder="Enter Address"
          type="text"
        />
      </div>
      <div className={styles.formControl}>
        <MyInput
          label="City"
          ref={cityRef}
          placeholder="Enter City Name"
          type="text"
        />
        <MyInput
          label="Country"
          ref={countryRef}
          placeholder="Enter Country"
          type="text"
        />
      </div>
      <div className={styles.formControl}>
        <MyInput
          label="Pincode"
          ref={pincodeRef}
          placeholder="Enter Pincode"
          type="text"
        />
        <MyInput
          label="SAT Score"
          ref={satRef}
          placeholder="Enter SAT Score"
          type="text"
        />
      </div>
      <MyBotton text="Submit" onSubmit={submitHandler} />
    </div>
  );
};

export default Insert;
