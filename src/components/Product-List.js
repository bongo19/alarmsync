import React, { Component } from 'react'
import { Columns, Container } from 'react-bulma-components'
import {Product} from './Product'
import { storeProducts } from '../assets/data'
import { ProductDb } from '../assets/context'

export default class ProductList extends Component {
    state = {
        products: storeProducts
    }
    render() {
        return (
            <React.Fragment>
                <Container>
                    <Columns>
                        <Columns.Column size="one-third">
                            <ProductDb.Consumer>
                                {value => {
                                    return value.products.map(product => {
                                        return <Product key={product.id} product={product} />;
                                    })
                                }}
                            </ProductDb.Consumer>
                        </Columns.Column>
                        <Columns.Column size="one-third" ></Columns.Column>
                        <Columns.Column size="one-third" ></Columns.Column>
                    </Columns>
                </Container>
            </React.Fragment>
        )
    }
}
