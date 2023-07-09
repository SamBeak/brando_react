import React from 'react'

export default function Section1Component() {
  return (
    <section id="section1">
      <div className="container">
        {/* Img Slider */}
        <div className="slide-container">
          <div className="slide-view">
            <ul className="slide-wrap">
              <li className="slide"></li>
              <li className="slide"></li>
              <li className="slide"></li>
            </ul>
          </div>
        </div>
        {/* main title */}
        <div className="title">
          <div className="title__wrap">
            <img src="./images/wedding-img4.png" alt="웨딩포스트" />
            <hr/>
            <h2>WE ARE GETTING MARRIED</h2>                        
            <h3>SEPTEMBER 20TH, 2015</h3>     
          </div>
        </div>
        {/* 좌우화살버튼 */}
        <a href="!#" className="arrow-btn--prev"><i></i></a>
        <a href="!#" className="arrow-btn--next"><i></i></a>

        {/* 인디게이트 버튼 || 페이지네이션 버튼 */}
        <div class="page-btn-box">
            <span><a href="!#" className="page-btn blind on">페이지1</a></span>
            <span><a href="!#" className="page-btn blind">페이지2</a></span>
            <span><a href="!#" className="page-btn blind">페이지3</a></span>    
        </div>
      </div>
    </section>
  )
}
