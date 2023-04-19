import React from "react"
import 'bootstrap/dist/css/bootstrap.css';
import { CDBBox, CDBBtn, CDBIcon } from "cdbreact";

const divStyle = {
  color: 'black',
};



const Footer = (): JSX.Element => <footer color="stylish-color-dark" className="page-footer font-small blue pt-4">

  <div className="container-fluid text-center text-md-left" >
    <div className="row">

      <div className="p-3 mb-2 bg-dark text-white">
        <div>
          <h6 className="text-uppercase">Records-dx.com</h6>
          <p>El mundo del radioaficionado.</p>
          <CDBBox display="flex" className="mt-4">
            <CDBBtn flat color="white">
              <CDBIcon fab icon="facebook-f" />
            </CDBBtn>
            <CDBBtn flat color="white" className="mx-3">
              <CDBIcon fab icon="twitter" />
            </CDBBtn>
            <CDBBtn flat color="white" className="p-2">
              <CDBIcon fab icon="instagram" />
            </CDBBtn>
          </CDBBox>



          <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase">Links</h5>
            <ul className="list-unstyled">
              <li><a href="#!">Link 1</a></li>
              <li><a href="#!">Link 2</a></li>
            </ul>
          </div>

          <div className="El sitio de los radioaficionados">© 2022 Copyright:
             <a href="https://records-dx.com/"> Records-dx.com</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>

export default Footer