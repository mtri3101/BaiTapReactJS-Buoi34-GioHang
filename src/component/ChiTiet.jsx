import React, { Component } from 'react'

export default class ChiTiet extends Component {
    render() {
        const {chiTietSP} = this.props
        return (
            <div className="row mt-4 d-none"  id='xemChiTiet'>
                <div className="col-4">
                    <img src={chiTietSP.hinhAnh} alt="" className='w-100' />
                </div>
                <div className="col-8">
                    <h3 className='text-center mb-3'>Thông số kỹ thuật</h3>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Màn hình</th>
                                <td>{chiTietSP.manHinh}</td>
                            </tr>
                            <tr>
                                <th>Hệ điều hành</th>
                                <td>{chiTietSP.heDieuHanh}</td>
                            </tr>
                            <tr>
                                <th>Cam trước</th>
                                <td>{chiTietSP.cameraTruoc}</td>
                            </tr>
                            <tr>
                                <th>Cam sau</th>
                                <td>{chiTietSP.cameraSau}</td>
                            </tr>
                            <tr>
                                <th>Ram</th>
                                <td>{chiTietSP.ram}</td>
                            </tr>
                            <tr>
                                <th>Rom</th>
                                <td>{chiTietSP.rom}</td>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        )
    }
}
