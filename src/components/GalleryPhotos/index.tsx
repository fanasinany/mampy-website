import React, { useCallback, useEffect, useState } from "react";
import "./style.scss";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { graphql, useStaticQuery } from "gatsby";

type PhotoProps = {
  src: string;
  width: number;
  height: number;
  category?: string;
};

const GalleryPhotos = () => {
  /* Fetch data from GQL */
  const data = useStaticQuery(graphql`
    query {
      allWpPage {
        edges {
          node {
            title
            featuredImage {
              node {
                mediaItemUrl
              }
            }
          }
        }
      }
    }
  `);

  const photos = data.allWpPage.edges.map(({ node }: any) => ({
    category: node.title.toLowerCase(),
    src: node.featuredImage?.node?.mediaItemUrl,
    width: 1,
    height: 1,
  }));

  /* Create list of category */
  const uniqueCategories = photos.reduce((categories: any, photo: any) => {
    if (!categories.includes(photo.category)) {
      categories.push(photo.category);
    }
    return categories;
  }, []);

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
        photos.filter((value: any) => {
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

        {uniqueCategories.map((item: string, index: any) => {
          return (
            <li
              key={index}
              className={`${active === item && "active"}`}
              onClick={() => changeType(item)}
            >
              {item}
            </li>
          );
        })}
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
