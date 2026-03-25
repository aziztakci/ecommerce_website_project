import { useState, useEffect } from 'react'; {/* olası bir durumda /diğer sayfalar içinde mobil ve desktop görünümünde farklı görsel kullanımı varsa/ bu kullanılabilir, yoksa html içinde <pictures> etiketiyle çözebilirsin*/}

function useWindowSize() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
}