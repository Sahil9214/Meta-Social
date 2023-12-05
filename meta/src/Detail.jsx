import React from "react";
import { useParams } from "react-router-dom";
const Detail = () => {
  const { id } = useParams();
  console.log("id", id);
  return <div>Detail</div>;
};

export default Detail;
