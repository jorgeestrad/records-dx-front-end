import React,{ useState, useEffect } from 'react';
import '../public/styles/styleLogIn.css'
import { useNavigate } from 'react-router-dom';
import {URL_SERVICES_SUBSCRIBER} from '../config_env/env';
import DataTable, { TableColumn, createTheme } from 'react-data-table-component';
import {customTableStyles} from '../public/styleTables'
import { useFetch } from '../fetch/useFetch';
import {Subscriber} from '../models/subscriber'


interface DataRow {
    id : number;
    firstname: string;
    lastname: string;
    addres: string;
}


const Directory = () => {
   const navigate = useNavigate();
   const {data, loading, error,handleCancelRequest} = useFetch(URL_SERVICES_SUBSCRIBER + 'GetListSubscribers');
   const datar = JSON.stringify(data);
    function handleButtonClick(): void {
       alert('Hola viejo mundo!');
    }

    const dataf = [
        {
            id: 1,
            firstname: 'Beetlejuice',
            lastname: '1988',
            addres: "yuyuyu"
        },
        {
            id: 2,
            firstname: 'Beetlejuice de ',
            lastname: '1988',
            addres: "eferr ere"
        },
    ]

       
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
            name: 'addres',
            selector: row => row.addres,
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
        <div>
            <ul>
                {error && <li>Error: {error.message}</li>}
                {loading && <li>Cargando ...</li>}
            </ul>
        </div>
        <div className='row'>
            <div className='col-md-10 offset-md-1'>
                <DataTable
                    title="Directorio de Subscriptores"
                    columns={columns}
                    data= {dataf}
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

