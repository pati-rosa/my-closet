import React from 'react';
import { useNavigate } from 'react-router-dom';
import { itemStyle, navbarStyle } from './style';


const Navbar = () => {
    const navigate = useNavigate()

    const handleNavigation = (path: string) => {
        navigate(path); 
    };

    return (
        <div style={navbarStyle}>
            <div style={itemStyle()} onClick={() => handleNavigation('/')}>
                Adicionar roupas
            </div>
            <div style={itemStyle()} onClick={() => handleNavigation('/create-looks')}>
               Criar looks
            </div>
            <div style={itemStyle(false)} onClick={() => handleNavigation('/combine-clothes')}>
                Combinar cores
            </div>
        </div>
    );
  };

  export default Navbar