import React, { Component } from 'react'
import { storeProducts, detailProduct } from './data'

const { Consumer, Provider } = React.createContext()

class ProductDb extends Component {
  state = {
    products: storeProducts,
    detailProduct: detailProduct,
  }
  handleDetail = () => {
      console.log('hello from detail');
  }

  addToCart = () => {
      console.log('hello from add to cart');
  }

  render() {
    return (
      <Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
        }}
      >
        {this.props.children}
      </Provider>
    )
  }
}

ProductDb.Consumer = Consumer
ProductDb.Provider = ProductDb

export default ProductDb
