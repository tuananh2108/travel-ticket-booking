import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './styles.module.css';

function Navbar() {
    // const [bar, setBar] = useState(0);
    return (
        <div className={css.navbar}>
            <div className={css.button_list}>
                <p className={css.button_content}>
                    <NavLink to='/'> TRANG CHỦ</NavLink>
                </p>
            </div>
            <div className={css.button_list}>
                <p className={css.button_content}><NavLink to="/hotel">KHÁCH SẠN</NavLink></p>
            </div>
            <div className={css.button_list}>
                <p className={css.button_content}><NavLink to="/culinary">ẨM THỰC</NavLink></p>
            </div>
            <div className={css.button_list}>
                <p className={css.button_content}><NavLink to="/about">GIỚI THIỆU</NavLink></p>
            </div>
            <div className={css.button_list}>
                <p className={css.button_content}><NavLink to="/tour">ĐẶT TOUR</NavLink></p>
            </div>
        </div>
    )
}

export default Navbar
