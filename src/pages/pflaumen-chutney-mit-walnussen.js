import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import ProductSubpageContainer from "../components/productSubpageContainer";

export default function PflaumenChutneyMitWalnussen() {
  return (
    <Layout>
      <Seo />
      <ProductSubpageContainer
        theme="plums"
        backgroundColor="plum"
        header="pflaumen<br>chutney<br>mit walnüssen"
        image="plumsChutney"
        subheader="<b>100% vegan | ℮ 145 gramm</b>"
        contents="<b>ZUTATEN</b>:<br/>Pflaumen 61%, brauner Zucker 9%, rote Zwiebeln, Walnüsse, BIO Zitronen, Getrocknete Pflaumen, Balsamico Essig, Rapsöl, Steinsalz, Sultaninen, Ingwer frisch, Cumin, Gewürznelken, Zimt, Cayennpfeffer."
        nutritionFacts={{
          headerColumns: ["DURCHSCHNITTLICHE NÄHRWERTE", "pro 100 g"],
          rows: [
            ["Energie", "150kcal"],
            ["Fett", "6.5g"],
            ["&nbsp;&nbsp;&nbsp;&nbsp;davon gesättigte Fettsäuren", "0.6g"],
            ["Ballaststoffe", "2.2g"],
            ["Kohlenhydrate", "19.9g"],
            ["&nbsp;&nbsp;&nbsp;&nbsp;davon Zucker", "16.3g"],
            ["Eiweiß", "1.8g"],
            ["Salz", "0.9g"],
          ],
          note:
            "*Referenzmenge für einen durchschnittlichen<br/>&nbsp;Erwachsenen (8.400 kJ/2000 kcal).",
        }}
        bottomSubheader="<b>hergestellt in deutschland.</b>"
      />
    </Layout>
  );
}
