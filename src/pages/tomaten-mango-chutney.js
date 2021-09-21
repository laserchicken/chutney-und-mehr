import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import ProductSubpageContainer from "../components/productSubpageContainer";

export default function TomatenMangoChutney() {
  return (
    <Layout>
      <Seo />
      <ProductSubpageContainer
        theme={"mango"}
        backgroundColor="tomatenMango"
        header="tomaten-mango<br>chutney"
        image="tomatenMangoChutney"
        subheader="<b>100% vegan | ℮ 145 gramm</b>"
        contents="<b>ZUTATEN</b>:<br/>Tomaten frisch 38%, Mango 38%, Gemüsezwiebeln, brauner Zucker 5,7%, Rapsöl, Balsamico Bianco, Steinsalz, Ingwer frisch, Bockshornkleesamen, Senfsaat, Koriandersamen, Pfeffer Schwarz, Limetten blätter, Chili."
        nutritionFacts={{
          headerColumns: ["DURCHSCHNITTLICHE NÄHRWERTE", "pro 100 g"],
          rows: [
            ["Energie", "75kcal"],
            ["Fett", "2g"],
            ["&nbsp;&nbsp;&nbsp;&nbsp;davon gesättigte Fettsäuren", "0.2g"],
            ["Ballaststoffe", "1.5g"],
            ["Kohlenhydrate", "12.8g"],
            ["&nbsp;&nbsp;&nbsp;&nbsp;davon Zucker", "12.3g"],
            ["Eiweiß", "1.1g"],
            ["Salz", "1.1g"],
          ],
          note:
            "*Referenzmenge für einen durchschnittlichen<br/>&nbsp;Erwachsenen (8.400 kJ/2000 kcal).",
        }}
        bottomSubheader="<b>hergestellt in deutschland.</b>"
      />
    </Layout>
  );
}
