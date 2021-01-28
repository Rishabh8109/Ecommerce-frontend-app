import React , {useState , useEffect} from 'react'
import {
  Sub_Title,
  Sub_Title2,
  Para,
  Image,
} from "./styledComponent";

import axios from "axios";
import {
  ProductCard,
  MainImage,
  ChildImage,
} from "./styledComponent";
import LoadingSkeleton from '../skeleton-loading/LoadingSkeleton';
import { Link } from "react-router-dom";
import ReadMore from './component/ReadMore';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';

function Product(props) {

  const {match} = props;
  const slug = match.params.slug;
  
    const [product, setproductBySlug] = useState([]);
    const [loading, setloading] = useState(false);
    const [url, seturl] = useState("");
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
  
    useEffect(() => {
      setloading(true);
      axios({
        method: "GET",
        url: `http://localhost:5000/api/products/getProduct/${slug}`,
        headers: headers,
      })
        .then((res) => {
          setloading(false);
          setproductBySlug(res.data.products);
        })
        .catch((err) => {
          console.log(err);
        });
    }, [match]);
    
  return (
    <>
    {product &&
      product.map(
        ({
          _id,
          product_name,
          price,
          description,
          productImages,
          Highlights,
        }) => (
          <React.Fragment key={_id}>
            <ProductCard className="my-2">
               {
                 loading ? (
                   <LoadingSkeleton />
                 ) : (
                   <>
                   <div className="row">
                   <div className="col-3  pl-5">
                     {productImages &&
                       productImages.map((img, index) => (
                         <React.Fragment key={img._id}>
                           {index === 0 && (
                             <>
                                <Link to={`${match.url}/${product_name}?productId=${_id}`} className="link mx-auto">
                                  <Image
                                  src={img.url}
                                  key={img._id}
                                  alt="productImage"
                                  className="img-responsive "
                                />
                                </Link>
                               <FavoriteBorderOutlinedIcon className="position-absolute mt-5 ml-5" style={{color : 'lightgrey'}}/>
                             </>
                           )}
                         
                         </React.Fragment>
                       ))}
                   </div>
                   <div className="col-sm-9 pt-5">
                      <Link to={`${match.url}/${product_name}?productId=${_id}`} className="link">
                         <Sub_Title2>{product_name}</Sub_Title2>
                      </Link>
                     <Sub_Title>
                     &#x20B9;{price}
                     </Sub_Title>
                     <hr></hr>
                     <Sub_Title2>Highlights :</Sub_Title2>
                     <ul className="mt-3">
                       {Highlights &&
                         Highlights.map(
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
                               <li>{primary_camera} | {secondary_camera}</li>
                               <li>{screen_size}</li>
                               <li>{proccessor_brand}</li>
                               <li>{Battary_capacity}</li>
                             </React.Fragment>
                           )
                         )}
                     </ul>
                     <Sub_Title2 className="mt-4">Description : </Sub_Title2>
                     <ReadMore description={description}/>
                   </div>
                 </div>
                   </>
                 )
               }
            </ProductCard>
          </React.Fragment>
        )
      )}
    </>
  )
}

export default Product;
