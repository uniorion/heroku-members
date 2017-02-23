(function(global) {
  "use strict";

  var document = global.document;
  
  var frm           = document.querySelector("form"),
      btn_go_regist = document.querySelector(".btn-go-regist"),
      btn_go_list   = document.querySelector(".btn-go-list"),
      btn_more      = document.querySelector(".btn-more");
  
  // '가입하기' 버튼 클릭 이벤트
  if ( frm !== null ) {
     frm.addEventListener("submit", function(e) {
      // *** Form Validation ***

      // submit 이벤트 제거
      e.preventDefault();

      // var frm_input_el = this.querySelectorAll("input");
      // for (var i = 0; i < frm_input_el.length; i++ ) {
      //   console.log(frm_input_el[i].value);
      // };

      var form_data          = "",
          frm_user_company  = document.querySelector('#user-company'),
          frm_user_name     = document.querySelector('#user-name'),
          frm_user_id       = document.querySelector('#user-id'),
          frm_user_password = document.querySelector('#user-password');
      
      form_data = "company="   + frm_user_company.value
                + "&name="      + frm_user_name.value
                + "&userid="    + frm_user_id.value
                + "&password="  + frm_user_password.value;

      memberAjax.requestRegMember(form_data);
    });
  }


  function processForm(e) {
      if (e.preventDefault) e.preventDefault();

      /* do what you want with the form */

      // You must return false to prevent the default form behavior
      return false;
  }
 

  // '목록으로' 버튼 클릭 이벤트
  if ( btn_go_list !== null ) {
    btn_go_list.addEventListener("click", function() {
      location.href = "/list";
    });
  }

  // '회원가입' 버튼 클릭 이벤트
  if ( btn_go_regist !== null ) {
    btn_go_regist.addEventListener("click", function() {
      location.href = "/regist";
    });
  }

  // 회원목록 페이지
  if ( location.pathname === "/list") {
    // 로딩완료 후 목록 요청
    global.addEventListener("DOMContentLoaded", memberAjax.requestMemberList());
  }

})(this);