import React from "react"
import 'bootstrap/dist/css/bootstrap.css';
import logo from '../img/logo.png';
import { CDBBox, CDBBtn, CDBIcon } from "cdbreact";


const Footer = (): JSX.Element => <footer color="stylish-color-dark" className="page-footer font-small blue pt-4">

  <div className="container-fluid text-center text-md-left" >
    <div className="row">
      <div className="p-3 mb-2 bg-dark text-white">
        <div>
          <CDBBox display="flex" flex="column" className="mx-auto py-1" style={{ width: '90%' }}>
            <CDBBox display="flex" justifyContent="between" className="flex-wrap">
              <CDBBox>
                <a href="/" className="d-flex align-items-center p-0 text-dark">
                  <img alt="logo" src={logo} width="200px" />
                  <span className="ms-3 h5 font-weight-bold">Records-dx.com</span>
                </a>
                <p className="my-3" style={{ width: '250px', color:"white" }}>
                  El lugar de encuentro de los radioaficionados
                </p>
                <CDBBox display="flex" className="mt-2" style={{ width: '100px' }}>
                  <CDBBtn flat color="dark">
                    <CDBIcon fab icon="facebook-f" />
                  </CDBBtn>
                  <CDBBtn flat color="dark" className="mx-3">
                    <CDBIcon fab icon="twitter" />
                  </CDBBtn>
                  <CDBBtn flat color="dark" className="p-2">
                    <CDBIcon fab icon="instagram" />
                  </CDBBtn>
                </CDBBox>
              </CDBBox>
              <CDBBox>
                <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0',width: '500px' }}>
                  <div className="col-md-4 mb-md-4 mb-4">
                    <ul className="list-unstyled">
                      <li><a href="#!">Contactos</a></li>
                      <li><a href="#!">Políticas de privacidad</a></li>
                     </ul>
                  </div>
                </CDBBox>
              </CDBBox>
            </CDBBox>
            <small className="text-center mt-5">&copy; Records-dx.com, 2023. Todos los derechos reservados.</small>
          </CDBBox>
        </div>
      </div>
    </div>
  </div>
</footer>

export default Footer