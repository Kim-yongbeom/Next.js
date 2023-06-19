import { Pagination } from "@mantine/core";
import { products } from "@prisma/client";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react"

const TAKE = 9

export default function Porducts() {
    const [activePage, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const [products, setProducts] = useState<products[]>([]);

    useEffect(()=>{
        fetch(`/api/get-products?skip=0&take=${TAKE}`)
        .then((res)=>res.json())
        .then((data)=>setProducts(data.items))
    },[])

    const getProducts = useCallback(() => {
      const next = skip + TAKE
      fetch(`/api/get-products?skip=${next}&take=${TAKE}`)
        .then((res)=>res.json())
        .then((data)=>{
          const list = products.concat(data.items)
          setProducts(list)
        })
        setSkip(next)
    }, [skip, products])

  return (
    <div className="px-36 mt-36 mb-36">
      {products && 
        <div className="grid grid-cols-3 gap-5">
          {products.map((item) => {
            return(
              <div key={item.id}>
                <Image 
                  className="rounded" 
                  src={item.image_url ?? ''} 
                  width={300} 
                  height={200} 
                  alt={item.name}
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFhAJ/wlseKgAAAABJRU5ErkJggg=="
                />
                <div className="flex">
                  <span>{item.name}</span>
                  <span className="ml-auto">{item.price.toLocaleString('ko-KR')}원</span>
                </div>
                <span className="text-zinc-400">{item.category_id === 1 && '의류'}</span>
              </div>)
            })
          }
        </div>
      }
      <Pagination page={activePage} onChange={setPage} total={10} />
    </div>
  )
}
