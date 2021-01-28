import  React , {useState , useEffect} from 'react'
import axios from 'axios';

function useFetch(url , initalState ) {
  
  const [data , setData] = useState(initalState);
    useEffect(() => {
      
      axios({
          method : 'GET',
          url : url,
     
        }).then(res => {
            setData(res.data);
        }).catch(err => {
            console.log(err);
        });
    
    },[])
    
   return data;
}

export default useFetch;
