import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import css from '../component/styles.module.css';

function Culinary() {
   return (
      <Fragment>
         <div className={css.main}>
            <div className={css.main_content}>
               <div className={css.productivity}>
                  <span className={css.productivity_sign}>|</span>
                  <p className={css.productivity_tittle}>Ẩm thực</p>
               </div>

               <div className={css.productivity_content}>
                  <p>Hạ Long không chỉ nổi tiếng bởi cảnh đẹp mà còn bởi vì những món ăn vô cùng đặc sắc mà chỉ có thể đến đây bạn mới có thể thưởng thức được.</p>
                  <br />
                  <p>Trong phần này<Link style={{ color: 'blue' }} to="/About"> DMAC TRAVELLING</Link> xin phép được giới thiệu tới các bạn 8 món ăn "đặc sản" của Hạ Long mà khi đến bạn nên thưởng thức.</p>
               </div>
               <div className={css.study_content}>
                  <p style={{ marginLeft: '-168px' }}>1. Xôi Trắng Chả Mực</p>
               </div>
               <div className={css.image_content}>
                  <img src='/image/chamuc.webp' alt="" />
               </div>
               <div className={css.content}>
                  <p>Đứng đầu danh sách món ngon Hạ Long chính là xôi trắng chả mực. Chả mực là cái tên không quá xa lạ với người yêu ẩm thực; tuy nhiên, mực Hạ Long sừng sực và ngọt thịt hơn hẳn những vùng khác. Chả mực ở đây ngon xuất sắc là do vậy. Xôi nấu từ gạo nếp dẻo ngậy cùng mực nướng vàng ươm, ăn cùng với nước mắm và tương ớt siêu  ngon.</p>
                  <br />
               </div>

               <div className={css.study_content}>
                  <p style={{ marginLeft: '-168px' }}>2. Bánh Cuốn Chả Mực</p>
               </div>
               <div className={css.image_content}>
                  <img src='/image/banhcuon.webp' alt="" />
               </div>
               <div className={css.content}>
                  <p>Xuất hiện trong thực đơn quen thuộc ở mọi vùng miền, bánh cuốn chả mực Hạ Long mang theo dấu ấn đặc trưng nhờ vào phần chả mực ăn kèm đặc sắc. Nhân bánh cuốn gồm thịt, nấm, hành xay nhuyễn và trộn lẫn với nhau, ăn cùng chả mực chấm nước mắm thì chẳng gì có thể sánh nổi đâu.</p>
                  <br />
               </div>

               <div className={css.study_content}>
                  <p style={{ marginLeft: '-344px' }}>3. Ngán</p>
               </div>
               <div className={css.image_content}>
                  <img src='/image/ngan.webp' alt="" />
               </div>
               <div className={css.content}>
                  <p >Đối với một số bạn có lẽ đây là lần đầu nghe đến tên con ngán. Ngán có hình dáng giống như ngao nhưng to hơn, là loại đặc sản ngon hiếm của vùng đất Quảng Ninh. Cách chế biến con ngán cũng tương tự như nhiều loại hải sản tươi sống khác, có thể nướng, hấp, nấu súp, xào với mì hoặc rau ăn cùng nước chấm rất ngon miệng. Ngán còn được dùng để ngâm rượu. Rượu ngán cũng có được dùng để làm rượu vang với hương biển độc đáo. Tên Ngán mà ăn hoài không chán nè!</p>
                  <br />
               </div>

               <div className={css.study_content}>
                  <p style={{ marginLeft: '-142px' }}>4. Sá Sùng (Hay Địa Sâm)</p>
               </div>
               <div className={css.image_content}>
                  <img src='/image/sasung.webp' alt="" />
               </div>
               <div className={css.content}>
                  <p >Nhắc đến đặc sản Hạ Long thì bạn không thề nào bỏ qua sá sùng hay còn gọi là địa sâm. Đây là một loại giun cát chỉ có ở vùng biển Hạ Long. Sá sùng xào tỏi làm dậy mùi thơm đậm đà, ăn rất "bắt" cơm. Bạn nhất định phải thử món này khi đi du lịch Hạ Long đấy. Ngoài ra, sá sùng nướng nhâm nhi cùng bia lạnh cũng là món khoái khẩu của người dân địa phương.</p>
                  <br />
               </div>

               <div className={css.study_content}>
                  <p style={{ marginLeft: '-292px' }}>5. Sam Biển</p>
               </div>
               <div className={css.image_content}>
                  <img src='/image/sam.webp' alt="" />
               </div>
               <div className={css.content}>
                  <p >Nếu bạn vẫn đang tự hỏi "du lịch Hạ Long nên ăn gì?" thì Sam Biển là gợi ý tiếp theo. Sam Biển có thịt thơm, độ ngọt và dai vừa phải, là "gương mặt thân quen" tại hầu hết các quán ăn ngon ở Hạ Long. Sam được chế biến thành nhiều món như: riêu sam, chả sam, trứng sam, nộm sam. Không quá lời nếu nói rằng đây là món đặc sản Hạ Long phải ăn thử ít nhất một lần trong đời. </p>
                  <br />
               </div>

               <div className={css.study_content}>
                  <p style={{ marginLeft: '-292px' }}>6. Bún Bề Bề</p>
               </div>
               <div className={css.image_content}>
                  <img src='/image/bebej.webp' alt="" />
               </div>
               <div className={css.content}>
                  <p >Bún Bề Bề là món ngon Hạ Long mà bạn phải thưởng thức khi đến đây vào mùa thu hoặc mùa đông. Bề bề (hay tôm tích) được chế biến sạch, bóc vỏ nấu cùng nước bún lèo ngọt; thêm vài miếng đậu hũ chiên, tôm, chả mực tạo nên hương vị đậm đà khó quên.</p>
                  <br />
               </div>

               <div className={css.study_content}>
                  <p style={{ marginLeft: '-147px' }}>7. Tiết Hầm Lá Ngải Cứu</p>
               </div>
               <div className={css.image_content}>
                  <img src='/image/tiet.webp' alt="" />
               </div>
               <div className={css.content}>
                  <p >Thêm một món ngon Hạ Long siêu lạ mà bạn phải thử nữa đó là tiết hầm lá ngải cứu. Vị nồng ngai ngái của lá ngải cứu thấm đều lên miếng tiết được cắt vuông vức, tạo nên hương vị khó quên. Một số nơi thay tiết bằng trứng vịt lộn, khi ăn chấm kèm tương ớt pha súp và chanh rất tốt cho sức khỏe. Đây còn là bài thuốc Đông Y, có tác dụng điều hòa khí huyết và trị chứng đau đầu. Món này tương đối giàu đạm nên bạn chú ý đừng ăn nhiều quá nhé! .</p>
                  <br />
               </div>

               <div className={css.study_content}>
                  <p style={{ marginLeft: '-168px' }}>8. Bánh Trôi Tàu Nóng</p>
               </div>
               <div className={css.image_content}>
                  <img src='/image/banhtroi.webp' alt="" />
               </div>
               <div className={css.content}>
                  <p >Cái tên cuối cùng trong danh sách đặc sản Hạ Long chính là Bánh Trôi Tàu Nóng. Viên bánh trôi ở đây thường có nhân mè hay đậu xanh thơm dẹo, phối hợp hài hoà với nước gừng ngọt cay nồng. Mỗi khi trời lạnh mà có chén bánh trôi nóng lót dạ, ngắm nhìn phố xá tấp thị thì còn chi bằng. Đừng bỏ qua nghe!</p>
                  <br />
               </div>
            </div>
         </div>
      </Fragment>
   )
}

export default Culinary
