import { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import Card from "../../TryOneCenter/Card";
import EditPartnerModal from "./EditPartnerModal";
import { getPartner } from "../../../slices/PartnerSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store";
import { useSelector } from "react-redux";

function PartnerOverview() {
  const dispatch = useDispatch<AppDispatch>();
  const partnerId = JSON.parse(localStorage.getItem("data") || "null").user.agent.partner_id;
  const partner = useSelector((state: any) => state.Partners.partner);
  const [open, setOpen] = useState(false);
  const handleModalOpen = () => setOpen(true);
  const handleModalClose = () => setOpen(false);
  const [isSetUpComplete, setIsSetUpComplete] = useState(false);

  useEffect(() => {
    dispatch(getPartner(partnerId));
  }, [dispatch, partnerId]);

  // Function to check if there are empty properties in the partner object, excluding 'assigned_phone'
  const hasEmptyProperties = () => {
    for (const key in partner) {
      if (partner.hasOwnProperty(key) && key !== "assigned_phone" && key !== "corpus_id" && !partner[key]) {
        return true; // Found an empty property
      }
    }
    return false; // No empty properties found
  };

  useEffect(() => {
    setIsSetUpComplete(!hasEmptyProperties());
    console.log("partner has changed");
    hasEmptyProperties();
  }, [partner]);

  return (
    <Layout>
      {isSetUpComplete ? (
        <>
          <Card
            logo={partner?.logo}
            name={partner?.name}
            website={partner?.website}
            iconContainerWidth={"20rem"}
            description={partner?.description}
            category={partner?.category}
            primaryBtn={"Edit Info"}
            primaryFunc={handleModalOpen}
            btnDisable={false}
          />
          <EditPartnerModal handleModalClose={handleModalClose} open={open} />
        </>
      ) : (
        <EditPartnerModal open={true} />
      )}
    </Layout>
  );
}

export default PartnerOverview;
