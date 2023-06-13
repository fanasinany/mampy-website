import React, { useCallback, useEffect, useState } from "react";
import "./style.scss";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import image1 from "../../images/portfolio-thumbnail/1.webp";
import image2 from "../../images/portfolio-thumbnail/2.webp";
import image3 from "../../images/portfolio-thumbnail/3.webp";
import image4 from "../../images/portfolio-thumbnail/4.webp";
import image5 from "../../images/portfolio-thumbnail/5.webp";
import image6 from "../../images/portfolio-thumbnail/6.webp";
import image7 from "../../images/portfolio-thumbnail/7.webp";
import image8 from "../../images/wallpaper-1.webp";
import image9 from "../../images/wallpaper-2.webp";
import image10 from "../../images/wallpaper.webp";

type PhotoProps = {
  src: string;
  width: number;
  height: number;
  category?: string;
};

const GalleryPhotos = () => {
  const photos = [
    {
      src: image1,
      width: 1,
      height: 1,
      category: "portrait",
    },
    {
      src: image2,
      width: 1,
      height: 1,
      category: "portrait",
    },
    {
      src: image3,
      width: 1,
      height: 1,
      category: "studio",
    },
    {
      src: image4,
      width: 1,
      height: 1,
      category: "wedding",
    },
    {
      src: image5,
      width: 1,
      height: 1,
      category: "studio",
    },
    {
      src: image6,
      width: 1,
      height: 1,
      category: "culinary",
    },
    {
      src: image7,
      width: 1,
      height: 1,
      category: "studio",
    },
    {
      src: image8,
      width: 1,
      height: 1,
      category: "corporate",
    },
    {
      src: image9,
      width: 1,
      height: 1,
      category: "landscape",
    },
    {
      src: image10,
      width: 1,
      height: 1,
      category: "landscape",
    },
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event:any, { photo, index }:any) => {
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
                views={images.map((x:any) => ({
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
