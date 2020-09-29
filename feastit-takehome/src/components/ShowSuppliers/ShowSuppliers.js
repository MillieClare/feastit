import React, { useState } from "react";

export default function DisplaySuppliers(props) {
  const [isOpen, setIsOpen] = useState(false);

  if (!props.items.length) {
    return (
      <p>There are no suppliers available currently, please check back later</p>
    );
  }

  console.log("props", props.items[0].results);

  return (
    <div className="suppliersList">
      <title>Current Suppliers</title>
      {props.items[0].results.map((item, index) => {
        const noOfRatings = item.external.numReviews;
        const category = item.categoryTier1;
        const description = item.public.description;
        const shortDescription =
          description.split(/\s+/).slice(0, 20).join(" ") + "...";
        console.log(shortDescription);
        function createMarkup(description) {
          return { __html: description };
        }
        return (
          <div key={index} className="suppliers">
            <h2>{item.name}</h2>

            <ul>Type of service: {item.tier2[0].name}</ul>
            <ul>
              You can book them for up to{" "}
              <b>{item.public.logistics.maxWorkingHours}</b> hours.
            </ul>
          </div>
        );
      })}
    </div>
  );
}
