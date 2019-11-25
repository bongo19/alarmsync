import React, { Component } from 'react'
import styled from 'styled-components'

export default class Product extends Component {
    render() {
        return (
            <div>
                <h3>hello from product</h3>
            </div>
        //   <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3">
        //     <div className="card">
        //       <div className="img-container"></div>
        //       <div className="product-description-container">
        //         <button className="cart-btn"></button>
        //       </div>
        //     </div>
        //   </ProductWrapper>
        )
    }
}

// const ProductWrapper = styled.div`
//   .card {
//     box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
//     transition: 0.3s;
//     border-radius: 5px; /* 5px rounded corners */
//   }

//   img {
//     border-radius: 5px 5px 0 0;
//   }
// `