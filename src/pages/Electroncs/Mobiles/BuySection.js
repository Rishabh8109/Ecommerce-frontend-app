import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import axios from "axios";
import { Col, Row , Spinner } from "react-bootstrap";

import {
  ProductCard,
  Sub_Title,
  Sub_Title2,
  Image,
  CartButton,
  WishlistButton
} from "./styledComponent";

import {
  AddToCartRequest,
  AddToCartSuccess,
  AddToCartFailed
} from '../../../stateManager/myCart/cartAction';

// skeleton page for loading
import LoadingSkeleton from "../skeleton-loading/LoadingSkeleton";

// icons 
import FlashOnIcon from '@material-ui/icons/FlashOn';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

// read more 
import ReadMore from './component/ReadMore';

// Link
import {Link , useHistory} from 'react-router-dom';
import {useDispatch  , useSelector} from 'react-redux';
import Loading from "./Loading";

function BuySection(props) {
  const token = localStorage.getItem("token");
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  
  // parse the location from url
  const location = useLocation();
  
  // geting productId from url
  const { productId } = queryString.parse(location.search);
 
  // init state
  const [loading, setLoading] = useState(false);
  const [products, setproducts] = useState([]);
  const [url, seturl] = useState("");
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart)
  const history = useHistory();

  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: `http://localhost:5000/api/products/${productId}`,
      headers: headers,
    })
      .then((res) => {
        setLoading(false);
        setproducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
   
  
  // destructuring the props
  const productData = products.products;

  // getting image url by id
  const geturl = (imageId) => {
    productData.productImages.map((item) => {
      if (item._id === imageId) {
        seturl(item.url);
      }
    });
  };
  
  // Add_To_Cart
  const AddToCart = (productId) => {
    dispatch(AddToCartRequest());
    axios({
      method : "post",
      url : "http://localhost:5000/api/orders/AddToCart",
      headers : headers,
      data : {
          productId : productId,
          quantity : 1
      }
    }).then(res => {
     dispatch(AddToCartSuccess(res.data));
    //  history.push('/view_cart')
    }).catch(err => {
       dispatch(AddToCartFailed(err.response.data.error))
    }) 
    
  }
 
  return (
    <>
    {
      productData && (
        <ProductCard className="my-2">
         {
           loading ? <LoadingSkeleton /> : (
             <React.Fragment key={productData._id}>
             <Row>
             <Col sm={4} className="pt-5">
             <div class="exzoom" id="exzoom">
               <div className="product-image d-flex align-items-center justify-content-center w-100">
                 <div className="childImage d-flex flex-column align-items-center ">
                 {productData.productImages &&
                   productData.productImages.map((img) => (
                     <React.Fragment key={img._id}>
                         <Image
                           src={img.url}
                           key={img._id}
                           alt="productImage"
                           className="img-responsive "
                           width="20%"
                           onMouseEnter={() => geturl(img._id)}
                         />
                     </React.Fragment>
                   ))}
                 </div>
                 <div className="main-image w-100 bg-light"> 
                 {url ? (
                   <Image
                     src={url}
                     alt="productImage"
                     className="img-responsive m-auto d-block"
                   />
                 ) : (
                   <>
                     {productData.productImages &&
                       productData.productImages.map((img, index) => (
                         <React.Fragment key={img._id}>
                           {index === 0 && (
                             <Image
                               src={img.url}
                               key={img._id}
                               alt="productImage"
                               className="img-responsive m-auto d-block"
                             />
                           )}
                         </React.Fragment>
                       ))}
                   </>
                 )}
                 </div>
               </div>
                 <div className="button d-flex align-items-center justify-content-around py-3 ml-5 mt-3">
                   <CartButton onClick={() => AddToCart(productData._id)} loading={cart.loading}>
                      {
                        cart.loading ? (
                          <>
                              <Spinner
                        
                              as="span"
                              animation="border"
                              size="sm"
                              role="status"
                              aria-hidden="true"
                              className="mr-2"
                            />
                            <span className="sr-only">Loading...</span>
                            Going to cart
                          </>
                        ) : (
                          <>
                          <ShoppingCartIcon className="mr-2" /> Add to Cart
                          </>
                        )
                      }
                   </CartButton>
                   <Link to={`/checkout`}>
                      <WishlistButton><FlashOnIcon className="mr-2"/>Buy Now</WishlistButton>
                   </Link>
                </div>
               </div>
             </Col>
             <Col sm={8} className="pl-5">
               <div className="col-sm-9 pt-5">
                   <Sub_Title>{productData.product_name}</Sub_Title>
                   <Sub_Title2 className="text-primary">&#x20B9;{productData.price}</Sub_Title2>
                   <hr></hr>
                
                 <Sub_Title2>Highlights :</Sub_Title2>
                 <ul className="mt-3">
                   {productData.Highlights &&
                     productData.Highlights.map(
                       ({
                         ram,
                         primary_camera,
                         secondary_camera,
                         screen_size,
                         proccessor_brand,
                         Battary_capacity,
                         _id,
                       }) => (
                         <React.Fragment key={_id}>
                           <li>{ram}</li>
                           <li>
                             {primary_camera} | {secondary_camera}
                           </li>
                           <li>{screen_size}</li>
                           <li>{proccessor_brand}</li>
                           <li>{Battary_capacity}</li>
                         </React.Fragment>
                       )
                     )}
                 </ul>
                 <Sub_Title2 className="mt-4">Description : </Sub_Title2>
                   <ReadMore description={productData.description}/>
               </div>
             </Col>
           </Row>
             </React.Fragment>
           )
         }
        </ProductCard>
      )
    }
    </>
  );
}

export default BuySection;
