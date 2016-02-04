var toppos = 0;
$(function() {

    //滚动part-2
    $("#to-part-2").click(function() {
        $('body,html').animate({
            scrollTop: $("#part-2").offset().top //滚动到注册锚
        }, 1000);
        return false;

    });

    //鼠标移上去背景图片缩放
    // var bgimg = $(".col-xs-8>div");
    // $(".col-xs-8").hover(
    //     function() {
    //        bgimg.css(scale(1.1));
    //     },
    //     function() {
    //        bgimg.animate({ backgroundSize: "100%" });
    //     }
    // );
    // sub-header的动画……
    $(window).scroll(function() {
        //sub-header 处于 part-2-1 之下 上下滚动 toggole
        var scrollTop = $(window).scrollTop();
        var pt2pos = $("#part-2").offset().top;
        var pt2_1pos = $("#part-2-1").offset().top;
        if (scrollTop >= pt2pos && scrollTop <= pt2_1pos) {
            //sub-header 处于 part-2 ~ part-2-1 之内 一直block
            $("#sub-header").fadeIn(300);

        } else if (scrollTop > pt2_1pos) {
            //如果在 part-2-1之下
            if (scrollTop > toppos) {
                //向下滚动
                $("#sub-header").fadeOut(300);
            } else {
                // 向上滚动
                $("#sub-header").fadeIn(300);
            }
            toppos = scrollTop;
        } else {
            //如果在 part2之上
            $("#sub-header").hide();

        }

        //当滚动条的位置处于距顶部0像素以下时，header 出现，否则消失  
        if (scrollTop > 0) {
            $("#header").fadeOut();
        } else {
            $("#header").fadeIn();
        }
    });
});
