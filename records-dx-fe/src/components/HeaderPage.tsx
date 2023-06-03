import React from 'react';
import { Col, Row } from 'react-bootstrap';
import styles from '../public/styles/styles.module.css'; 

export interface IBannerProps {banner: string;}


const  HeaderPage:  React.FunctionComponent<IBannerProps> = (props) => {
  return <div>
    <div className='row' >
      <div className="col-md-12">
          <div className={styles.divBanner}>
            <img src={props.banner} alt="Records-dx.com" ></img>
          </div>
      </div>
    </div>
  </div>
}

export default HeaderPage;