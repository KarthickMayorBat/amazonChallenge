import React from 'react'
import "./Home.css"
import Product from "./Product"
function Home() {
    return (
        <div className='Home'>
            <div className='home_container'>
                <img className="home_image" src="https://cdn.mos.cms.futurecdn.net/PCe3bfpJQP9MtoEirMR87P.png" alt=""></img>
            </div>
            <div className='home_row'>
                <Product 
                id="4903850"
                title="The lean startup" 
                price={23.99}
                image="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1629999184i/10127019._UY630_SR1200,630_.jpg"
                rating={5}  
                />
                <Product 
                id="23445930"
                title="Redmi Note 10" 
                price={698.99}
                image="https://www.pakmobizone.pk/wp-content/uploads/2021/03/Xiaomi-Redmi-Note-10-Pro-Glacier-Blue-2.jpg"
                rating={5}  
                />
               
                {/* product */}
                {/* product */}

            </div>
            <div className='home_row'>
                <Product 
                    id="4903850"
                    title="The lean startup" 
                    price={23.99}
                    image="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1629999184i/10127019._UY630_SR1200,630_.jpg"
                    rating={5}  
                />
                <Product 
                id="23445930"
                title="Redmi Note 10" 
                price={698.99}
                image="https://www.pakmobizone.pk/wp-content/uploads/2021/03/Xiaomi-Redmi-Note-10-Pro-Glacier-Blue-2.jpg"
                rating={5}  
                />
                
                <Product 
                id="797869876"
                title="Redmi Note 10 Pro" 
                price={798.99}
                image="https://www.pakmobizone.pk/wp-content/uploads/2021/03/Xiaomi-Redmi-Note-10-Pro-Glacier-Blue-2.jpg"
                rating={5}  
                />
                
                {/* product */}
                {/* product */}
                {/* product */}

            </div>
            <div className='home_row'>
            <Product 
                id="4903850"
                title="The lean startup" 
                price={23.99}
                image="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1629999184i/10127019._UY630_SR1200,630_.jpg"
                rating={5}  
                />
                {/* product */}
            </div>
            
        </div>
    )
}

export default Home
