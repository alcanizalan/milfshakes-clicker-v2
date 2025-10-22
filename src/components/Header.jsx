import './Header.css'
import React from 'react';
import iconoUsuario from '../../public/iconoUsuario.svg'

export default function Header (){
    return(
        <header className='headerAdvise'>
            <div className='divClean'></div>
            <div className='divMessageNotOfficial'>
                <p>NOT AN OFFICIAL M***SHAKES WEBPAGE</p>
            </div>
            
            <div className='divIconoProfile'>
                <img id='iconoProfile' src={iconoUsuario} alt="Icono de usuario" />
            </div>
        </header>
    )
}