import  React , {useState , useEffect} from 'react'
import axios from 'axios';

function useFetch(url , initalState ,authData) {
  const [data , setData] = useState(initalState);
 
    axios({
        method : 'POST',
        url : url,
        data : authData
      }).then(res => {
          setData(res.data);
      }).catch(err => {
          console.log(err);
      });
   
   return data;
}

export default useFetch;
