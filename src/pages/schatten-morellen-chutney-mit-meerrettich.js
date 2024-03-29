import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import ProductSubpageContainer from "../components/productSubpageContainer";

export default function SchattenMorellenChutneyMitMeerrettich() {
  return (
    <Layout>
      <Seo />
      <ProductSubpageContainer
        theme="cherries"
        backgroundColor="cherry"
        header="schatten-<br>morellen-<br>chutney<br>mit meerrettich"
        image="cherryChutney"
        subheader="<b>100% vegan | ℮ 145 gramm</b>"
        contents="<b>ZUTATEN</b>:<br/>Schattenmorellen 70%, brauner Zucker 10%, Meerrettich frisch, , Balsamico Esig Bianco, Balsamino Essig, Steinsalz, Zimt, Wasabi Pulver, Gewürznelken."
        nutritionFacts={{
          headerColumns: ["DURCHSCHNITTLICHE NÄHRWERTE", "pro 100 g"],
          rows: [
            ["Energie", "92kcal"],
            ["Fett", "0.4g"],
            ["&nbsp;&nbsp;&nbsp;&nbsp;davon gesättigte Fettsäuren", "0.1g"],
            ["Ballaststoffe", "1.5g"],
            ["Kohlenhydrate", "19.8g"],
            ["&nbsp;&nbsp;&nbsp;&nbsp;davon Zucker", "18.8g"],
            ["Eiweiß", "0.9g"],
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
