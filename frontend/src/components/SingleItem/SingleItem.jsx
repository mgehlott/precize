import React from "react";

const SingleItem = (props) => {
  const { name, address, city, country, pincode, satscore, passed } = props;
  return (
    <tr>
      <td>{name}</td>
      <td>{address}</td>
      <td>{city}</td>
      <td>{country}</td>
      <td>{satscore}</td>
      <td>{passed ? "Pass" : "Fail"}</td>
    </tr>
  );
};

export default SingleItem;
