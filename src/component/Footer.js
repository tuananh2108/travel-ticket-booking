import React from 'react';
import css from './styles.module.css';

function Footer() {
    return (
        <div className={css.footer}>
            <div className={css.footer_content}>
                <div className={css.footer_inviting}>
                    <div className={css.footer_inviting2}>
                        <p>Nếu bạn muốn nhận những thông tin về khuyến mãi xin hãy cung cấp cho chúng tôi email của bạn.</p>
                    </div>
                </div>

                <div className={css.email}>
                    <input className={css.input} placeholder='Nhập Email của bạn'></input>
                    <button className={css.submit}>Xác nhận</button>
                </div>
                <div className={css.author}>
                    <p>Dmac Travelling  |  Duy Khanh | Duy Mac | Tuan Anh</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
