$(document).ready(function () {
    //modal bugfix
    console.log('ready');
    $('a[data-dismiss="modal"][data-toggle="modal"]').on("click", function () {
        console.log("click");
        var target = $(this).data("target");
        console.log("target", target);
        $(target).on("shown.bs.modal", function () {
            $("body").addClass("modal-open");
        });
    });
    
    //heart btn
    // $(".heart-icon-close").hover(
    //     function () {
    //         $(this).css("color", "red");
    //     },
    //     function () {
    //         $(this).css("color", "#faa");
    //     }
    // );

    $('.heart-icon-open').hide();
    $('.heart-btn > .heart-icon').click(
        function () {
            // 滑鼠移入時要執行的內容
            event.preventDefault();
            $(this).siblings('.fa-heart').toggle();
        });
    
        //animate
    new WOW().init();
});
