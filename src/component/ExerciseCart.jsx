import React, { Component } from 'react'
import Cart from './Cart'
import ChiTiet from './ChiTiet'
import ProductList from './ProductList'


const data = [
    { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" },
    { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/meizuphone.jpg" },
    { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/applephone.jpg" }
]


export default class ExerciseCart extends Component {
    state = {
        chiTietSP: { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" },
        gioHang: [],


    }

    xemChiTiet = async (itemClick) => {

        //setState
        await this.setState({
            chiTietSP: itemClick
        })
        document.querySelector('#xemChiTiet').classList.remove('d-none')
    }

    themGioHang = (itemClick) => {
        let spGioHang = {
            "maSP": itemClick.maSP,
            "tenSP": itemClick.tenSP,
            "giaBan": itemClick.giaBan,
            "hinhAnh": itemClick.hinhAnh,
            "soLuong": 1,
        }
        let gioHangCapNhat = [...this.state.gioHang]
        let index = gioHangCapNhat.findIndex(sp => sp.maSP === spGioHang.maSP)
        if (index !== -1) {
            gioHangCapNhat[index].soLuong += 1
        } else {
            gioHangCapNhat.push(spGioHang)
        }
        this.setState({
            gioHang: gioHangCapNhat,
        })

    }

    xoaGioHang = (itemClick) =>{
        let gioHangCapNhat = this.state.gioHang.filter(sp => sp.maSP !== itemClick.maSP)
        this.setState({
            gioHang: gioHangCapNhat
        })
    }


    tangGiamSoLuong = (maSP,tangGiam) => {
        let gioHangCapNhat = [...this.state.gioHang]
        let index = gioHangCapNhat.findIndex(sp => sp.maSP === maSP)
        if(tangGiam){
            gioHangCapNhat[index].soLuong += 1;
        }else{
            if(gioHangCapNhat[index].soLuong > 1){
                gioHangCapNhat[index].soLuong -= 1
            }
        }
        this.setState ({
            gioHang : gioHangCapNhat
        })
    }

    render() {

        let tongSoLuong = this.state.gioHang.reduce((tsl, gioHang, index) => {
            return tsl += gioHang.soLuong;
        }, 0)

        return (
            <div className='container' >
                <h2 className='text-success text-center'>Bài tập giỏ hàng</h2>
                {/* <p className='text-end text-danger'>  Giỏ hàng </p> */}
                <div className='text-end'>
                    <span className='text-danger fw-bold' data-bs-toggle="modal" data-bs-target="#modalId" style={{ cursor: 'pointer' }}>
                        Giỏ hàng ({tongSoLuong})
                    </span>
                </div>
                <Cart gioHang={this.state.gioHang} xoaGioHang={this.xoaGioHang} tangGiamSoLuong={this.tangGiamSoLuong}/>
                <ProductList data={data} xemChiTiet={this.xemChiTiet} themGioHang={this.themGioHang}  />
                <ChiTiet chiTietSP={this.state.chiTietSP} />
            </div>
        )
    }
}
