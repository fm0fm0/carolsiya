$(document).ready(function () {
    //modal bugfix
    console.log("ready");
    $('a[data-dismiss="modal"][data-toggle="modal"]').on("click", function () {
        console.log("click");
        var target = $(this).data("target");
        console.log("target", target);
        $(target).on("shown.bs.modal", function () {
            $("body").addClass("modal-open");
        });
    });
    
    //heart btn
    $(".heart-icon-open").hide();
    $(".heart-btn > .heart-icon").click(function () {
            event.preventDefault();
            $(this).siblings(".fa-heart").toggle();   
    });
    
    //animate
    new WOW().init();

    //購物車商品關閉按鈕
    $("#close-btn").click(function(){
        event.preventDefault();
        $(this).parent().hide();
    });

    //開關消費明細
    $("#checkout-list-btn").click(function(){
        event.preventDefault();
        $("#checkout-list").toggle();
    });

    //gotop回首頁
    $("#gotop").click(function(){ 
        $("html,body").animate({scrollTop:0}, 333); //點擊自動捲到最上方
    });
    $(window).scroll(function() {                   //瀏覽器捲動時執行以下程式
        if ( $(this).scrollTop() > 300 ){           //判斷距離頂端是否超過300px
            $("#gotop").fadeIn(222);                //超過300顯示效果
        } else {
            $("#gotop").stop().fadeOut(222);        //未超過300px停止並隱藏按鈕
        }
    }).scroll();   

});
