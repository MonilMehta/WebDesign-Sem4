import React from 'react'
import './styles/loader.css'
import { useEffect,useState } from 'react'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.jpg' 
import {LazyLoadImage} from 'react-lazy-load-image-component'

const Loader = () => {
    const [showLoader, setShowLoader] = useState(false);
    useEffect(()=>{
        setTimeout(() => {
            setShowLoader(false);
          }, 2000);
    },[]
    )


    return (
    <div>
        {showLoader?(
            <div className='loadercontainer'>
            <div className='loader'></div>
            </div>
        ):(
            <div className='second div'>
            <LazyLoadImage src={img2} width='800px' height='780px' effect="blur" alt='img2' className='img' />
            <LazyLoadImage src={img3} width='800px' height='780px' effect="blur" alt='img3' className='img' />
            <LazyLoadImage src={img1} width='800px' height='780px' effect="blur" alt='img1' className='img' />
            <LazyLoadImage src={img4} width='800px' height='780px' effect="blur" alt='img4' className='img' />
            <LazyLoadImage src={img5} width='800px' height='780px' effect="blur" alt='img5' className='img' />
            
            </div>
        )}
    </div>
  )
}

export default Loader
