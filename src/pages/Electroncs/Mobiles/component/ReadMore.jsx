import React , {useState} from 'react'
import {Para} from '../styledComponent';

function ReadMore({description}) {
    const [isShow, setShow] = useState(true);
    const readMoreLess = (desc) => {
       let lessText;
       if(isShow){
           lessText =  desc.slice(0,50);
         
       } else {
          lessText = desc;
       }
       return lessText;
    }

  return (
    <Para>
     {readMoreLess(description)}
       {description === 'NA' ? '' : (
          <p className="text-primary font-pop showMore" onClick={() => setShow(!isShow)}>
          {
              !isShow ? 'Show Less' : 'Show More'
          }
        </p>
       )} 
    </Para>
  )
}

export default ReadMore
