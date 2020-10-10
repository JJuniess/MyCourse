import React from 'react';
import './App.css';
import jQuery from "jquery";
window.$ = window.jQuery=jQuery;

function App() {
  return (
    <div className="App"> 
    <div id="main_bg">
      <div id="main_dark">
        <header>
          <nav>
              <ul>
                  <li>
                      <a href="#">MyTC</a>
                  </li>
                  <li>
                      <button type="button">ABOUT</button>
                  </li>
                  <li>mytravelcourse@gmail.com</li>
              </ul>
          </nav>
      </header>
      <section>
          <h1>
              My Travel Course
              <span>당신의 여행을 설계하세요</span>
          </h1>
          <a href="#">구글로 시작하기</a>
      </section>
      </div>
    </div>
    
    <aside>
        <h2>당일치기 여행 코스를 내 마음대로 짤 수 있는 MyTC</h2>
        <p>요즘 바쁜 직장인들이나 학생들은 길게 여행을 가지 못하는 점으로 당일치기로 여행을 많이 갑니다.<br/>
           MyTC는 정해진 여행 코스를 제공하므로써 여행 계획에 걸리는 시간을 단축할 수있도록 도와줍니다.<br/>
           또한 코스에 해당하는 맛집 정보를 통해 편리함을 제공합니다.</p>
        <h2>MyTC 사용방법</h2>
        <ol>
            <li>1. 관심있는 지역을 검색합니다.</li>
            <li>2. 마음에 드는 추천코스는 My Course로 담아옵니다.</li>
            <li>3. My Course를 관리하여 나만의 여행코스를 짭니다.</li>
        </ol>
        <h3>MyTC를 만든 사람들</h3>
        <dl class="dl-margin">
            <dt>임지호</dt>
            <dd>Back-end Developer</dd>
        </dl>
        <dl class="dl-margin">
            <dt>이도현</dt>
            <dd>Designer | Front-end Developer</dd>
        </dl>
        <dl>
            <dt>김주은</dt>
            <dd>Back-end Developer</dd>
        </dl>
        <dl>
            <dt>김어진</dt>
            <dd>Front-end Developer</dd>
        </dl>
            
            
            
    </aside>
    
    {/* <script>
      $(document).ready(function(){
          $("#about").on('click',function(e){
              $("aside>div").animate( {
              left: '0'
            });
            $("#close_about").animate( {
              left: '97vw'
            });
          });
          $("#close_about").on('click',function(e){
              $("aside>div").animate( {
              left: '-100vw'
            });
            $(this).animate( {
              left: '-97vw'
            });
          });
      });
    </script> */}

    </div>



  )
}

export default App;