import "./styles.css";
import React from "react";

const randomPrices = [
  Array.from({ length: 14 }, () => Math.floor(Math.random() * 10 + 1))
];

export default function DaysVisualised(props) {
  const buy = props.buyDate - 1;
  const sell = props.sellDate - 1;

  console.log(randomPrices);
  return (
    <div>
      {randomPrices.map((prices) => (
        <ul id="container">
          <li>
            Day 1 <br /> {prices[0]} $
          </li>
          <li>
            Day 2 <br /> {prices[1]} $
          </li>
          <li>
            Day 3 <br /> {prices[2]} $
          </li>
          <li>
            Day 4 <br /> {prices[3]} $
          </li>
          <li>
            Day 5 <br /> {prices[4]} $
          </li>
          <li>
            Day 6 <br /> {prices[5]} $
          </li>
          <li>
            Day 7 <br /> {prices[6]} $
          </li>
          <li>
            Day 8 <br /> {prices[7]} $
          </li>
          <li>
            Day 9 <br /> {prices[8]} $
          </li>
          <li>
            Day 10 <br /> {prices[9]} $
          </li>
          <li>
            Day 11 <br /> {prices[10]} $
          </li>
          <li>
            Day 12 <br /> {prices[11]} $
          </li>
          <li>
            Day 13 <br /> {prices[12]} $
          </li>
          <li>
            Day 14 <br /> {prices[13]} $
          </li>
        </ul>
      ))}

      {randomPrices.map((prices) => (
        <h2>
          If you buy at day {props.buyDate} and sell at day {props.sellDate},
          you will make {prices[sell] - prices[buy]} $ profit.
        </h2>
      ))}
    </div>
  );
}
