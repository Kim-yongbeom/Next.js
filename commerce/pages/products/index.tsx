import { products } from "@prisma/client";
import Image from "next/image";
import { useEffect, useState } from "react"

const TAKE = 9

export default function Porducts() {
    const [skip, setSkip] = useState(0);
    const [products, setProducts] = useState<products[]>([]);

    useEffect(()=>{
        fetch(`/api/get-products?skip=0&take=${TAKE}`)
        .then((res)=>res.json())
        .then((data)=>setProducts(data.items))
    },[])

  return (
    <div className="px-36 mt-36 mb-36">
      {products && 
        <div className="grid grid-cols-3 gap-5">
          {products.map((item) => {
            return(
              <div key={item.id}>
                <Image className="rounded" src={item.image_url ?? ''} width={300} height={200} alt={item.name}/>
                <span>{item.name}</span>
                <span>{item.price}원</span>
              </div>)
            })
          }
        </div>
      }
    </div>
  )
}
