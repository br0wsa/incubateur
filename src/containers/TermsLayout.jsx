import React, { useState, useLayoutEffect } from "react";
import { fetchData } from "../utils/fetchJson";
import { View } from "@adobe/react-spectrum";
import { CguHeader } from "../components/CguHeader";
import { CguSection } from "../components/CguSection";
import { v4 as uuidv4 } from "uuid";

export default function TermsLayout() {
  const [cguData, setCguData] = useState({
    titleCgu: "",
    version: "",
    lastUpdated: "",
    sections: [],
  });

  useLayoutEffect(() => {
    const fetchTerms = async () => {
      try {
        const data = await fetchData("cgu.json");
        const { title_cgu: titleCgu, version, lastUpdated, sections } = data;
        setCguData({
          titleCgu,
          version,
          lastUpdated,
          sections,
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchTerms();
  }, []);

  return (
    <View>
      <CguHeader {...cguData} />
      {cguData.sections.map((section) => {
        const sectionId = uuidv4();
        return <CguSection key={sectionId} section={section} />;
      })}
    </View>
  );
}
