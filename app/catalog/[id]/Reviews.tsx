import { Camper } from "@/types/camper";

import css from "./Reviews.module.css"

interface ReviewsParams{
  data: Camper
}
export default function Reviews({ data }: ReviewsParams) {
  return (
    <div className={css.container}>
      {data.reviews.map((item, idx) => (
        <div key={idx}>
          <div className={css.wrapper}>
            <p className={css.name}>{item.reviewer_name.slice(0,1)}</p>
            <div>
              <p className={css.reviewername}>{item.reviewer_name}</p>
              <div className={css.starsWrapper}>
                {Array.from({ length: 5 }).map((_, i) =>
                  item.reviewer_rating > i ? (
                    <svg key={i} className={css.star} width="16" height="16">
                      <use href="/sprite.svg#icon-star"></use>
                    </svg>
                  ) : (
                    <svg key={i} className={css.stargray} width="16" height="16">
                      <use href="/sprite.svg#icon-star"></use>
                    </svg>
                  )
                )}
              </div>
          
            </div>
          </div>
          
          <p className={css.descr}>{item.comment}</p>
        </div>
      ))}
    </div>
  )
}