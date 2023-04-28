import { useState, useEffect } from "react";

function useSticky() {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrolled = window.scrollY + window.innerHeight;
      const threshold = scrollHeight * 0.3; // 30% de défilement

      scrolled > threshold ? setSticky(true) : setSticky(false);
    };

    window.addEventListener("scroll", handleScroll);

    // nettoyage : retirer l'écouteur de scroll
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return isSticky;
}

export default useSticky;
