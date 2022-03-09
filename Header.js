import React from 'react'
import './Header.css'
import SearchIcon from "@mui/icons-material/Search";
import {Link} from "react-router-dom";
import ShoppingBasket from '@mui/icons-material/ShoppingBasket';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
function Header() {
    const [{ basket, user }, dispatch] = useStateValue();
    const handleAuthentication = () => {
        if(user){
            auth.signOut();
        }
    }

    return (
        <div className='header'>
            <Link to="/" >
            <img className="header_logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"></img>
            </Link>
            
            <div className='header_search'> 
                <input className='header_searchInput' type="text" /*logo*/></input>
                <SearchIcon className="header_searchIcon"></SearchIcon>
                
            </div>
           
            <div className='header_nav'>
                <Link to={!user && '/login'}>
                <div onClick={handleAuthentication} className='header_option'>
                    <span className='header_optionLineOne'>hello,</span>
                    <span className='header_optionLineTwo'>{user ? 
                    'Sign Out': 'Sign In'}</span>
                </div>
                </Link>

                
                <div className='header_option'>
                    <span className='header_optionLineOne'>Returns</span>
                    <span className='header_optionLineTwo'>& orders</span>
                </div>
                
                <div className='header_option'>
                    <span className='header_optionLineOne'>Your</span>
                    <span className='header_optionLineTwo'>Prime</span>
                </div>
                <Link to="/checkout">
                <div className='header_optionBasket'>
                    
                        <ShoppingBasket/>
                        <span className='header_optionLineTwo header_basketCount'>
                            {basket.length}
                        </span>
                    
                    
                </div>
                </Link>
            </div>
        </div>
    )
}

export default Header