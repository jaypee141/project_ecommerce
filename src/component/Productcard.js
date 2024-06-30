import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Productcard.css"; // Ensure the CSS file is correctly imported

function Productcard() {
    const [data, setData] = useState([]);
    const [clickedProduct, setClickedProduct] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                let response = await axios.get("https://fakestoreapi.com/products");
                setData(response.data);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };
        getData();
    }, []);

    function handleClick(product) {
        setClickedProduct(product);
    }

    return (
        <div className="product-detail-container">
            {clickedProduct && (
                <div className="product-details">
                    <div className="image1">
                        <img src={clickedProduct.image} alt={clickedProduct.title} />
                    </div>
                    <div className="written">
                        <h3>{clickedProduct.title}</h3>
                        <div className="dis">
                            {/* <h3 className="span">Specification:</h3> */}
                            <p>{clickedProduct.description}</p>
                        </div>
                        <div className="last">
                        <h4>Cost: Rs {clickedProduct.price}</h4>
                        <button onClick={()=>{
                                alert("Success! the item has been purchased.");
                                setClickedProduct(null)}}>Buy now</button>
                        </div>
                    </div>
                </div>
            )}
            <div className={`product-card-container ${clickedProduct ? 'half' : 'full'}`}>
                {data.map((product) => (
                    <div className="container" key={product.id} onClick={() => handleClick(product)}>
                        <div className="image">
                            <img src={product.image} alt={product.title} />
                        </div>
                        <div className="written">
                            <p>{product.title}</p>
                            <h4>Cost: Rs {product.price}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Productcard;
