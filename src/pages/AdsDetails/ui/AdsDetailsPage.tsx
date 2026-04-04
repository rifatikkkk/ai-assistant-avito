import { ActionsDetailsAd } from "@/widgets/ActionsDetailsAd";
import { ContentDetailsAd } from "@/widgets/ContentDetailsAd";
import { DescDetailsAd } from "@/widgets/DescDetailsAd";
import "./AdsDetailsPage.style.css";
import { useParams } from "react-router";
import { useAppDispatch } from "@/app/store/hooks";
import { useEffect } from "react";
import { getAdById } from "@/entities/ad/api";

const AdsDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      dispatch(getAdById(Number(id)));
    }
  }, [dispatch, id]);

  return (
    <div className="ads-details-page">
      <ActionsDetailsAd />

      <ContentDetailsAd />

      <DescDetailsAd />
    </div>
  );
};

export default AdsDetailsPage;
