import React from "react"
import 'bootstrap/dist/css/bootstrap.css';

const divStyle = {
  color: 'black',
};



const Footer = (): JSX.Element => <footer color="stylish-color-dark" className="page-footer font-small blue pt-4">
  
    <div className="container-fluid text-center text-md-left">
        <div className="row"style={divStyle}>
            <div className="col-md-6 mt-md-0 mt-3">
                <h6 className="text-uppercase">Records-dx.com</h6>
                <p>El mundo del radioaficionado.</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Link 1</a></li>
                    <li><a href="#!">Link 2</a></li>
                    <li><a href="#!">Link 3</a></li>
                    <li><a href="#!">Link 4</a></li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Link 1</a></li>
                    <li><a href="#!">Link 2</a></li>
                    <li><a href="#!">Link 3</a></li>
                    <li><a href="#!">Link 4</a></li>
                </ul>
            </div>
        </div>
    </div>

    <div className="El sitio de los radioaficionados">© 2022 Copyright:
        <a href="https://records-dx.com/"> Records-dx.com</a>
    </div>

</footer>

export default Footer