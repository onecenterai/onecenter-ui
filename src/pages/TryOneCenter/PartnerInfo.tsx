import { useEffect } from "react";
import { useParams } from "react-router-dom";
import EngageCall from "../../components/Engage/EngageCall";
import { useDispatch } from "react-redux";
import { getPartner } from "../../slices/PartnerSlice";
import { useSelector } from "react-redux";
import { AppDispatch } from "../../store";

function PartnerInfo() {
  const { id } = useParams();
  console.log("hello");
  let partners = localStorage.getItem("partners");

  if (partners !== null) {
    partners = JSON.parse(partners);
  } else {
    null;
  }

  console.log(partners);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getPartner(id));
  }, []);

  const partner = useSelector((state: any) => state.Partners.partner);
  return (
    <div>
      <EngageCall partnerId={id} partner={partner} />
    </div>
  );
}

export default PartnerInfo;
