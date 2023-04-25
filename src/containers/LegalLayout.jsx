import React, { useState, useLayoutEffect } from "react";
import { View } from "@adobe/react-spectrum";

// utils
import { fetchData } from "../utils/fetchJson";

// components
import { LegalInfo } from "../components/LegalInfo";
import { Address } from "../components/Address";
import { Hosting } from "../components/Hosting";

export default function LegalLayout() {
  const [legalData, setLegalData] = useState({
    nom: "",
    telephone: "",
    email: "",
    directeur: "",
  });
  const [siege, setSiege] = useState({});
  const [hebergeur, setHebergeur] = useState({});

  useLayoutEffect(() => {
    const fetchLegal = async () => {
      try {
        const data = await fetchData("mentionsLegales.json");
        const {
          nom,
          siege_social: siege,
          telephone,
          email,
          directeur_publication: directeur,
          hebergeur,
        } = data;
        setLegalData({
          nom,
          telephone,
          email,
          directeur,
        });
        setSiege(siege);
        setHebergeur(hebergeur);
      } catch (error) {
        console.error(error);
      }
    };

    fetchLegal();
  }, []);

  return (
    <View>
      <LegalInfo legalData={legalData} />
      <Address siege={siege} />
      <Hosting hebergeur={hebergeur} />
    </View>
  );
}
