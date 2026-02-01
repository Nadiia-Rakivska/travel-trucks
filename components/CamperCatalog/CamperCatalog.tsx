"use client";

import { getCampers } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";
import css from "./CamperCatalog.module.css";
import { useCampersStore } from "@/store/campersStore";
import { useEffect, useState, useTransition } from "react";





export default function CamperCatalog() {
  
  const {
    campers,
    setCampers,
    resetCampers,
    totalCampers,
    setTotalCampers,
    filters,
    favorites,
    toggleFavorite,
    appendCampers,
  } = useCampersStore();
  const [page, setPage] = useState(1);
  
  useEffect(() => {
    const fetchCampers = async () => {
      try {
        const params = {
          ...filters,
          page,
          limit: 4,
        };

        const data = await getCampers(params);
        setTotalCampers(data.total);

        if (page === 1) {
          resetCampers();
          setCampers(data.items);
        } else {
          appendCampers(data.items);
        }
      } catch (error) {
        console.error("Failed to fetch campers:", error);
      }
    };

    fetchCampers();
  }, [page, filters, resetCampers, setCampers, setTotalCampers, appendCampers]);



  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(() => {
      setPage(1);
    });
  }, [filters]);
  return (
    <div className={css.container}>
      <ul>

        {campers.map((item) => {
          const isFavorite = favorites.includes(item.id);
          return (
           
            <li className={css.item} key={item.id}>
              
              <Image
                src={item.gallery[0].thumb}
                alt={item.name}
                width={292}
                height={320}
                className={css.img}
              />
              <div>
                <div className={css.titleWrapper}>
                  <h2 className={css.title}>{item.name}</h2>
                  <div className={css.priceWrapper}>
                    <h2 className={css.title}>€{item.price}.00</h2>
                    <svg className={`${css.heart} ${isFavorite ? css.active : ""}`}
                      width="26"
                      height="24"
                      onClick={() => toggleFavorite(item.id)}
                      style={{ cursor: "pointer" }} >
                      <use href="/sprite.svg#icon-heart"></use>
                    </svg>
                  </div>
                </div>
                <div className={css.reviewsWrapper}>
                  <svg className={css.star} width="16" height="16">
                    <use href="/sprite.svg#icon-star"></use>
                  </svg>
                  <p className={css.rating}>
                    {" "}
                    {item.rating} ({item.reviews.length} Reviews){" "}
                  </p>
                  <p className={css.location}>
                    <svg width="16" height="16">
                      <use href="/sprite.svg#icon-Map"></use>
                    </svg>{" "}
                    {item.location}
                  </p>
                </div>
                <p className={css.description}>
                  {" "}
                  {item.description.length > 62
                    ? item.description.slice(0, 62) + "..."
                    : item.description}{" "}
                </p>
                <ul className={css.listDesc}>
                  <li className={css.itemDesc}>{item.transmission}</li>
                  <li className={css.itemDesc}>{item.engine}</li>
                  {item.kitchen && <li className={css.itemDesc}>Kitchen</li>}
                  {item.AC && <li className={css.itemDesc}>AC</li>}
                </ul>
                <Link className={css.nav} href={`/catalog/${item.id}`}>
                  {" "}
                  Show more{" "}
                </Link>
              </div>
            </li>)
       
        }) }
      </ul>
      {campers.length < totalCampers && campers.length % 4 === 0 && (
      <button
        className={css.btn}
        onClick={() => setPage(prev => prev + 1)}
      >
        Load more
      </button>
    )}
    </div>
  );

  // return
  //        <div className={css.container}>
  //         <ul> {campers.map((item) => (
  //         <li className={css.item} key={item.id}>
  //         <Image src={item.gallery[0].thumb} alt={item.name}
  //          width={292} height={320} className={css.img} />
  //             <div>
  //               <div className={css.titleWrapper}>
  //             <h2 className={css.title}>{item.name}</h2>
  //              <div className={css.priceWrapper}>
  //               <h2 className={css.title}>€{item.price}.00</h2>
  //                </div>
  //                </div>
  //                <div className={css.reviewsWrapper}>
  //                 <svg className={css.star} width="16" height="16">
  //                    <use href="/sprite.svg#icon-star"></use>
  //                     </svg>
  //                     <p className={css.rating}> {item.rating} ({item.reviews.length} Reviews) </p>
  //                     <p className={css.location}>
  //                       <svg width="16" height="16">
  //                       <use href="/sprite.svg#icon-Map"></use>
  //                       </svg> {item.location}
  //                        </p>
  //                        {/* </div>  */}
  //                        <p className={css.description}> {item.description.length > 62 ? item.description.slice(0, 62) + "..." : item.description} </p> <ul className={css.listDesc}>
  //                         <li className={css.itemDesc}>{item.transmission}</li>
  //                         <li className={css.itemDesc}>{item.engine}</li>
  //                          {item.kitchen && <li className={css.itemDesc}>Kitchen</li>}
  //                           {item.AC && <li className={css.itemDesc}>AC</li>}
  //                           </ul> <Link className={css.nav} href={/catalog/${item.id}}> Show more </Link>
  //                           </div>
  //                           </li> ))}
  //                            </ul>
  //                             <button className={css.btn}>Load more</button>
  //  </div >
  // <div className={css.container}>
  //   <ul>
  //     {campers.map((item) => (
  //       <li className={css.item} key={item.id}>
  //         <Image
  //           src={item.gallery[0].thumb}
  //           alt={item.name}
  //           width={292}
  //           height={320}
  //           className={css.img}
  //         />

  //         <div className={css.titleWrapper}>
  //           <h2 className={css.title}>{item.name}</h2>
  //           <p>€{item.price}.00</p>
  //           <p>{item.location}</p>

  //           <Link href={`/catalog/${item.id}`}>Show more</Link>
  //         </div>
  //       </li>
  //     ))}
  //   </ul>

  //   {campers.length < totalCampers && campers.length % 4 === 0 && (
  //     <button
  //       className={css.btn}
  //       onClick={() => setPage(prev => prev + 1)}
  //     >
  //       Load more
  //     </button>
  //   )}
  // </div>
  // );
}
