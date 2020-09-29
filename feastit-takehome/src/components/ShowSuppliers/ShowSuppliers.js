import React, { useState } from "react";
import "./ShowSuppliers.css";

export default function DisplaySuppliers(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [bigImages, setBigImages] = useState([]);

  if (!props.items.length) {
    return (
      <p>There are no suppliers available currently, please check back later</p>
    );
  }

  console.log("props", props.items[0].results);

  return (
    <div className="suppliersList">
      <h1>Current Suppliers</h1>
      {props.items[0].results.map((item, index) => {
        const noOfRatings = item.external.numReviews;
        const category = item.categoryTier1;
        const description = item.public.description;
        const shortDescription =
          description.split(/\s+/).slice(0, 20).join(" ") + "...";

        function setBigImage(i, imageIndex) {
          var newArray = bigImages.slice();
          if (newArray[i] === imageIndex) newArray[i] = -1;
          else newArray[i] = imageIndex;
          setBigImages(newArray);
        }
        function getImageIfExists(index) {
          var image = item.public.images[bigImages[index]];
          if (image != null) {
            if (image.url != null) return image.url;
          }
          return "";
        }

        function createMarkup(description) {
          return { __html: description };
        }
        return (
          <div key={index} className="suppliers">
            <h2>{item.name}</h2>
            <ul>
              {/* TODO: Create a box for the text */}
              {/* TODO: Only expand the text for one supplier at a time */}
              Description:{" "}
              <button onClick={() => setIsOpen(!isOpen)} href="">
                Click to expand
              </button>{" "}
              {isOpen ? (
                <div
                  dangerouslySetInnerHTML={createMarkup(
                    item.public.description
                  )}
                ></div>
              ) : (
                <div
                  dangerouslySetInnerHTML={createMarkup(shortDescription)}
                ></div>
              )}
            </ul>
            <ul>Type of service: {item.tier2[0].name}</ul>
            {category === "food" && (
              <ul>
                Dietary Options:
                {item.dietary.map((item, index) => {
                  return <span key={index}> {item.name}, </span>;
                })}
              </ul>
            )}
            <ul>
              You can book them for up to{" "}
              <b>{item.public.logistics.maxWorkingHours}</b> hours.
            </ul>
            {noOfRatings === "0" ? (
              <ul>{item.name} has no rating (yet!)</ul>
            ) : (
              <ul>Customer rating out of 5: {item.external.rating.overall}</ul>
            )}
            <ul className="last">
              <b>Images:</b>
              <div className="imageContainer">
                {item.public.images.map((item, imageIndex) => {
                  return (
                    <img
                      onClick={() => setBigImage(index, imageIndex)}
                      className={
                        bigImages[index] === imageIndex
                          ? "supplierImages supplierImageSelected"
                          : "supplierImages"
                      }
                      key={imageIndex}
                      src={item.url}
                      alt={item.name}
                    />
                  );
                })}
              </div>
              <div className="bigSupplierImageContainer">
                <img
                  src={getImageIfExists(index)}
                  className="bigSupplierImage"
                  alt={index}
                />
              </div>
            </ul>
          </div>
        );
      })}
    </div>
  );
}
