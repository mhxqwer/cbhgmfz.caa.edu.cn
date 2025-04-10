/**
 * Created by Administrator on 2016/6/23 0023.
 */
$(function () {
    pcNav();
    // selectAnDate();
    checkswitch();
    //navHover();

    // 内容页浏览量
    function getLastPartOfUrl($url) {
        var url = $url;
        var urlsplit = url.split("/");
        var lastpart = urlsplit[urlsplit.length - 1];
        if (lastpart === '') {
            lastpart = urlsplit[urlsplit.length - 2];
        }
        return lastpart;
    }

    if ($(".main .content .newsInfo .title .h4")) {
        // 获取当前页的url
        var cur_url = window.location.href.split(".html")[0];
        var cur_id = getLastPartOfUrl(cur_url);

        $.ajax({
            url: "https://v5.caa.edu.cn/pageViewsNum?id=" + cur_id + "",
            success: function (data) {
                var person = JSON.parse(JSON.stringify(data));
                if (person.code == 200) {
                    var click_num = person.data.click_num;

                    $(".main .content .newsInfo .title .h4").append('<span style="display: none;">阅读：' + click_num + '</span>');
                }
            },
            error: function (err) {
                console.log(err);
            },
            type: "get",
            dataType: "json"
        });
    }
})
/*function navHover(){
    $('#header #navGroup #pcNav li').mouseenter(function(){
        $(this).find(">a").parent().find('.subNav div').animate({
            opacity:'1'
        });       

    });
    $('#header #navGroup #pcNav li').mouseleave(function(){
        $(this).find(">a").parent().find('.subNav div').animate({
            'opacity':'0'
        });
    });


}*/
function pcNav() {
    $('#header #navGroup #pcNav li').mouseenter(function () {
        $(this).find('.subNav').stop().fadeIn();
        $(this).find('.line').css({
            "transition": "0.5s",
            "-webkit-transition": "0.5s",
            "-ms-transition": "0.5s",
            "-moz-transition": "0.5s",
            "-o-transition": "0.5s",
            "width": "100%",
            "left": "0"

        });
    });
    $('#header #navGroup #pcNav li').mouseleave(function () {
        $(this).find('.subNav').stop().fadeOut();
        $(this).find('.line').css({
            "transition": "0.5s",
            "-webkit-transition": "0.5s",
            "-ms-transition": "0.5s",
            "-moz-transition": "0.5s",
            "-o-transition": "0.5s",
            "width": "0",
            "left": "50%"
        });
    });

    //var iDelay=200;
    /*if(judge.browser()<"IE11"){
        $("#pcNav li").hover(function () {
            $(this).find("a").siblings().show();
        },function () {
            $(this).find("a").siblings().hide();
        });
        return;
    }*/


    /*$("#pcNav li").data("bOff",true);

    $("#pcNav li").hover(function(){

        var oTimer= $(this).data("oTimer");
        var bOff=$(this).data("bOff");
        var max=$(this).find(".subNav div").length;
        var oDiv=$(this).find(".subNav").find("div")

        if(oTimer)
        {
            return;
        }
        if(bOff)
        {
            var i=0;
            var This=$(this)
            This.find(".line").addClass("active")
            oTimer=setInterval(function(){

                oDiv.eq(i).attr("class","show")
                i++;

                if(i== oDiv.length)
                {
                    clearInterval(oTimer);

                    This.data("oTimer",null)
                    This.data("bOff",false)
                }
            },iDelay);

        }
    },function () {
        var oTimer= $(this).data("oTimer");
        var bOff=$(this).data("bOff");
        var max=$(this).find(".subNav div").length;
        var oDiv=$(this).find(".subNav").find("div")

        var This=$(this);
        if(!bOff) {
            var i = max - 1;
            This.find(".line").removeClass("active")
            oTimer = setInterval(function () {
                oDiv.eq(i).attr("class", "hide2")
                i--;
                if (i < 0) {
                    clearInterval(oTimer);
                    bOff = true;
                    oTimer = null;
                    This.data("oTimer",null)
                    This.data("bOff",true);

                }
            }, iDelay);

        }else{
            setTimeout(function () {
                This.find(".line").removeClass("active")
                i = max - 1;
                oTimer = setInterval(function () {
                    oDiv.eq(i).attr("class", "hide2")
                    i--;
                    if (i < 0) {
                        clearInterval(oTimer);
                        bOff = true;
                        oTimer = null;
                        This.data("oTimer",null)
                        This.data("bOff",true);
                    }
                }, iDelay);

            },iDelay*max)
        }


    })*/
}
function selectAnDate() {
    //$("select").select2({dropdownCssClass: 'dropdown-inverse'});
    var datepickerSelector2 = $('#datepicker-01');
    datepickerSelector2.datepicker({
        showOtherMonths: true,
        selectOtherMonths: true,
        dateFormat: "yy-mm-dd",
        yearRange: "-50:-10",
        changeMonth: true,
        changeYear: true,
        //        minDate:new Date("1960-01-01"),
        //        maxDate:new Date(),
        //        endDate:'+1',
    }).prev().on('click', function (e) {
        e && e.preventDefault();
        datepickerSelector2.focus().blur();
    });
    $.extend($.datepicker, { _checkOffset: function (inst, offset, isFixed) { return offset } });

    // Now let's align datepicker with the prepend button
    datepickerSelector2.datepicker('widget').css({ 'margin-left': -datepickerSelector2.prev('.input-group-btn').find('.btn').outerWidth() });
}
function checkswitch() {
    $(".check .radio").click(function () {
        if (!$(this).hasClass("active")) {
            $(this).addClass("active").siblings().removeClass("active")
        }
    })
}