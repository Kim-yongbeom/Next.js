// import ImageGallery from 'react-image-gallery';
import CustomEditor from "@/components/Editor";
import { EditorState, convertFromRaw } from "draft-js";
import Image from "next/image";
import { useRouter } from "next/router";
import Carousel from "nuka-carousel";
import { useEffect, useState } from "react";

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
  const router = useRouter();
  const {id: productId} = router.query;
  const [editorState, setEditorState] = useState<EditorState | undefined>(undefined);

  useEffect(()=>{
    if(productId !== null){
      fetch(`/api/get-produc?id=${productId}`)
      .then(res => res.json())
      .then(data => {
        if(data.items.contents) {
          setEditorState(
            EditorState.createWithContent(
              convertFromRaw(JSON.parse(data.items.contents))
            )
          )
        } else {
          setEditorState(EditorState.createEmpty())
        }
      })
    }
  },[productId])

  const handleSave = () => {
    alert('save');
  }

    return(
      <>
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
        {editorState != null && 
        <CustomEditor 
          editorState={editorState} 
          onEditorStateChange={setEditorState}
          onSave={handleSave}
        />}
      </>
    )
}
