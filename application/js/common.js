(function() {
  "use strict";
  
  var btn_submit    = document.querySelector(".btn-registration-submit"),
      btn_go_regist = document.querySelector(".btn-go-regist"),
      btn_go_list   = document.querySelector(".btn-go-list"),
      btn_more      = document.querySelector(".btn-more");
  
  // '가입하기' 버튼 클릭 이벤트
  if ( btn_submit !== null ) {
    btn_submit.onclick = function(e) {
      // *** Form Validation ***

      // submit 이벤트 제거
      e.preventDefault();

      alert("가입이 완료 되었습니다");
      location.href = "/list";
    };
  }

  // '목록으로' 버튼 클릭 이벤트
  if ( btn_go_list !== null ) {
    btn_go_list.onclick = function() {
      location.href = "/list";
    };
  }

  // '회원가입' 버튼 클릭 이벤트
  if ( btn_go_regist !== null ) {
    btn_go_regist.onclick = function() {
      location.href = "/regist";
    };
  }

})();