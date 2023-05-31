import { useEffect, useRef, useState } from 'react'
import { NextPage } from 'next';
import { css } from '@emotion/react';
import Button from '@/components/Button';

type Product = {
  id: string;
  properties: {
    name: {
      id: string;
      type: string;
      name: string;
      title: { text: { content: string } }[];
    };
    price: {
      id: string;
    };
    ["설명"]: {
      id: string;
    }
  };
};

const Home: NextPage = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  // const [products, setProducts] = useState<Product[]>([]);
  const [products, setProducts] = useState<{id: string; name: string; createdAt: string;}[]>([]);

  // useEffect(()=>{
  //   fetch('/api/get-item')
  //   .then((res)=>res.json())
  //   .then((data)=>setProducts(data.items))
  // },[])
  useEffect(()=>{
    fetch('/api/get-products')
    .then((res)=>res.json())
    .then((data)=>setProducts(data.items))
  },[])

  const handleClick = () => {
    if(inputRef.current === null || inputRef.current.value === '') {
      alert('name을 넣어주세요.')
      return
    }
    fetch(`/api/add-item?name=${inputRef.current.value}`)
    .then(res => res.json())
    .then(data => alert(data.message))
  }

  if(products)
  console.log(products)

  return (
    <main className='flex flex-col justify-center items-center'>
      <input ref={inputRef} className='placeholder:italic placeholder:text-slate-400 block text-slate-950 bg-white w-96 border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm' type="text" placeholder='name'/>
      <button className="text-black bg-slate-500" onClick={handleClick}>Add Item</button>
      <div>
        <p>Product List</p>
        {
          products && products.map((item)=>(
            <div key={item.id}>{item.name}<span>{item.createdAt}</span></div>
          ))
        }
        {/* {products && products.map((item) => 
        <div key={item.id}>
          {JSON.stringify(item.properties.name.title[0].text.content)}
          {item.properties &&
            Object.entries(item.properties).map(([key, value]) => (
              <>
                <button css={css`
                  background-color: hotpink; 
                  padding: 16px; 
                  border-radius: 8px
                `} key={key} onClick={()=>{
                  fetch(`/api/get-detail?pageId=${item.id}&propertyId=${value.id}`)
                  .then(res => res.json())
                  .then(data => alert(JSON.stringify(data.detail)))
                }}>{key}</button>
                <Button/>
              </>
            ))
          }
          <br/>
          <br/>
        </div>)} */}
      </div>
    </main>
  )
}

export default Home