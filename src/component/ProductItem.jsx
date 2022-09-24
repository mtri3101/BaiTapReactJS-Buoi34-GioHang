import React, { Component } from 'react'

export default class ProductItem extends Component {
    render() {
        const { item,xemChiTiet,themGioHang } = this.props
        return (
            <div className="card">
                <img src={item.hinhAnh} alt="" height={300} width={250} />
                <div className="card-body">
                    <h1 className='mb-2'>{item.tenSP}</h1>
                    <div>
                        <button className='btn btn-success me-2' onClick={()=>{
                            xemChiTiet(item)
                        }}>Xem chi tiết</button>
                        <button className='btn btn-danger' onClick={()=>{
                            themGioHang(item)
                        }}>Thêm giỏ hàng</button>
                    </div>
                </div>
            </div>
        )
    }
}
