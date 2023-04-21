import React, { useState, useLayoutEffect } from "react";
import { Grid } from "@adobe/react-spectrum";
import { useId } from "react-aria";
import { ContactCard } from "../components/ContactCard";
import { fetchData } from "../utils/fetchJson";

export default function ContactLayout() {
  const [companyName, setCompanyName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  let cardId = useId();

  useLayoutEffect(() => {
    const fetchContact = async () => {
      try {
        const data = await fetchData("src/assets/data/contact.json");
        const {
          company_name,
          address: { street, city, postal_code, country },
          email,
          phone,
        } = data;
        setCompanyName(company_name);
        setAddress({ street, city, postal_code, country });
        setEmail(email);
        setPhone(phone);
      } catch (error) {
        console.error(error);
      }
    };

    fetchContact();
  }, []);

  return (
    <Grid
      columns={{
        XS: ["1fr"],
        S: ["1fr", "1fr"],
        M: ["1fr", "1fr"],
        L: ["1fr", "1fr"],
        XL: ["1fr", "1fr"],
        XXL: ["1fr", "1fr", "1fr"],
      }}
      marginTop="size-300"
      marginBottom="size-300"
      gap="size-200"
    >
      <ContactCard
        cardId={cardId}
        companyName={companyName}
        address={address}
        email={email}
        phone={phone}
      />
      <ContactCard
        cardId={cardId}
        companyName={"Sylvain"}
        address={{
          street: "Euratechnologie",
          city: "Lille",
          postal_code: "59000",
          country: "France",
        }}
        linkedin={"https://www.linkedin.com/in/sylvain-d-2a7b8724b/"}
        github={"https://github.com/br0wsa"}
      />
      <ContactCard
        cardId={cardId}
        companyName={"Yohann"}
        address={{
          street: "Euratechnologie",
          city: "Lille",
          postal_code: "59000",
          country: "France",
        }}
        linkedin={"https://www.linkedin.com/in/vanherzecke-yohann-a49587177/"}
        github={"https://github.com/bannik62/"}
      />
    </Grid>
  );
}
