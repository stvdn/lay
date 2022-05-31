import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Purchase() {
  const location = useLocation();
  useEffect(() => {
    const purchaseId = location.state;
    console.log(purchaseId);
  }, []);
  return <div></div>;
}
