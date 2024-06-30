import React from "react";

import style from "./Product.css";
import Productcard from "./Productcard";

function Product(){

    return (
        <div>
            <nav>
                <div><img src="https://static.vecteezy.com/system/resources/previews/012/986/755/non_2x/abstract-circle-logo-icon-free-png.png" alt="logo" /></div>
                <div>
                    <ul>
                        <li>Login</li>
                        <li>Sign Up</li>
                    </ul>
                </div>
            </nav>
            <div className="hero-image">
                {/* <h1>The Website for E-Commerce</h1> */}
            {/* <img src="https://dataoptin.com/wp-content/uploads/2021/05/AdobeStock_223290240-1-scaled.jpeg" alt="pic" /> */}
            </div>
                <Productcard />
                <footer>
      <p>&copy; 2024 @jaypee_kushwaha. All rights reserved.</p>
    </footer>
  
        </div>
        
    )
}
export default Product;