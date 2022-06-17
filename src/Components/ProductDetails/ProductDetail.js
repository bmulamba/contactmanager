import React, { useEffect, useState } from 'react';
import './ProductDetail.css'
import { useParams } from 'react-router-dom'

const ProductDetail = ({productCount, incrementProduct, decrementProduct, addToCard}) => {

  const {id} = useParams();
  const [product, setProduct] = useState({})
  // const [addCartBtn, setaddCartBtn] = useState('')

  useEffect(() => {
    fetch(`https://apifakeapi.herokuapp.com/data/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id])

  return (
    <div className='main-detail'>
      <div className='side-img' >
        <span> <img src={product.images}
            className="card-img-top item-image"
            alt={product.id}
          /></span>
      </div>
      <div className='side-text'>
        <div className='text-prod-name'> 
          <h3><b>{product.name}</b></h3> <br/>
          <h5>{product.brand}</h5> 
          <h2>R <b>{product.price}<small>.00</small></b></h2> 
          <p><i class="fa fa-star text-warning" ></i>  <b>{product.reviews}</b> ({product.countreviews}) Reviews</p>
          <div className='add-buttons'>
            <button className='btn-add' onClick={decrementProduct}>-</button>
            <span>{productCount}</span>
            <button className='btn-add' onClick={incrementProduct}>+</button>
            <br/>
            <button className='add-detail-cart' onClick = {() => addToCard()} >Add To Cart</button>
          </div>
          
          <div className='py-4'>
            <span><b>Description</b></span>
            <p className='py-2'>{product.description}</p>
          </div>
          
        </div>
        
      </div>
      
     
    </div>
  )
}

export default ProductDetail

