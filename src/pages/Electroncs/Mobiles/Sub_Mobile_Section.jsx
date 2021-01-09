import axios from 'axios';
import React , {useEffect} from 'react';

function Sub_Mobile_Section(props) {
    const {match} = props;
    const slug = match.params.slug;

    useEffect(() => {
       if(slug) {
          axios({
              method : "GET",
              url : `http://localhost:5000/api/products/getProduct/${slug}`
          }).then(res =>{
             console.log(res.data);
          }).catch(err => {
              console.log(err);
          })  
       }
    },[match]);
  return (
    <div>
      mobile page
    </div>
  )
}

export default Sub_Mobile_Section;
