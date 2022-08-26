import React from "react";
import css from "./styles.module.css";

function Header() {
  return (
    <div className={css.header_container}>
      <div className={css.header}>
        <div className={css.header_background}>
          <div className={css.header_info}>
            <div className={css.image}>
              <img style={{ marginLeft: " 380px" }} src="image/logo.png" alt="" />
            </div>

            <div className={css.info}>
              <p>DMAC TRAVELLING</p>
              <p className={css.slogan}>SAVETY & HEALTHY</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
