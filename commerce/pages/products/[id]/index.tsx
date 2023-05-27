// import ImageGallery from 'react-image-gallery';
import Head from "next/head";
import Image from "next/image";
import Carousel from "nuka-carousel";
import { useState } from "react";

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1016/1000/600/',
    thumbnail: 'https://picsum.photos/id/1016/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1011/1000/600/',
    thumbnail: 'https://picsum.photos/id/1011/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1012/1000/600/',
    thumbnail: 'https://picsum.photos/id/1012/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1013/1000/600/',
    thumbnail: 'https://picsum.photos/id/1013/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
  {
    original: 'https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/4v.jpg',
    thumbnail: 'https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/4v.jpg',
  },
  {
    original: 'https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/1.jpg',
    thumbnail: 'https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/1.jpg',
  },
  {
    original: 'https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/2.jpg',
    thumbnail: 'https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/2.jpg',
  },
];

export default function Products() {
  const [index, setIndex] = useState(0);
    return(
      <>
      <Head>
        <meta
          property="og:url"
          content="http://www."
        />
        <meta
          property="og:title"
          content="http://www."
        />   
        <meta
          property="og:description"
          content="http://www."
        />   
        <meta
          property="og:image"
          content="http://www."
        />         
      </Head>
        <Carousel animation="fade" autoplay withoutControls slideIndex={index} wrapAround speed={10}>
          {images.map((item) => 
          <Image 
            key={item.original} 
            src={item.original} 
            alt="image" 
            width={1000} 
            height={600} 
            layout="responsive"
          />)}
        </Carousel>
        <div style={{display: 'flex'}}>
          {images.map((item, idx) => (<div key={idx} onClick={()=>setIndex(idx)}>
            <Image src={item.original} alt="image" width={100} height={60}/>
          </div>))}
        </div>
      </>
    )
}