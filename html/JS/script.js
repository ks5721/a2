// 메뉴
$(document).ready(function() {

    $.each($("#gnb > ul > li"), function(index, item) {

        //주메뉴
        var aTag = $(this).find('>a');
        var sub = $(this).find(".submenu");

        aTag.mouseenter(function() {


            sub.slideDown();
        });

        $(this).mouseleave(function() {

            sub.slideUp();
        });


    });

});