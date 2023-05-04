/**
 * Hook personnalisé pour détecter si l'utilisateur fait défiler la page vers le bas.
 *
 * @returns {boolean} true si l'utilisateur fait défiler vers le bas, sinon false.
 */
import { useState, useEffect } from "react";

function useSticky() {
  const [isSticky, setSticky] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    /**
     * Gère l'événement de scroll et détecte si l'utilisateur fait défiler vers le bas ou vers le haut.
     */
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingDown = currentScrollPos > prevScrollPos;

      setSticky(isScrollingDown);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    // Nettoyage : retirer l'écouteur de scroll
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return isSticky;
}

export default useSticky;
