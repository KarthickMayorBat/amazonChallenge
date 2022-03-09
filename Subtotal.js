import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from 'react-currency-format'
import { SportsBasketball } from '@mui/icons-material'
import { useStateValue } from './StateProvider';
import {getBasketTotal} from './reducer';

function Subtotal() {
    const [{ basket }, dispatch] = useStateValue();
 
    //selector
    const getBasketTotal = (basket) =>
    basket.reduce((amount, item) => item.price + amount, 0)


    return (
        <div className='subtotal'>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                    <p>
                        subtotal ( {basket.length} items): 
                        <strong>{value}</strong>
                    </p>
                        <small className='subtotal_gift'>
                            <input type="checkbox"/>This order
                            contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button>Proceed to Checkout</button>
        </div> 
    
    )}

export default Subtotal
