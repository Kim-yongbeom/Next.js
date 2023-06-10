import { products } from "@prisma/client";
import { useEffect, useState } from "react"

const TAKE = 9

export default function Porducts() {
    const [skip, setSkip] = useState(0);
    const [products, setProducts] = useState<products[]>([]);

    useEffect(()=>{
        fetch(`/api/get-products&skip=0&take=${TAKE}`)
        .then((res)=>res.json())
        .then((data)=>setProducts(data.items))
    },[])

  return (
    <div>Products</div>
  )
}
