import React, { useState } from "react";
import "./Gallery.scss";
import images from "../../assets/images/gallery/index";

import Lightbox from "react-image-lightbox";
const Gallery = (props) => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="container">
      {images.map(({ id, src }) => (
        <img
          key={id}
          src={src}
          alt="pic"
          className="container__item"
          onClick={() => setIsOpen(true)}
        />
      ))}
      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex].src}
          nextSrc={images[(photoIndex + 1) % images.length].src}
          prevSrc={images[(photoIndex + images.length - 1) % images.length].src}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
    </section>
  );
};
export default React.memo(Gallery);
