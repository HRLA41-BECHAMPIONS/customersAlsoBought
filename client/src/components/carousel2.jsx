import React, { useState, useEffect, useRef } from 'react';

import {SVGRight, SVGLeft} from './images/SVGs.jsx';

let Slidee2 = () => {

  const images = [
   'https://bechampions-assets.s3.us-east-2.amazonaws.com/images/Suggestions-Images/HNS_85653407Q88_GraniteHeather_Coed.jpg',
   'https://bechampions-assets.s3.us-east-2.amazonaws.com/images/Suggestions-Images/HNS_GF01586048_White_Coed.jpg',
   'https://bechampions-assets.s3.us-east-2.amazonaws.com/images/Suggestions-Images/HNS_GF68586833_White_Coed.jpg',
   'https://bechampions-assets.s3.us-east-2.amazonaws.com/images/Suggestions-Images/HNS_GF68Y06819_CollageBlue_Front.jpg',
   'https://bechampions-assets.s3.us-east-2.amazonaws.com/images/Suggestions-Images/HNS_GF70Y06145_VenetianPurple_Coed.jpg',
   'https://bechampions-assets.s3.us-east-2.amazonaws.com/images/Suggestions-Images/HNS_GF89H586854_GraniteHeather_Coed.jpg',
   'https://bechampions-assets.s3.us-east-2.amazonaws.com/images/Suggestions-Images/HNS_GT19Y06145_White_Front.jpg',
   'https://bechampions-assets.s3.us-east-2.amazonaws.com/images/Suggestions-Images/HNS_GT23HY08160_CourageousRed_Front.jpg',
  ]
  let count = useRef(0);
  let nxtBtnDisabled = useRef(true);
  let prevBtnDisabled = useRef(false);

  let carouselSlide = () => document.querySelector('.divIm');
  let carouselImages = () => document.querySelectorAll('.divIm img');
  let prevBtn = () => document.querySelector('#prevBtn');
  let nxtBtn = () => document.querySelector('#nxtBtn');
  let size = () => carouselImages()[0].clientWidth;

  let carouselSlide2 = () => document.querySelector('.rfk_products');
  let carouselImages2 = () => document.querySelectorAll('.rfk_products img');
  // let prevBtn = () => document.querySelector('#prevBtn');
  // let nxtBtn = () => document.querySelector('#nxtBtn');
  // let size2 = () => carouselImages2()[0].clientWidth;
  let size2 = () => document.querySelector('.rfk_divul').clientWidth;

  useEffect(() => {
    // toggleButtonsAccordingToPosition();
      toggleSVGsAccordingToPosition();
    carouselSlide2().addEventListener('transitionend', () => {
      console.log(count.current);
    })
  })

  const toggleSVGsAccordingToPosition = () => {
    prevBtnDisabled.current = count.current === 0;
    nxtBtnDisabled.current = count.current >= Math.floor((carouselImages2().length-1) / 3);
    if (prevBtnDisabled.current) {
      const btn = document.querySelector('.rfk_prev');
      btn.style.zIndex = 0;
    } //update look //skip when clicked
    if (nxtBtnDisabled.current) {
      const btn = document.querySelector('.rfk_nxt');
      btn.style.zIndex = 0;
    }//update look //skip when clicked
  }

  const toggleButtonsAccordingToPosition = () => {
    prevBtn().disabled = count.current === 0;
    nxtBtn().disabled = count.current >= Math.floor((carouselImages().length - 1));
  };

  const clicker = (direction) => {
    carouselSlide().style.transition = 'transform 0.4s ease-in-out';
    if (direction === 'next') count.current = count.current + 1;
    if (direction === 'prev') count.current = count.current - 1;
    carouselSlide().style.transform = 'translateX(' + (-size() * count.current * 2) + 'px';
    toggleButtonsAccordingToPosition();
    toggleSVGsAccordingToPosition();
  }

  const clicker2 = (direction) => {
    if (direction === 'next' && nxtBtnDisabled.current) return;
    if (direction === 'prev' && prevBtnDisabled.current) return;
    carouselSlide2().style.transition = 'transform 0.4s ease-in-out';
    if (direction === 'next') count.current = count.current + 1;
    if (direction === 'prev') count.current = count.current - 1;
    carouselSlide2().style.transform = 'translateX(' + (-size2() * count.current) + 'px';
    toggleSVGsAccordingToPosition();
  }

  const imgStyle = {
    width: "100px"
  };
  const divIm = {
    display: "flex",
    maxWidth: "200px",
    margin: "auto"
  }
  const btn = {
    margin: "20px",
  };
  const divver = {
    padding: "0px",
    margin: "0px",
    border: "2px solid black",
    boxSizing: "borderBox"
  };
  const imgContainer = {
    display: "flex",
    justifyContent: "left",
    flexDirection: "row",
    overflow: "hidden",
    maxWidth: "200px",
    padding: "0",
    border: "2px solid black",
    margin: "auto"
  }

  const rfkRw = {
    position: 'relative',
    clear: 'both',
    margin: 'auto',
    overflow: 'hidden',
    userSelect: 'none',
    backgroundColor: 'transparent',
    marginBottom: '10px',
    marginTop: '20px',
  }

  const rfk_rwHeader = {
    padding: '0 0 15px',
    color: '#202342',
    textAlign: 'center',
    lineHeight: '1',
    textTransform: 'uppercase',
    fontFamily: 'Knockout',
    fontSize: '40px',
    fontWeight: '300',
  };

  const rfk_table = {
    display: 'table',
    tableLayout: 'fixed',
    margin: 'auto',
    width: '100%',
  }

  const rfk_btn = {
    display: 'table-cell',
    cursor: 'pointer',
    backgroundRepeat: 'no-repeat',
    width: '24px',
    verticalAlign: 'middle',
    textAlign: 'left',
    fontSize: '24px',
    zIndex: '1',
    color: '#999',
    left: '20px',
  };

  const rfk_wrapper = {
    paddingTop: '0',
    verticalAlign: 'top',
    whiteSpace: 'nowrap',
    margin: 'auto',
  };

  const rfk_divul = {
    position: 'relative',
    overflow: 'hidden',
    margin: 'auto',
    width: 'auto',
    textAlign: 'center',
    maxHeight: '950px',
    width: '684px'
  };

  const rfk_products = {
    width: '2964px',
    marginLeft: '-500px',
    display: 'block',
  };

return (
  <div className={'rfk_rw horizontal rfk-rw'} style={{ ...rfkRw }}>

      <div className='rfk_header' style={{...rfk_rwHeader}}>
        <span>May We Suggest</span>
      </div>
      <div className='rfk_table' style={{...rfk_table}}>
        <div className='rfk_prev' style={{...rfk_btn}} id='prevBtn' onClick={() => clicker2('prev')}><SVGLeft /></div>
        <div className='rfk_wrapper'>
          <div className='rfk_divul' style={{...rfk_divul}}>
            <ul className='rfk_products' style={{...rfk_products}}>
              {images.map((item, i)=> {
                return (<ListImage source={item} key={i}/>)
              })}
              <ListImage source='https://www-cdn.champion.com/catalog/product/H/N/HNS_GF89H586854/HNS_GF89H586854_GraniteHeather_Coed.jpg?quality=100&bg-color=255,255,255&fit=bounds&height=300&width=240&canvas=240:300&dpr=1' />
            </ul>
          </div>
        </div>
        <div className='rfk_nxt' style={{ ...rfk_btn }} id='nxtBtn' onClick={() => clicker2('next')}><SVGRight /></div>
      </div>

     {/* <button style={{ ...btn }} id='prevBtn' onClick={() => clicker('prev')}>&lt;</button>
     <button style={{ ...btn }} id='nxtBtn' onClick={() => clicker('next')}>&gt;</button>

      <div className='imgContainer' style={{ ...imgContainer }}>
        <div style={{ ...divIm }} className='divIm'>
          {images.map((item, i) => {
            return (<CarouselImage source={item} key={i} />)
          })}
        </div>
      </div> */}
  </div>
  );
};

const CarouselImage = ({ source }) => {
  const imgStyle = {
    width: "100px"
  };
  return (
    <img src={source} style={{ ...imgStyle }} alt=''></img>
  )
};

const ListImage = ({source}) => {
  const rfk_product = {
    overflow: 'hidden',
    width: '220px',
    backgroundColor: 'transparent',
    display: 'inline-block',
    verticalAlign: 'top',
    textDecoration: 'none',
    textAlign: 'center',
    border: '1px solid transparent',
    margin: '0 3px',
    position: 'relative',
  };

  const rfk_pimage = {
    border: '1px solid #acafb4',
    width: '99%',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
  };

  const rfk_image = {
    height: 'auto',
    maxWidth: '100%',
  };

  return (
    <li className='rfk_product' style={{...rfk_product}}>
      <a href='#'>
        <div className='rfk_pimage' style={{...rfk_pimage}}>
          <img className='rfk_image' src={source} style={{...rfk_image}}></img>
        </div>
      </a>
    </li>
  );
};

export default Slidee2;

