import React, { Component } from 'react'
export default class Cart extends Component {


  renderGioHang = () => {
    const { gioHang, xoaGioHang,tangGiamSoLuong } = this.props;
    return gioHang.map((cartSP, index) => {
      return (<tr key={index}>
        <td>{cartSP.maSP}</td>
        <td><img src={cartSP.hinhAnh} width={50} height={50}></img></td>
        <td>{cartSP.tenSP}</td>
        <td>
          <button className='btn btn-primary' onClick={()=>{
            tangGiamSoLuong(cartSP.maSP,true)
          }}>+</button>
          {cartSP.soLuong}
          <button className='btn btn-primary' onClick={()=>{
            tangGiamSoLuong(cartSP.maSP,false)
          }}>-</button>
        </td>
        <td>{cartSP.giaBan.toLocaleString()}</td>
        <td>{(cartSP.soLuong * cartSP.giaBan).toLocaleString()}</td>
        <td><button className='btn btn-danger' onClick={() => {
          xoaGioHang(cartSP)
        }}>Xóa</button></td>
      </tr>)
    })
  }



  render() {
    return (
      <div>
        {/* Modal Body */}
        <div className="modal fade" id="modalId" tabIndex={-1} data-bs-backdrop="static" data-bs-keyboard="false" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
          <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-xl" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="modalTitleId">Giỏ hàng</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body">
                <table className='table'>
                  <thead>
                    <tr className='border-0'>
                      <th>Mã sản phẩm</th>
                      <th>Hình ảnh</th>
                      <th>Tên sản phẩm</th>
                      <th>Số lượng</th>
                      <th>Giá bán</th>
                      <th>Thành tiền</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.renderGioHang()}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan='4'></td>
                      <th>Tổng tiền</th>
                      <td>
                        {this.props.gioHang.reduce((tongTien,arrGioHang,index)=>{
                          return tongTien += arrGioHang.soLuong * arrGioHang.giaBan
                        },0).toLocaleString()}
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* Optional: Place to the bottom of scripts */}
      </div>

    )
  }
}

