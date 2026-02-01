


"use client";
import { getCampers } from "@/lib/api";

import css from "./FilterForm.module.css"
import { useCampersStore } from "@/store/campersStore";
import { useEffect, useState } from "react";
export default function CamperCatalog() {
    const { setFilters } = useCampersStore();

    const [type, setType] = useState<string | undefined>();

  const handleSubmit = (formData: FormData) => {
    const location = formData.get("location") as string;
    const equipment = formData.getAll("equipment") as string[];
    const vehicleType = formData.get("vehicleType") as string;
    const data: {
      location?: string;
      form?: string;
      AC?: boolean,
      bathroom?: boolean,
      kitchen?: boolean,
      TV?: boolean,
      transmission?: string
    } = {};

    if (location) {
      data.location = location;
    }

    if (vehicleType) {
      data.form = vehicleType;
    }

    equipment.forEach((item) => {
      switch (item) {
        case "AC":
          data.AC = true;
          break;
        case "bathroom":
          data.bathroom = true;
          break;
        case "kitchen":
          data.kitchen = true;
          break;
        case "TV":
          data.TV = true;
          break;
        case "automatic":
          data.transmission = "automatic";
          break;
      }
    });
    

    setFilters(    data    );
  };

    
  
  const {  setCampers, resetCampers, filters } = useCampersStore();
  useEffect(() => {
    const fetchCampers = async () => {
      resetCampers();
      const data = await getCampers({ ...filters, page: 1, limit: 4, }); setCampers(data.items);
    }; fetchCampers();
  }, [filters, resetCampers, setCampers]);

  return (
    <form className={css.form} action={handleSubmit}>
      <div className={css.locationWrapper} >
        <label className={css.locationLabel} htmlFor="location">Location</label>
        <div className={css.location}>
          <input id="location" type="text" name="location" placeholder="Kyiv, Ukraine" className={css.locationInput} />
          <svg className={css.iconLocation} width="20" height="20">
            <use href="/sprite.svg#icon-Map"> </use>
          </svg>
        </div>
      </div>
      <p className={css.filters}>Filters</p>
      <fieldset className={css.equipment} >
        <legend className={css.title}>Vehicle equipment</legend>
        <svg className={css.divider} width="360" height="1">
          <use href="/sprite.svg#icon-divider"></use>
        </svg>
        <div className={css.checkboxWrapper}>
          <div>
            <input className={css.checkbox} type="checkbox" name="equipment" value="AC" id="AC" />
            <label className={css.checkboxLabel} htmlFor="AC">
              <svg width="32" height="32">
                <use href="/sprite.svg#icon-wind"></use>
              </svg>
              <p className={css.text}>AC</p>
            </label>
          </div>
          <div >
            <input className={css.checkbox} type="checkbox" name="equipment" value="automatic" id="Automatic" />
            <label className={css.checkboxLabel} htmlFor="Automatic">
              <svg width="32" height="32">
                <use href="/sprite.svg#icon-diagram">
                </use>
              </svg>
              <p className={css.text}>Automatic</p>
            </label>
          </div>
          <div>
            <input className={css.checkbox} type="checkbox" name="equipment" value="kitchen" id="Kitchen" />
            <label className={css.checkboxLabel} htmlFor="Kitchen">
              <svg width="32" height="32">
                <use href="/sprite.svg#icon-cup-hot"></use>
              </svg>
              <p className={css.text}>Kitchen</p>
            </label>
          </div>
          <div>
            <input className={css.checkbox} type="checkbox" name="equipment" value="TV" id="TV" />
            <label className={css.checkboxLabel} htmlFor="TV">
              <svg width="32" height="32">
                <use href="/sprite.svg#icon-tv"></use>
              </svg>
              <p className={css.text}>TV</p>
            </label>
          </div>
          <div>
            <input className={css.checkbox} type="checkbox" name="equipment" value="bathroom" id="Bathroom" />
            <label className={css.checkboxLabel} htmlFor="Bathroom">
              <svg width="32" height="32">
                <use href="/sprite.svg#icon-ph_shower"></use>
              </svg>
              <p className={css.text}>Bathroom</p>
            </label>
          </div>
        </div>
      </fieldset>
      <fieldset className={css.type} >
        <p className={css.title}>Vehicle type</p>
        <svg className={css.divider} width="360" height="1">
          <use href="/sprite.svg#icon-divider"></use>
        </svg>
        <div className={css.radioWrapper}>
          <label className={`${css.radioLabel} ${type === "panelTruck" ? css.active : ""}`}>
            <input className={css.radio} type="radio" name="vehicleType" value="panelTruck" checked={type === "panelTruck"}   
              onChange={() => setType("panelTruck")} />
            <svg width="32" height="32">
              <use href="/sprite.svg#icon-bi_grid-1x2"></use>
            </svg>
            <p className={css.text}>Van</p>
          </label>
          <label className={`${css.radioLabel} ${type === "fullyIntegrated" ? css.active : ""}`}>
            <input className={css.radio} type="radio" name="vehicleType" value="fullyIntegrated" checked={type === "fullyIntegrated"}
              onChange={() => setType("fullyIntegrated")} />
            <svg width="32" height="32">
              <use href="/sprite.svg#icon-bi_grid"></use>
            </svg>
            <p className={css.text}>Fully Integrated</p>
          </label>
          <label className={`${css.radioLabel} ${type === "alcove" ? css.active : ""}`}>
            <input className={css.radio} type="radio" name="vehicleType" value="alcove" checked={type === "alcove"}
              onChange={() => setType("alcove")} />
            <svg width="32" height="32">
              <use href="/sprite.svg#icon-bi_grid-3x3-gap"></use>
            </svg>
            <p className={css.text}>Alcove</p>
          </label>
        </div>
      </fieldset>
      <button className={css.btn}>Search</button> </form>)
}