
import { Row ,Col} from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';

function LoadingSkeleton() {
  return (
    <Row className="py-4">
      <Col sm={3} className="d-flex justify-content-center align-items-center">
         <Skeleton width={300} height={400}/>
      </Col>
      <Col sm={9} >
         <p>
           <Skeleton width={500} height={40}/>
         </p>
         <p>
           <Skeleton width={500} height={40}/>
         </p>
         <p>
           <Skeleton width={500} height={40}/>
         </p>
         <Skeleton width={500} height={210}/>
      </Col>
    </Row>
  )
}

export default LoadingSkeleton;
