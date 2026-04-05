import React from "react";
import { useInnerData } from "../hooks/useInnerData";
import Team from "../components/teamPage/Team";
import TeamTop from "../components/teamPage/TeamTop";
import InfoTop from "../components/shopPage/InfoTop";

function TeamPage() {
  const { data, isLoading, error } = useInnerData();
  if (isLoading)
    return (
      <div className="py-20 text-center text-2xl text-primary font-bold">
        Yükleniyor...
      </div>
    );
  if (error) return <div>Hata: {error.message}</div>;

  return (
    <>
      <TeamTop teamContent={data.team} isLoading={isLoading}/>
      <InfoTop data={data.team}/>
      <Team teamContent={data.team} isLoading={isLoading}/>
    </>
  );
}

export default TeamPage;
