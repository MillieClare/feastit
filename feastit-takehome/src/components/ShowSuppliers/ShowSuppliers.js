import React, { useState } from "react";
import "./ShowSuppliers.css";

export default function DisplaySuppliers(props) {
  const [isOpen, setIsOpen] = useState([]);
  const [bigImages, setBigImages] = useState([]);

  if (!props.items.length) {
    return (
      <p>There are no suppliers available currently, please check back later</p>
    );
  }

  console.log("props", props.items[0].results);

  function createMarkup(description) {
    return { __html: description };
  }
  function switchIsOpenForIndex(i) {
    if (window.getSelection().toString().length !== 0) return; //don't switch if user is trying to make a selection
    const newArray = isOpen.slice();
    newArray[i] = !newArray[i];
    setIsOpen(newArray);
  }
  function setBigImage(i, imageIndex) {
    const newArray = bigImages.slice();
    if (newArray[i] === imageIndex) newArray[i] = -1;
    else newArray[i] = imageIndex;
    setBigImages(newArray);
  }
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
              <b>Description:</b>{" "}
              <div
                className="itemDescription"
                onClick={() => switchIsOpenForIndex(index)}
              >
                <div
                  dangerouslySetInnerHTML={createMarkup(
                    isOpen[index] ? item.public.description : shortDescription
                  )}
                />
                <div
                  className="expandArrow"
                  dangerouslySetInnerHTML={createMarkup(
                    isOpen[index] ? "&#x25B2;" : "&#x25BC;"
                  )}
                ></div>{" "}
              </div>
            </ul>
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
