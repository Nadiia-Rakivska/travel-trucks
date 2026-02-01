import CamperCatalog from "@/components/CamperCatalog/CamperCatalog";
import FilterForm from "@/components/FilterForm/FilterForm";
import css from "./Catalog.module.css"


export default async function Catalog() {



 
  return (
    <div className={css.container}>
      <FilterForm />
      <CamperCatalog/>
   </div>
   
  )
}