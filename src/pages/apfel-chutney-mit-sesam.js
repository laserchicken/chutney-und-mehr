import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import ProductSubpageContainer from "../components/productSubpageContainer";

export default function ApfelChutneyMitSesam() {
  return (
    <Layout>
      <Seo />
      <ProductSubpageContainer
        theme="apples"
        backgroundColor="apple"
        header="apfel-chutney<br>mit sesam"
        image="appleChutney"
        subheader="<b>100% vegan | ℮ 145 gramm</b>"
        contents="<b>ZUTATEN</b>:<br/>Apfel 52%, Gemüsezwiebeln 13%, Brauner Zucker 13,2%, Reisessig, Ingwer, Rapsöl, Limettensaft, Sesam, Stainsalz, Sesamöl, Wasabi Pulver"
        nutritionFacts={{
          headerColumns: ["DURCHSCHNITTLICHE NÄHRWERTE", "pro 100 g"],
          rows: [
            ["Energie", "96kcal"],
            ["Fett", "2.8g"],
            ["&nbsp;&nbsp;&nbsp;&nbsp;davon gesättigte Fettsäuren", "0.3g"],
            ["Ballaststoffe", "1.6g"],
            ["Kohlenhydrate", "16.1g"],
            ["&nbsp;&nbsp;&nbsp;&nbsp;davon Zucker", "14.5g"],
            ["Eiweiß", "0.9g"],
            ["Salz", "1.0g"],
          ],
          note:
            "*Referenzmenge für einen durchschnittlichen<br/>&nbsp;Erwachsenen (8.400 kJ/2000 kcal).",
        }}
        bottomSubheader="<b>hergestellt in deutschland.</b>"
      />
    </Layout>
  );
}
