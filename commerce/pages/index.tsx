import { useEffect, useRef, useState } from 'react'
import { NextPage } from 'next';

const Home: NextPage = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [products, setProducts] = useState<{id: string; properties: {id: string}[]}[]>([]);

  useEffect(()=>{
    fetch('/api/get-item')
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

  return (
    <main>
      <input ref={inputRef} type="text" placeholder='name'/>
      <button className="text-black bg-slate-500" onClick={handleClick}>Add Item</button>
      <div>
        <p>Product List</p>
        {products && products.map((item) => 
        <div key={item.id}>
          {JSON.stringify(item)}
          {item.properties &&
            Object.entries(item.properties).map(([key, value]) => (
              <button className="text-black bg-slate-500" key={key} onClick={()=>{
                fetch(`/api/get-detail?pageId=${item.id}&propertyId=${value.id}`)
                .then(res => res.json())
                .then(data => alert(JSON.stringify(data.detail)))
              }}>{key}</button>
            ))
          }
          <br/>
          <br/>
        </div>)}
      </div>
    </main>
  )
}

export default Home