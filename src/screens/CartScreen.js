import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart } from '../actions/cartActions';
import MessageBox from '../componants/MessageBox';


export default function CartScreen(props) {
  const productId = props.match.params.id;

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const dispatch = useDispatch();
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId));
    }
  }, [dispatch, productId]);
  const removeFromCartHandler = (id) => {
    // delete action
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    props.history.push('/signin?redirect=shipping');
  };
  return (
    <div className="row top ">
      <div className="col-2 ">
        <h1>Courses Cart</h1>
        {cartItems.length === 0 ? (
          <MessageBox>
            Cart is empty. <Link to="/"> <i className="fas fa-shopping-cart"> Purchese Courses</i></Link>
          </MessageBox>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.product}>
                <div className="row ">
                  <div className='mini-card'>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="small"
                    ></img>
                  </div>
                  <div className="min-30 mini-card">
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </div>

                  <div className='mini-card'>${item.price}</div>
                  <div className='mini-card'>
                    <button type="button" onClick={() => removeFromCartHandler(item.product)}>
                      Delete
                      </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="col-1">
        <div className="card card-body">
          <ul>
            <li>
              <h2>
                Subtotal ({cartItems.reduce((a, c) => a + c.qty, 0)} items) : $
                  {cartItems.reduce((a, c) => a + c.price, 0)}
              </h2>
            </li>
            <li>
              {cartItems.length > 0 && (
                <button type="button" onClick={checkoutHandler} className="primary block">
                  Proceed to Checkout
                </button>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}