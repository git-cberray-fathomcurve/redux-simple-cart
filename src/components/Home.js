import React from 'react'

function Home (props){
        console.warn("Home: ",props.data)
        return(
        <div>
            <h3 className="bass-header">Bass Fishing Lures</h3>

            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://res.cloudinary.com/forallpromos/image/fetch/f_auto/https://www.4allpromos.com/sites/default/files/imagecache/720x720/images/products/677705/746-JK-9004_jk9004green.jpg" />
                </div>
                <div className="text-wrapper item">
                    <span>Promo Diving Minnow Lure </span>
                    <hr width="90" />
                    <span>Price: $4.38</span>
                </div>
                <div className="btn-add item">
                    <button onClick={()=>{props.addToCartHandler({
                        price: 4.38,
                        name: "Promo Diving Minnow Lure ",
                    })}}>
                        Add to Tackle Box</button>
                </div>
                <div className="btn-remove item">
                    <button onClick={()=>{props.removeToCartHandler()}}>
                        Remove from Tackle Box</button>
                </div>
            </div>
        </div>
    )
}

export default Home;