import React from "react";
import { cards } from "../model/pricing-cards-data";
import PricingCard from "./pricing-card";

const CardList: React.FC = () => {
  return (
    <ul className="grid w-full grid-cols-1 gap-[40px] lg:grid-cols-3">
      {cards.map((card, index) => (
        <React.Fragment key={index}>
          <PricingCard {...card} />
        </React.Fragment>
      ))}
    </ul>
  );
};

export default CardList;
