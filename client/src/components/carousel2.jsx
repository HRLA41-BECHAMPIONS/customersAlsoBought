import React, { useEffect, useRef } from 'react';
import { SVGRight, SVGLeft } from './images/SVGs.jsx';
// import styleHelpers from './styleSheets/carousel2Styles.js';
import {
  rfkRw,
  rfkBtn,
  rfkDivul,
  rfkProducts,
  rfkRwHeader,
  rfkTable,
  rfkWrapper,
  rfkProduct,
  rfkPimage,
  rfkImage,
} from './styleSheets/carousel2Styles.js';

const Slidee2 = ({ images2 = [] }) => {
  const count = useRef(0);
  const nxtBtnDisabled = useRef(true);
  const prevBtnDisabled = useRef(false);
  const carouselSlide2 = () => document.querySelector('.rfkProducts');
  const carouselImages2 = () => document.querySelectorAll('.rfkProducts img');
  const size2 = () => document.querySelector('.rfkDivul').clientWidth;

  const toggleSVGsAccordingToPosition = () => {
    prevBtnDisabled.current = count.current === 0;
    nxtBtnDisabled.current = count.current >= Math.floor((carouselImages2().length - 1) / 3);
    if (prevBtnDisabled.current) {
      const btn = document.querySelector('.rfk_prev');
      btn.style.zIndex = 0;
    } // update look //skip when clicked
    if (nxtBtnDisabled.current) {
      const btn = document.querySelector('.rfk_nxt');
      btn.style.zIndex = 0;
    }// update look //skip when clicked
  };

  const update = () => images2.map((item) => item.imgurl).slice(0, 8);

  useEffect(() => {
    // toggleButtonsAccordingToPosition();
    toggleSVGsAccordingToPosition();
    carouselSlide2().addEventListener('transitionend', () => {
      console.log(count.current);
    });
  });

  const clicker2 = (direction) => {
    if (direction === 'next' && nxtBtnDisabled.current) return;
    if (direction === 'prev' && prevBtnDisabled.current) return;
    carouselSlide2().style.transition = 'transform 0.4s ease-in-out';
    if (direction === 'next') count.current += 1;
    if (direction === 'prev') count.current -= 1;
    carouselSlide2().style.transform = `translateX(${-size2() * count.current}px`;
    toggleSVGsAccordingToPosition();
  };

  return (
    <div className="rfk_rw horizontal rfk-rw" style={{ ...rfkRw }}>
      <div className="rfk_header" style={{ ...rfkRwHeader }}>
        <span>Customers Also Bought</span>
      </div>
      <div className="rfkTable" style={{ ...rfkTable }}>
        <div className="rfk_prev" style={{ ...rfkBtn }} id="prevBtn" onClick={() => clicker2('prev')}><SVGLeft /></div>
        <div className="rfkWrapper" style={{ ...rfkWrapper }}>
          <div className="rfkDivul" style={{ ...rfkDivul }}>
            <ul className="rfkProducts" style={{ ...rfkProducts }}>
              {
                update().map((item, i) => (<ListImage source={item} key={i} />))
              }
              <ListImage source="https://www-cdn.champion.com/catalog/product/H/N/HNS_GF89H586854/HNS_GF89H586854_GraniteHeather_Coed.jpg?quality=100&bg-color=255,255,255&fit=bounds&height=300&width=240&canvas=240:300&dpr=1" />
            </ul>
          </div>
        </div>
        <div className="rfk_nxt" style={{ ...rfkBtn }} id="nxtBtn" onClick={() => clicker2('next')}><SVGRight /></div>
      </div>
    </div>
  );
};

const ListImage = ({ source }) => (
  <li className="rfkProduct" style={{ ...rfkProduct }}>
    <a href="#">
      <div className="rfkPimage" style={{ ...rfkPimage }}>
        <img className="rfkImage" src={source} style={{ ...rfkImage }} alt="" />
      </div>
    </a>
  </li>
);


export default Slidee2;
