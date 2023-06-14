import React, { useCallback, useEffect, useState } from "react";
import "./style.scss";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import corporate1 from "../../images/portfoliopage/corporate/1.webp";
import culinary1 from "../../images/portfoliopage/culinary/1.webp";
import portrait1 from "../../images/portfoliopage/portrait/1.webp";
import portrait2 from "../../images/portfoliopage/portrait/2.webp";
import portrait3 from "../../images/portfoliopage/portrait/3.webp";
import landscape1 from "../../images/portfoliopage/landscape/1.webp";
import landscape2 from "../../images/portfoliopage/landscape/2.webp";
import landscape3 from "../../images/portfoliopage/landscape/3.webp";
import landscape4 from "../../images/portfoliopage/landscape/4.webp";
import studio1 from "../../images/portfoliopage/studio/1.webp";
import wedding1 from "../../images/portfoliopage/wedding/1.webp";
import wedding2 from "../../images/portfoliopage/wedding/2.webp";

type PhotoProps = {
  src: string;
  width: number;
  height: number;
  category?: string;
};

const GalleryPhotos = () => {
  const photos = [
    {
      src: corporate1,
      width: 1,
      height: 1,
      category: "corporate",
    },
    {
      src: culinary1,
      width: 1,
      height: 1,
      category: "culinary",
    },
    {
      src: portrait1,
      width: 1,
      height: 1,
      category: "portrait",
    },
    {
      src: portrait2,
      width: 1,
      height: 1,
      category: "portrait",
    },
    {
      src: portrait3,
      width: 1,
      height: 1,
      category: "portrait",
    },
    {
      src: landscape1,
      width: 1,
      height: 1,
      category: "landscape",
    },
    {
      src: landscape2,
      width: 1,
      height: 1,
      category: "landscape",
    },
    {
      src: landscape3,
      width: 1,
      height: 1,
      category: "landscape",
    },
    {
      src: landscape4,
      width: 1,
      height: 1,
      category: "landscape",
    },
    {
      src: studio1,
      width: 1,
      height: 1,
      category: "studio",
    },
    {
      src: wedding1,
      width: 1,
      height: 1,
      category: "wedding",
    },
    {
      src: wedding2,
      width: 1,
      height: 1,
      category: "wedding",
    },
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event: any, { photo, index }: any) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const [images, setImages] = useState<PhotoProps[]>([]);
  const [active, setActive] = useState("all");
  useEffect(() => {
    setImages(photos);
  }, []);
  const changeType = (keytype: string) => {
    setActive(keytype);
    if (keytype === "all") {
      setImages(photos);
    } else {
      setImages(
        photos.filter((value) => {
          return value.category === keytype;
        })
      );
    }
  };

  return (
    <section className="container-gal">
      <ul>
        <li
          className={`${active === "all" && "active"}`}
          onClick={() => changeType("all")}
        >
          all
        </li>
        <li
          className={`${active === "portrait" && "active"}`}
          onClick={() => changeType("portrait")}
        >
          portrait
        </li>
        <li
          className={`${active === "landscape" && "active"}`}
          onClick={() => changeType("landscape")}
        >
          landscape
        </li>
        <li
          className={`${active === "wedding" && "active"}`}
          onClick={() => changeType("wedding")}
        >
          wedding
        </li>
        <li
          className={`${active === "corporate" && "active"}`}
          onClick={() => changeType("corporate")}
        >
          corporate
        </li>
        <li
          className={`${active === "culinary" && "active"}`}
          onClick={() => changeType("culinary")}
        >
          culinary
        </li>
        <li
          className={`${active === "studio" && "active"}`}
          onClick={() => changeType("studio")}
        >
          studio
        </li>
      </ul>
      <div>
        <Gallery
          photos={images}
          margin={8}
          onClick={openLightbox}
          direction={"column"}
        />
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={images.map((x: any) => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title,
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </div>
    </section>
  );
};

export default GalleryPhotos;
