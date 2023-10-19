import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import EngageCall from "../../components/Engage/EngageCall";
import { useDispatch } from "react-redux";
import { getPartner } from "../../slices/PartnerSlice";
import { useSelector } from "react-redux";

function PartnerInfo() {
  const { id } = useParams();
  console.log("hello");
  let partners = JSON.parse(localStorage.getItem("partners"));
  console.log(partners);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPartner(id));
  }, []);

  const partner = useSelector((state) => state.Partners.partner);
  return (
    <div>
      <EngageCall partnerId={id} partner={partner} />
    </div>
  );
}

export default PartnerInfo;
