import React from 'react';
import MenuHorizontal from '../components/MenuHorizontal';
import HeaderPage from '../components/HeaderPage';
import banner from '../img/banner.png';
import Footer from '../components/Footer';
import styles from '../public/styles/styles.module.css'; 
import imgradio from '../img/imgradioafi.png'; 

export interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
    return (
        <div>
            <MenuHorizontal />
            <HeaderPage banner={banner}/>
            <br/>
          
            <div className='row'>
                    <div className='col-md-1'>
                    </div>
                    <div className='col-md-5'>
                       <img src={imgradio} alt="Radio de aficionado"  width={600}/>
                    </div>
                     <div className='col-md-5'>
                        <div className='row'>
                          <div className='col-md-12'>
                            <h3 className={styles.hTitle}>Quienes Somos?</h3>
                          </div>
                          <div className='col-md-12'>
                            <p className={styles.pHome}>RECORDS-DX es el sitio de encuentro para los radioaficionados. En este lugar nos damos cita para compartir todas nuestras experiencias, aprender sobre todos los temas relacionados, acceder y adquirir innumerables recursos, herramientas y suministros que nos permiten realizar  la práctica de este maravilloso hobby.</p>
                          </div>
                        </div>
                     </div>
                     <div className='col-md-1'>
                     
                     </div>
            </div>
            <br></br>
            <div className='row'>
            <div className='col-md-1'>
              </div>
                 <div className='col-md-10'>
                    <div className='row'>
                        <div className='col-md-12'>
                           <h3 className={styles.hTitle}>La Radio de Aficionado</h3>
                        </div>
                    <div className='col-md-12'>
                           <p className={styles.pHome}>La radio de aficionado es un hobby científico fascinante con muchas facetas.
                                    Al mismo tiempo es un servicio público, reconocido como servicio de radio y como tal, se le han asignado bandas específicas de frecuencia por la Unión Internacional de Telecomunicaciones, a cuyo organismo han incorporado Estados Unidos de America como potencia Signataria.</p>
                           </div>
                    </div>
                 </div>
            </div>
            <div className='col-md-1'>
            </div>
                   
            <Footer />
        </div>
    )
}

export default HomePage;