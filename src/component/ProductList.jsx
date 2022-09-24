import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class ProductList extends Component {
    render() {
        const { data,xemChiTiet,themGioHang,xoaGioHang } = this.props
        return (
            <div className="row">
                {data.map((item, index) => {
                    return (
                        <div className="col-4" key={index}>
                            <ProductItem item={item} xemChiTiet={xemChiTiet} themGioHang={themGioHang} xoaGioHang={xoaGioHang}/>
                        </div>
                    )
                })}
            </div>
        )
    }
}

