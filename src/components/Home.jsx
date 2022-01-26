import React from 'react';
import Nav from './Nav.jsx';

export default function Home({onSearch,onClose,cities}){
    return(
        <div>
            <Nav onSearch={onSearch}/>
        </div>
    )
}