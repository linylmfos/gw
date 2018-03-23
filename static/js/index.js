$(function() {
    // banner 轮播图
	$(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 6000,
        autoplayHoverPause: true
    });

    // nav 导航栏
	$("#homepage").hover(function() {
		$("#homeMenu").css({"display":"block", "z-index":"999"});
	}, function() {
		$("#homeMenu").css("display", "none");
    });

    var menuLength = $("#menu").width();
    $("#homeMenu").width(menuLength);
  

    var asideLength = $("#circleContainer").width();
    console.log(asideLength);
    var circleRing = asideLength / 6;
    console.log(circleRing);
    var circleRingLength = $("div.circleRing").width(circleRing);
    var circleRingHeight = $("div.circleRing").height(circleRing);
    var ring = $("div.circleRing").css("border","solid 6px #4A90E2");
    $("div.msgRing").css("background-color","#FFFFFF");
    $("div.devRing").css({"background-color":"#4A90E2","border":"solid 6px #FFFFFF"});
   

    $("div.circleRing").css("border-radius","50%");

    var circleChoseLength = $("div.circleChose").width(circleRing);
    var circleChoseHeight = $("div.circleChose").height(circleRing);
    $("div.circleChose").css("background-color","#4A90E2");
    var ring = $("div.circleChose").css("border","solid 10px #4A90E2");
    $("div.devRingChose").css({"background-color":"#FFFFFF","border":"solid 10px #FFFFFF"});
   

    // 解决国产浏览器下字体渲染的问题
    $youziku.load("#welcome,#login,#register,#cnLang,#enLang", "84261a2e638c4f9ca158b787f098c283", "PingFangSC_R");
    $youziku.load("#liMsg,.mainTitle,.subTitle", "5e1111a32c174b6c81a0dd088139383d", "PingFangSCM");
    $youziku.load("#attendContent,#attendAudit, #trace,#positionContent,.msgDetail,.callDetail, .devDetail, .moreDetail", "84261a2e638c4f9ca158b787f098c283", "PingFangSC_R");
    $(".msgDetail").css("font-weight","normal");
    $(".callDetail").css("font-weight","normal");
    $(".devDetail").css("font-weight","normal");
    $(".moreDetail").css("font-weight","normal");

    // 导航栏li宽度设定ie兼容
    var userAgent = navigator.userAgent;
    var isEdge = userAgent.indexOf("Edge") > -1;
    if (isEdge) {  $("#menu > li").css("width","16.6%"); }



    function isIE() {
        if (!!window.ActiveXObject || "ActiveXObject" in window){

            $("#menu > li").css("width","16.66%");
            $("div.circleSymbolWrap").css("height","calc(60%)");

            $("#callServiceContent dd.callDetail").css("line-height","4.6rem");  
            $("#bscs > li").css("margin-bottom","2.4rem");
            $("#bannerMsg").css("padding-bottom","8rem");
            $("#developService").css("padding-bottom","7rem");
            $("#devItemDesc dd.msgDetail").css("margin-bottom","5.2rem");
            $("#devItemDesc dd.msgDetail").css("line-height","5.2rem");
            $("#moreSymbol").css("margin-top","0px");
            $("#moreService").css("padding-bottom","12rem");

            $("#cloudCommunication").css("font-weight","bold");
            $("#welcome").css("font-weight","normal");
            $("#login").css("font-weight","normal");
            $("#register").css("font-weight","normal");
            $("#zh > span").css("font-weight","normal");
            $("#en > span").css("font-weight","normal");
            $("#homeMenu li.ieFont").css("font-weight","bold");
            $(".mainTitle").css("font-weight","normal");
            $(".subTitle").css("font-weight","normal");   
            $("dd.msgDetail").css("font-weight","normal");
            $("dd.callDetail").css("font-weight","normal");
            $("#communicationMain div.itemContent dd").css("font-weight","normal");
           $("#categoryContent div.main").css("font-weight","normal");
           $("#officeMain li.ieFont").css("font-weight","normal");
           $("#ulBenefit div.ieFont").css("font-weight","normal");
           $("#aboutDesc").css("font-weight","normal");
           $("#contactDetail span.ieFont").css("font-weight","normal");
           $("#gf div.itemDesc").css("font-weight","normal");
            $("#ywy").css("font-weight","bold");
            $("#cs").css("font-weight","bold");
           $("#aboutDesc").css("font-weight","normal");
           $("#year,#companyName").css("font-weight","normal");
           
        }else{
            return false;
        }
     }

     isIE()

})