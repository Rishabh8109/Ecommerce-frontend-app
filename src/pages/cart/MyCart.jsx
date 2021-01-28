import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Col, Card, Row } from "react-bootstrap";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import {
  GetCartProductRequest,
  GetCartProductSuccess,
  GetCartProductFailed,
} from "../../stateManager/myCart/cartAction";
import { Sub_Title, Sub_Title2 } from "../Electroncs/Mobiles/styledComponent";
import Typography from "@material-ui/core/Typography";

//icon from materialui-icon
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import {
  AddToCartRequest,
  AddToCartSuccess,
  AddToCartFailed
} from '../../stateManager/myCart/cartAction';
import LoadingSkeleton from "./skeleton-loading/LoadingSkeleton";

function MyCart() {
  const token = localStorage.getItem("token");
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const [Loading, setLoading] = useState(false);
  const [products, setproducts] = useState([]);
  const [isAdded , setAdded] = useState(false);
  const { product , loading } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
 

  // geting cart product
  useEffect(() => {
    dispatch(GetCartProductRequest());
    axios({
      method: "get",
      url: "http://localhost:5000/api/orders/cart",
      headers: headers,
     })
      .then((res) => {
        dispatch(GetCartProductSuccess(res.data));
      })
      .catch((err) => {
        dispatch(GetCartProductFailed(err.response.data.error));
      });
  }, [isAdded]);
  
  // adding product
  useEffect(() => {
    setLoading(true);
    axios({
      method: "get",
      url: "http://localhost:5000/api/products",
      headers: headers,
    })
      .then((res) => {
        setLoading(false);
        setproducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [isAdded]);


  // destructuring the product state
  const productData = products.products;

  // get ProductData
  let newItem = [];
  productData &&
    productData.find((item) => {
      product &&
        product.map((doc) => {
          if (item._id === doc.Id) {
            newItem.push({
              item,
              quantity : doc.quantity
            });
          }
        });
    });

    
 const getProduct = (url , Id , quantity) => {
  dispatch(AddToCartRequest());
  axios({
    method : "post",
    url : url,
    headers : headers,
    data : {
        productId : Id,
        quantity : quantity
    }
  }).then(res => {
     dispatch(AddToCartSuccess(res.data));
     setAdded(!isAdded);
  }).catch(err => {
    dispatch(AddToCartFailed(err.response.data.error))
  }) 

}

  // incrementQuantity / decremntQuantity
  const incrementQuantity = (Id) => {
    getProduct("http://localhost:5000/api/orders/AddToCart"  , Id , 1);
  }
  

  const decrementQuantity = (Id) => {
    getProduct("http://localhost:5000/api/orders/AddToCart" , Id , -1);
  }
  
  
  return (
    <>
      <Row className="p-5">
        <Col sm={8}>
          <Card>
            <Card.Header className="bg-light d-flex justify-content-between align-items-center">
              <Card.Title>My Cart</Card.Title>
              <div className="action d-flex align-items-center justify-content-around">
                <TextField id="standard-basic" label="Enter delivery pincode" />
                <Button color="primary">Check</Button>
              </div>
            </Card.Header>
            <Card.Body>
              {
                loading ? <LoadingSkeleton data={newItem}/> : (
                  <>
                  {
                    newItem.map((item) => (
                      <>
                      <Row className="border-bottom">
                        <Col sm={3} className="p-4">
                          {
                            item.item.productImages.map((img, index) => (
                              <React.Fragment key={img._id}>
                                {index === 0 && (
                                  <img
                                    src={img.url}
                                    key={img._id}
                                    alt="productImage"
                                    className="img-responsive ml-5"
                                    width="30%"
                                  />
                                )}
                              </React.Fragment>
                            ))}
                          <div className="buttons mt-4">
                            <Button color="secondary" variant="outlined" onClick={() => decrementQuantity(item.item._id )} disabled={item.quantity === 1}>
                              <RemoveIcon />
                            </Button>
                            <Button color="primary" className="border mx-2">
                              {item.quantity}
                            </Button>
                            <Button color="primary" variant="outlined" onClick={() => incrementQuantity(item.item._id )}>
                              <AddIcon />
                            </Button>
                          </div>
                        </Col>
                        <Col sm={9} className="pt-4">
                          <Sub_Title>
                            {item.item.product_name}
                          </Sub_Title>
                          {
                            item.item.Highlights.map(({ ram, _id }) => (
                              <React.Fragment key={_id}>
                                <Typography
                                  variant="subtitle1"
                                  gutterBottom
                                  className="mt-4"
                                >
                                  {ram}
                                </Typography>
                              </React.Fragment>
                            ))}
                          <Typography variant="subtitle1" gutterBottom>
                            Seller:TREASURE HAUL ONLINE
                          </Typography>
                          <Sub_Title>
                            &#x20B9; {item.item.price}
                          </Sub_Title>
                          <hr></hr>
                          <Button color="secondary" variant="outlined">
                            remove
                          </Button>
                          <Button color="primary" className="border mx-2">
                            save for later
                          </Button>
                        </Col>
                    </Row>
                      </>
                    ))
                  }
                  </>
                )
              }
            </Card.Body>
          </Card>
        </Col>
        <Col sm={4}>
          <Card>
            <Card.Header className="bg-light">
              <Card.Title>Price Detail</Card.Title>
            </Card.Header>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default MyCart;
