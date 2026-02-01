import { Camper } from "@/types/camper";
import css from "./Feautures.module.css"
 

interface FeaturesParams{
  data: Camper
}
export default function Features({data}:FeaturesParams) {
  
  return ((<div className={css.wrapper}>
    <ul className={css.listDesc}>
      <li className={css.itemDesc}>
        <svg className={css.icon} width="20" height="20">
          <use href="/sprite.svg#icon-diagram"></use>
        </svg>{data.transmission}
      </li>
      <li className={css.itemDesc}>
        <svg className={css.icon} width="20" height="20">
          <use href="/sprite.svg#icon-fuel-pump"></use>
        </svg>{data.engine}
      </li>

      {data.kitchen == true ? (<li className={css.itemDesc}>
        <svg className={css.icon} width="20" height="20">
          <use href="/sprite.svg#icon-cup-hot"></use>
        </svg>Kitchen
      </li>) : null}
      {data.AC == true ? (<li className={css.itemDesc}>
        <svg className={css.icon} width="20" height="20">
          <use href="/sprite.svg#icon-wind"></use>
        </svg>AC
      </li>) : null}
      {data.radio == true ? (<li className={css.itemDesc}>
        <svg className={css.icon} width="20" height="20">
          <use href="/sprite.svg#icon-ui-radios"></use>
        </svg>Radio
      </li>) : null}
      {data.refrigerator == true ? (<li className={css.itemDesc}>
        <svg className={css.icon} width="20" height="20">
          <use href="/sprite.svg#icon-solar_fridge-outline"></use>
        </svg>Refrigerator
      </li>) : null}
      {data.microwave == true ? (<li className={css.itemDesc}>
        <svg className={css.icon} width="20" height="20">
          <use href="/sprite.svg#icon-lucide_microwave"></use>
        </svg>Microwave
      </li>) : null}
      {data.gas == true ? (<li className={css.itemDesc}>
        <svg className={css.icon} width="20" height="20">
          <use href="/sprite.svg#icon-hugeicons_gas-stove"></use>
        </svg>Gas
      </li>) : null}
      {data.water == true ? (<li className={css.itemDesc}>
        <svg className={css.icon} width="20" height="20">
          <use href="/sprite.svg#icon-ion_water-outline"></use>
        </svg>Water
      </li>) : null}
    </ul>
    <h2 className={css.title}>Vehicle details</h2>
    <svg className={css.line} width="527" height="1">
      <use href="/sprite.svg#icon-divider"></use>
    </svg>
    <div className={css.details}>
      <p className={css.descr}>Form</p>
      <p className={css.descr}>{data.form}</p>
    </div>
    <div className={css.details}>
      <p className={css.descr}>Length</p>
      <p className={css.descr}>{data.length}</p>
    </div>
    <div className={css.details}>
      <p className={css.descr}>Width</p>
      <p className={css.descr}>{data.width}</p>
    </div>
    <div className={css.details}>
      <p className={css.descr}>Height</p>
      <p className={css.descr}>{data.height}</p>
    </div>
    <div className={css.details}>
      <p className={css.descr}>Tank</p>
      <p className={css.descr}>{data.tank}</p>
    </div>
    <div className={css.details}>
      <p className={css.descr}>Consumption</p>
      <p className={css.descr}>{data.consumption}</p>
    </div>
  </div>))
}