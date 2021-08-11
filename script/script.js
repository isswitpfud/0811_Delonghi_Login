
$(function(){
    $("li.mainLi").mouseover(function(){
        $(this).children("ul").stop().show();
        $("div#headerBG").stop().show();
    });

    $("li.mainLi").mouseout(function(){
        $(this).children("ul").stop().hide();
        $("#headerBG").stop().hide();
    });

// gnb메뉴 display:none구현
// display:flex와 동시적용 불가
    $("#subMenu").css({"display":"none"});

 // lnbMenu 효과구현
    $("#lnbMenu a").mouseover(function(){
        $(this).siblings("#lnbMenu span").css({"visibility":"visible"});
    });

    $("#lnbMenu a").mouseout(function(){
        $(this).siblings("#lnbMenu span").css({"visibility":"hidden"});
    });


    // tapButton 구현
    $("#buttonArea button").click(function(){

        // 1. 버튼 초기상태
        $("#buttonArea button").css({
            "color":"#666",
            "border":"1px solid #aaa"
        });
        // 2. 클릭했을때 버튼 상태
        $(this).css({
            "border":"1px solid #3289e8",
            "border-bottom":"1px solid #fff",
            "color":" #3289e8"
        });

// 3. 클릭하지 않은 버튼상태

var txt = $(this).text();
var cssAttr;
var placeholderTxt;
if (txt == "이메일") {
    cssAttr = "border-left";
    placeholderTxt = "E-mail";
} else {
    cssAttr = "border-right";
    placeholderTxt = "Membership Number";
}

$(this).siblings("button").css({
    cssAttr: "none",
    "border-bottom": "1px solid #3289e8",
    "color":"#aaa"
});


// 사용자 아이디(이메일, 멤버십 번호) placeholder 적용
// attr 메서드는 html 요소의 속성을 참조하는 기능
// JS에서 참조한다는 말은 값을 입력, 조회, 수정, 삭제 한다는 것을 의미함
$("#userID").attr("placeholder", placeholderTxt);


    
    });



});  // ---> 끝