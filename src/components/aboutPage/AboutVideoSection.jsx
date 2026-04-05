import React from "react";
import PageContent from "../../layout/PageContent";

function AboutVideoSection({ aboutContent, isLoading }) {
  if (isLoading) return null;
  const video = aboutContent.video;

  return (
    <PageContent className="px-20 py-28 items-center">
      <video
        className="w-full max-w-275 rounded-lg shadow-lg"
        src={video.videoUrl}
        controls // Oynat/Durdur butonlarını getirir
        muted // Otomatik oynatmak istiyorsan şarttır
        playsInline // Mobil cihazlarda tam ekran zorunluluğunu kaldırır
      >
        Your browser does not support the video tag.
      </video>
    </PageContent>
  );
}

export default AboutVideoSection;
