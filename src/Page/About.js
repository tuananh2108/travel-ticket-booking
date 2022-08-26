import React, { Fragment } from 'react';

import '../App.css'

const About = () => {
    return (
        <Fragment>
            <div className='url_img'>
                <img className='aa' src='/image/logo.png' alt="" />
                <div className='img_text'>
                    <h3 style={{ marginLeft: '0' }}>Thương hiệu: DMAC TRAVELLING</h3>
                    <h3 style={{ marginLeft: '0' }}>Slogan: SAFETY & HEALTHY</h3>
                    <p>Năm thành lập: 2020</p>
                </div>
            </div>

            <div className=' text_text'> <h1 className='h1' style={{ width: '107px' }}>Đối tác</h1>
                <p> DMAC TRAVELLING tự hào khi là đối tác chiến lược của các tập đoàn lớn như K GROUP , QUANGHA GROUP,TRUONGDUY COMPANY...,
                    hiện tại DMAC TRAVELLING vẫn đã đang và sẽ tiến hành hợp tác với nhiều tổ chức lớn để hoàn thiện và nâng tầm dịch vụ của mình.
                </p>
            </div>

            <div className='text_2'>
                <h1 className='h11' style={{ width: '300px' }}>CÁC DẤU MỐC LỚN</h1>
                <p>| 2020 : Thành lập công ty</p>
                <p>|03-2021 : Đạt giải doanh nghiệp tiêu biểu</p>
                <p>|09-2021 : Hân hạnh là nơi đón tiếp tổng thống Nga</p>
                <p>|2022 : Trở thành 1 trong những công ty lớn nhất hành tinh</p>
            </div>
        </Fragment>
    )
}

export default About
