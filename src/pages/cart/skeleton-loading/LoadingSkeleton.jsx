import React from 'react'
import { Row ,Col} from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';

function LoadingSkeleton() {
  return (
     <>
        {
            <>
                <Row className="py-4">
                    <Col sm={3} className="d-flex justify-content-center align-items-center p-4">
                      <Skeleton width={250} height={300}/>
                    </Col>
                    <Col sm={9} className="pt-4">
                      <p>
                        <Skeleton width={500} height={20}/>
                      </p>
                      <p className="mt-3">
                        <Skeleton width={500} height={20}/>
                      </p>
                      <p>
                        <Skeleton width={500} height={20}/>
                      </p>
                      <p>
                        <Skeleton width={500} height={20}/>
                      </p>
                      <p>
                        <Skeleton width={500} height={140}/>
                      </p>
                    </Col>
              </Row>
            </>
         
        }
     </>
  )
}

export default LoadingSkeleton;
