import React from 'react'
import { Link } from 'react-router-dom';
import img from '../images/im1.jpg'


export default function Product(props) {
  const { product } = props;

  return (
    <>
      <div key={product._id} className="card" style={{ width: '30rem' }}>
        <Link to={`/product/${product._id}`}>
          <img src={product.image} className="card-img-top" alt={product.name} />
          <div className="card-body ">
            <div className='text-center'>
              <h1 className="card-title">{product.name}</h1>
            </div>
            <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, dolore.</p>
            <button className="primary block">BUY NOW</button>
          </div>
        </Link>
      </div>
    </>
  )
}

