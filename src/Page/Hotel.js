import React, { Fragment } from 'react';

import css from '../component/styles.module.css';

function Hotel() {
   return (
      <Fragment>
            <div className={css.main}>
               <div className={css.main_content}>
                  <div className={css.productivity}>
                     <span className={css.productivity_sign}>|</span>
                     <p className={css.productivity_tittle}>Khách sạn</p>
                  </div>

                  <div className={css.productivity_content}>
                     <p>Chúng tôi tự hào khi là đối tác của các khách sạn lớn, chính vì thế dịch vụ của chúng tôi luôn đáp ứng tốt được các nhu cầu du khách ngay cả những người khó tính nhất</p>
                  </div>
                  <div className={css.study_content}>
                     <p style={{ marginLeft: "-247px" }}>Phòng Standard </p>
                  </div>
                  <div className={css.image_content}>
                     <img src='/image/standar.jpg' alt="" />
                  </div>
                  <div className={css.content}>
                     <p>Phòng standard có tên viết tắt là STD, đây được đánh giá là loại phòng tiêu chuẩn, thiết kế đơn giản và tối ưu nhất trong các phòng khách sạn hiện nay.
                        Đây là một loại phòng với diện tích khá nhỏ, thường được xây dựng ở các tầng thấp và không có view cao, đẹp.
                        Trang thiết bị của phòng này cũng được khách sạn đầu tư một cách tối giản đến mức tối thiểu. Chính vì vậy, giá phòng standard sẽ ở mức độ thấp nhất trong các loại phòng của khách sạn.</p>
                     <br></br><br></br>
                  </div>

                  <div className={css.study_content}>
                     <p style={{ marginLeft: "-247px" }}>Phòng Superior </p>
                  </div>
                  <div className={css.image_content}>
                     <img src='/image/superior.jpg' alt="" />
                  </div>
                  <div className={css.content}>
                     <p>Phòng superior là gì? Câu trả lời phòng superior viết tắt là SUP, đây là loại phòng cao cấp hơn phòng standard với diện tích và khoảng từ 20m2 trở lên.
                        Được thiết kế bao gồm 1 tới 2 giường, tầm nhìn view cũng thoáng đãng và đẹp mắt hơn. Trang thiết bị được khách sạn đầu tư cho căn phòng này khá hiện đại. Vì chất lượng phòng superior tốt hơn và view đẹp hơn nên kéo theo mức giá cho phòng superior cũng sẽ cao hơn.</p>
                     <br></br><br></br>
                  </div>

                  <div className={css.study_content}>
                     <p style={{ marginLeft: "-247px" }}>Phòng Superior </p>
                  </div>
                  <div className={css.image_content}>
                     <img src='/image/superior.jpg' alt="" />
                  </div>
                  <div className={css.content}>
                     <p>Phòng superior là gì? Câu trả lời phòng superior viết tắt là SUP, đây là loại phòng cao cấp hơn phòng standard với diện tích và khoảng từ 20m2 trở lên.
                        Được thiết kế bao gồm 1 tới 2 giường, tầm nhìn view cũng thoáng đãng và đẹp mắt hơn. Trang thiết bị được khách sạn đầu tư cho căn phòng này khá hiện đại. Vì chất lượng phòng superior tốt hơn và view đẹp hơn nên kéo theo mức giá cho phòng superior cũng sẽ cao hơn.</p>
                     <br></br><br></br>
                  </div>

                  <div className={css.study_content}>
                     <p style={{ marginLeft: "-247px" }}>Phòng Deluxe </p>
                  </div>
                  <div className={css.image_content}>
                     <img src='/image/deluxe.jpg' alt="" />
                  </div>
                  <div className={css.content}>
                     <p>Phòng deluxe là gì? Phòng deluxe với tên viết tắt là DLX, thường nằm  ở tầng trên cao với view rộng và đẹp (hướng nhìn ra phía núi, biển… ).
                        Diện tích của loại phòng này được đánh giá là khá rộng rãi hơn so với phòng superior và đồng thời cũng được đầu tư các trang thiết bị hết sức cao cấp hiện đại như tivi, tủ lạnh, bồn rửa mặt, phòng tắm kính cao cấp, bồn tắm hướng view đẹp…
                        Đương nhiên, mức giá niêm yết của phòng deluxe sẽ ở mức cao hơn.</p>
                     <br></br><br></br>
                  </div>

                  <div className={css.study_content}>
                     <p style={{ marginLeft: "-204px" }}>Phòng Junior Suite</p>
                  </div>
                  <div className={css.image_content}>
                     <img src='/image/juniorsuite.jpg' alt="" />
                  </div>
                  <div className={css.content}>
                     <p>Phòng junior suite với diện tích khoảng 60-70m2 được thiết kế nhìn ra view đẹp hướng núi, hướng biển và hướng toàn cảnh của thành phố.
                        Phòng có khu vực ban công riêng với ghế tắm nắng, bồn tắm sang chảnh jacuzzi, sofa, bàn làm việc, hay khu vực bar riêng biệt…</p>
                     <br></br><br></br>
                  </div>

                  <div className={css.study_content}>
                     <p style={{ marginLeft: "-149px" }}>Phòng Executive Suite</p>
                  </div>
                  <div className={css.image_content}>
                     <img src='/image/excutesuite.jpg' alt="" />
                  </div>
                  <div className={css.content}>
                     <p>Đây là phòng thuộc dòng cao cấp nhất ở các loại phòng trong khách sạn có với diện tích có thể lên đến 80m2. Phòng được trang bị đầy đủ cả từ bồn tắm đứng và bồn tắm nằm, bàn làm việc thuộc cỡ lớn, điện thoại kết nối quốc tế, hồ bơi bên ngoài trời, phòng khách cũng như khu vực bếp riêng biệt…</p>
                     <br></br><br></br>
                  </div>

                  <div className={css.study_content}>
                     <p style={{ marginLeft: "-149px" }}>Một số loại phòng khác</p>
                  </div>
                  <div className={css.image_content}>
                     <img src='/image/excutesuite.jpg' alt="" />
                  </div>
                  <div className={css.content}>
                     <p>Ngoài ra, các loại phòng trong khách sạn còn được chia theo các loại giường ngủ như

                        Single bed room: phòng thiết kế có 1 giường cho 1 người ngủ
                        Twin bed room: phòng thiết kế có 2 giường cho 2 người ngủ
                        Phòng Double - Double bed room: phòng thiết kế có 1 giường lớn đủ cho  2 người ngủ
                        Phòng Triple - Triple bed room: phòng có 3 giường nhỏ hoặc 1 giường lớn và 1 giường nhỏ đủ được cho 3 người ngủ.</p>
                     <br></br><br></br>
                  </div>
               </div>
         </div>
      </Fragment>
   )
}

export default Hotel
