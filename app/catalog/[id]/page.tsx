
import { getCampersById } from "@/lib/api";

import DetailsClient from "./DetailsClient";




interface DetailsPageProps {
  params: { id: string };
}

export default async function Details({ params }: DetailsPageProps){
  
  
  const { id } = await params;
  const data = await getCampersById(id);

  return (
  <DetailsClient data={data}/>
)
}