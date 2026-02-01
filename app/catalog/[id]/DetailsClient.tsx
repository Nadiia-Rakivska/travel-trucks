"use client"

import { useState } from "react";
import css from "./Details.module.css"
import { Camper } from "@/types/camper";
import Image from 'next/image';
import Features from "./Feautures";
import Reviews from "./Reviews";
import BookingForm from "./BookingForm";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
type Tab = "features" | "reviews";
interface DetailsClientProps {
  data: Camper;
}
export default function DetailsClient({ data }: DetailsClientProps) {
  const [activeTab, setActiveTab] = useState<Tab>("features");
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className={css.container}>
      <h2 className={css.title}>{data.name}</h2>
      <div className={css.reviewsWrapper}>
        <svg className={css.star} width="16" height="16">
          <use href="/sprite.svg#icon-star"></use>
        </svg>
        <p className={css.rating}>{data.rating}({data.reviews.length} Reviews)</p>

        <p className={css.locationW}>
          <svg className={css.locationIcon} width="16" height="16">
            <use href="/sprite.svg#icon-Map"></use>
          </svg>
          <span className={css.location}>{data.location}</span>
        </p>
      </div>
      <h2 className={css.price}> €{data.price}.00</h2>
      <ul className={css.galleryList}>
        {data.gallery.map((img, idx) => (
          <li
            key={idx}
            className={css.galleryItem}
            onClick={() => {
              setActiveIndex(idx);
              setIsOpen(true);
            }}
          >
            <div className={css.galleryImgWrapper}>
              <Image
                src={img.thumb}
                alt={data.name}
                fill
                className={css.galleryImg}
              />
            </div>
          </li>
        ))}
      </ul>
      {isOpen && (
        <div className={css.modalBackdrop} onClick={() => setIsOpen(false)}>
          <div
            className={css.modal}
            onClick={e => e.stopPropagation()}
          >
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              spaceBetween={20}
              slidesPerView={1}
              initialSlide={activeIndex}
            >
              {data.gallery.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <div className={css.modalImgWrapper}>
                    <Image
                      src={img.thumb}
                      alt={data.name}
                      fill
                      className={css.modalImg}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
      <p className={css.description}>
        {data.description}
      </p>
      <div>
        <div className={css.tabs}>
          <button
            className={`${css.tab} ${activeTab === "features" ? css.active : ""}`}
            onClick={() => setActiveTab("features")}
          >
            Features
          </button>

          <button
            className={`${css.tab} ${activeTab === "reviews" ? css.active : ""}`}
            onClick={() => setActiveTab("reviews")}
          >
            Reviews
          </button>
          <svg className={css.line} width="1312" height="5">
            <use href="/sprite.svg#icon-divider"></use>
          </svg>
        </div>
        
        

        <div className={css.wrapper}>
          <div>
            {activeTab === "features" && <Features data={data} />}
            {activeTab === "reviews" && <Reviews data={data} />}
          </div>
          <BookingForm  />
        </div>
      </div>
    </div>



  )

}
