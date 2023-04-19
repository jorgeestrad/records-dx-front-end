import React from 'react';
import { Col, Row } from 'react-bootstrap';

export interface IBannerProps {banner: string;}


const  HeaderPage:  React.FunctionComponent<IBannerProps> = (props) => {
  return <div>
    <Row>
      <Col>
      </Col>
      <Col>
          <div className='banner'>
            <img src={props.banner} alt="Records-dx.com"></img>
          </div>
      </Col>
      <Col>
      </Col>
    </Row>
  </div>
}

export default HeaderPage;