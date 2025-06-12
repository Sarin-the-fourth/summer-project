import uppermustang2 from "./../../assets/images/uppermustang2.png";
import uppermustang3 from "./../../assets/images/uppermustang3.png";
import "./Gallery.scss";

import * as basicLightbox from "basiclightbox";
import "basiclightbox/dist/basicLightbox.min.css";

const Gallery = () => {
  const openLightbox = (src) => {
    basicLightbox.create(`<img src="${src}" alt="preview" />`).show();
  };

  return (
    <>
      <h1 className="pt-10 pb-10 flex justify-center items-center text-6xl font-bebas">
        Gallery
      </h1>
      <div className="Gallery pb-10 grid grid-cols-3 gap-4 justify-items-center font-bebas">
        <div
          data-location="Upper Mustang"
          onClick={() => openLightbox(uppermustang2)}
          className="cursor-pointer"
        >
          <img src={uppermustang2} alt="photo" />
        </div>

        <div
          data-location="Upper Mustang"
          onClick={() => openLightbox(uppermustang3)}
          className="cursor-pointer"
        >
          <img src={uppermustang3} alt="photo" />
        </div>

        <div
          data-location="Upper Mustang"
          onClick={() => openLightbox(uppermustang2)}
          className="cursor-pointer"
        >
          <img src={uppermustang2} alt="photo" />
        </div>

        <div
          data-location="Upper Mustang"
          onClick={() => openLightbox(uppermustang3)}
          className="cursor-pointer"
        >
          <img src={uppermustang3} alt="photo" />
        </div>

        <div
          data-location="Upper Mustang"
          onClick={() => openLightbox(uppermustang2)}
          className="cursor-pointer"
        >
          <img src={uppermustang2} alt="photo" />
        </div>

        <div
          data-location="Upper Mustang"
          onClick={() => openLightbox(uppermustang3)}
          className="cursor-pointer"
        >
          <img src={uppermustang3} alt="photo" />
        </div>

        <div
          data-location="Upper Mustang"
          onClick={() => openLightbox(uppermustang2)}
          className="cursor-pointer"
        >
          <img src={uppermustang2} alt="photo" />
        </div>

        <div
          data-location="Upper Mustang"
          onClick={() => openLightbox(uppermustang3)}
          className="cursor-pointer"
        >
          <img src={uppermustang3} alt="photo" />
        </div>

        <div
          data-location="Upper Mustang"
          onClick={() => openLightbox(uppermustang2)}
          className="cursor-pointer"
        >
          <img src={uppermustang2} alt="photo" />
        </div>

        <div
          data-location="Upper Mustang"
          onClick={() => openLightbox(uppermustang2)}
          className="cursor-pointer"
        >
          <img src={uppermustang2} alt="photo" />
        </div>
        <div
          data-location="Upper Mustang"
          onClick={() => openLightbox(uppermustang2)}
          className="cursor-pointer"
        >
          <img src={uppermustang2} alt="photo" />
        </div>
        <div
          data-location="Upper Mustang"
          onClick={() => openLightbox(uppermustang2)}
          className="cursor-pointer"
        >
          <img src={uppermustang2} alt="photo" />
        </div>
      </div>
    </>
  );
};

export default Gallery;
