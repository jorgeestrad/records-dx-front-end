import React,{ useState, useEffect } from 'react';
import '../public/styles/styleLogIn.css'
import { useNavigate } from 'react-router-dom';
import {URL_SERVICES_SUBSCRIBER} from '../config_env/env';
import DataTable, { TableColumn, createTheme } from 'react-data-table-component';
import {customTableStyles} from '../public/styleTables'
import { useFetch,getToken } from '../fetch/useFetch';
import {Subscriber} from '../models/subscriber'
import {URL_SERVICES_AUTHORIZE} from '../config_env/env';


interface DataRow {
    id : number;
    firstname: string;
    lastname: string;
    countryId: number;
}


const Directory = () => {
   const navigate = useNavigate();
   const [data, setData] = useState(null);
   const [error, setError] = useState(new Error());

//    const {token, loadingt, errort} = getToken('jorgestradacorrea@gmail.com','misojos1037');
//    alert(token);




// var jsonData = {
//     "email"     : 'jorgestradacorrea@gmail.com',
//     "password"  : 'misojos1037',
//  }
//  const abortController = new AbortController();
//  const requestOptions = {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(jsonData)
//  };

//  fetch(URL_SERVICES_AUTHORIZE,requestOptions)
//  .then((response) =>{
//     if (response.status !== 200) {
//       throw new Error(response.statusText);
//     }
//     console.log('Token:' + response.json());
//     alert ('Ok');
//   })
//   .then((data) => alert(data))
//   .catch((error) => {
//     alert(error);
//   })
//  .finally();




//    const {data, loading, error} = useFetch(URL_SERVICES_SUBSCRIBER + 'GetListSubscribersSinToken');




fetch(URL_SERVICES_SUBSCRIBER + 'GetListSubscribersSinToken')
.then((response) => response.json())
.then((data) => setData(data))
.catch((error) => {setError(error)})
.finally(() => {})


    
   const datar = JSON.stringify(data);
   const arr = JSON.parse(datar);
   
   function handleButtonClick(): void {
       alert('Hola viejo mundo!');
    }

    // const dataf = [
    //     {
    //         id: 1,
    //         firstname: 'Beetlejuice',
    //         lastname: '1988',
    //         addres: "yuyuyu"
    //     },
    //     {
    //         id: 2,
    //         firstname: 'Beetlejuice de ',
    //         lastname: '1988',
    //         addres: "eferr ere"
    //     },
    // ]

       
    const columns : TableColumn<DataRow>[] =  [
        {
            name: 'id',
            width: '200px',
            selector: row => row.id,
        },
        {
            name: 'firstname',
            selector: row => row.firstname,
        },
        {
            name: 'lastname',
            selector: row => row.lastname,
        },
        {
            name: 'countryId',
            selector: row => row.countryId,
        },
        {
		    cell: () => <button onClick={handleButtonClick}>Action</button>,
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
        }
    ];
     
  return(
    <div >
        <br></br>
        {/* <div>
            <ul>
                {error && <li>Error: {error.message}</li>}
                {loading && <li>Cargando ...</li>} 
            </ul>
        </div> */}
        <div className='row'>
            <div className='col-md-10 offset-md-1'>
                <DataTable
                    title="Directorio de Subscriptores"
                    columns={columns}
                    data= {arr}
                    selectableRows
                    pagination 
                    customStyles={customTableStyles}
                    dense
                    highlightOnHover
                    pointerOnHover
                    responsive
            />
            </div>
        </div>
        
    </div>
  );
}

export default Directory;

