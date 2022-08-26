import '../App.css';
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';

import css from '../component/styles.module.css';
import { Card } from 'antd';

const Home = () => {
    return (
        <Fragment>
            <div className={css.container_video}>
                <ReactPlayer
                    url='https://www.youtube.com/watch?v=wssbBe_t-r4'
                    width="100%"
                    height="500px"
                    autoPlay={true}
                    playing={true}
                    controls={false}
                    loop={true}
                />
            </div>
            <div className={css.content_video}>
                <p>
                    Vịnh Hạ Long là 1 danh lam thắng cảnh của Việt Nam nói riêng và của cả thế giới nói chung. Đến với Vịnh Hạ Long, bạn sẽ được trải nghiệm sự hùng vĩ của thiên nhiên
                    núi non , sông nước , thưởng thức các đặc sản nổi tiếng mà không nơi nào có, bên cạnh đó còn rất nhiều các hoạt động thú vị đang chờ bạn.
                    <Link style={{ color: 'blue' }} to="/About"> DMAC TRAVELLING</Link> vô cùng hân hạnh khi được đồng hành với bạn trong những chuyến du lịch tuyệt vời. Chúc bạn có một kì nghỉ thật đáng nhớ !
                </p>
            </div>
    
            <h1 className='h6'>MỘT SỐ GÓI CỦA CHÚNG TÔI</h1>
            <div className='img'>
                <div className='img_item'>
                    <Card title="VIP" className={css.card_services} bordered={true}>
                        <p>Thời Gian: 20 ngày</p>
                        <p>Dịch vụ: khách sạn, làm đẹp,ẩm thực, các hoạt động vui chơi, có xe đưa đón, chương trình ca nhạc dành riêng cho khách</p>
                        <p>Giá: 20000000 VNĐ</p>
    
                    </Card>
    
                </div>
    
                <div className='img_item'>
                    <Card title="CAO CẤP" className={css.card_services} bordered={true}>
                        <p>Thời Gian: 15 ngày</p>
                        <p>Dịch vụ: khách sạn, làm đẹp,ẩm thực, các hoạt động vui chơi, có xe đưa đón</p>
                        <p>Giá: 15000000 VNĐ</p>
    
                    </Card>
    
                </div>
    
                <div className='img_item'>
                    <Card title="THƯỜNG" className={css.card_services} bordered={true}>
                        <p>Thời Gian: 7 ngày</p>
                        <p>Dịch vụ: khách sạn, làm đẹp,ẩm thực, các hoạt động vui chơi</p>
                        <p>Giá: 9000000 VNĐ</p>
                    </Card>
                </div>
            </div>
        </Fragment>
    )
}

export default React.memo(Home)
