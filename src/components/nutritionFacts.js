import React from "react";
import * as styles from "./nutritionFacts.module.css";

function Row({ columns }) {
  return (
    <tr>
      {columns.map((column) => (
        <td dangerouslySetInnerHTML={{ __html: column }}></td>
      ))}
    </tr>
  );
}

export default function NutritionFacts({ nutritionFacts, className }) {
  return (
    <div className={`${className}`}>
      <table>
        <tr>
          {nutritionFacts.headerColumns.map((column) => (
            <th>
              <b>{column}</b>
            </th>
          ))}
        </tr>
        {nutritionFacts.rows.map((row) => (
          <Row columns={row} />
        ))}
      </table>
      <span
        className={styles.note}
        dangerouslySetInnerHTML={{ __html: nutritionFacts.note }}
      ></span>
    </div>
  );
}
