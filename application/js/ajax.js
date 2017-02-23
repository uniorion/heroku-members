(function(global, Ajax) {
  "use strict";
  
  // 회원 REST API URI
  var MEMBER_API_URI = "https://json-db.herokuapp.com/members";

  var el_table_list = document.querySelector(".table-list");

  var memberAjax = (function (foo) {
    
    return {
      // ajax 비동기 요청 - 회원등록
      requestRegMember: function(form_data) {
        var ajax = new Ajax();
        
        var method      = "POST",
            requestUrl  = null,
            async       = true;
        
        requestUrl = MEMBER_API_URI;

        ajax.open(method, requestUrl, async);
        
        ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        ajax.addEventListener("readystatechange", cbMemberReg.bind(ajax));
        ajax.send(form_data);
      },
      // ajax 비동기 요청 - 회원목록
      requestMemberList : function() {
        var ajax = new Ajax();

        var method      = "GET",
            requestUrl  = null,
            queryStr    = null,
            async       = true;
          
        queryStr = "?_page=1&_sort=id&_order=DESC";
        requestUrl = MEMBER_API_URI + queryStr;

        ajax.open(method, requestUrl, async);
        ajax.addEventListener("readystatechange", cbMemberList.bind(ajax));
        ajax.send();
      }
    }

  })(); 

  // requestRegMember 콜백
  function cbMemberReg() {
    if ( this.status === 201 && this.readyState === 4 ) {
      alert('가입되었습니다.');
      location.href = "/list";
    }
  }

  // requestMemberList 콜백
  function cbMemberList() {
    if ( this.status === 200 && this.readyState === 4 ) {
      var txt2json = global.JSON.parse(this.response);
      var listHtml = "";

      // 목록 HTML 생성
      txt2json.forEach(function(member) {
        listHtml += "<tr>"
                  + "<td>" + member.id + "</td>"
                  + "<td>" + member.company + "</td>"
                  + "<td>" + member.name + "</td>"
                  + "<td>" + member.userid + "</td>"
                  + "</tr>";
      });

      el_table_list.innerHTML = listHtml;
    }
  }

  global.memberAjax = memberAjax;

})(this, this.XMLHttpRequest);