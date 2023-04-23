import { useEffect, useRef, useState } from 'react'
import { NextPage } from 'next';

const Home: NextPage = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    fetch('/api/get-items')
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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <input ref={inputRef} type="text" placeholder='name'/>
      <button onClick={handleClick}>Add Jacket</button>
      <div>
        <p>Product List</p>
        {products && products.map((item) => <div key={item}>{JSON.stringify(item)}<br/><br/></div>)}
      </div>
    </main>
  )
}

export default Home