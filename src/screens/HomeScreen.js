import React, { useEffect } from 'react';
import Product from '../componants/Product';
import LoadingBox from '../componants/LoadingBox';
import MessageBox from '../componants/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProduct } from '../actions/productActions';
import Feature from '../componants/Feature';


export default function HomeScreen() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProduct());
  }, [dispatch]);
  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          <Feature />
          <div className=' text-center mt-5'>
            <h1 className='display-4'>OUR SERVICES</h1>
          </div>
          <div className="row center my-5 ">
            {products.map((product) => (
              <Product key={product._id} product={product}></Product>
            ))}
          </div>
        </>
      )}
    </div>
  );
}