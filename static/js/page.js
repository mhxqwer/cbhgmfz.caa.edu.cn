/**
 * Created by Administrator on 2016/6/28 0028.
 */
$(function () {
    if($(".page").find(".prev").length>0){
        console.info( $(".num:nth-of-type(1)"))
       $(".page .prev").addClass("first")
    }else{
        $(".page span:nth-of-type(1)").addClass("first")
    }
    if($(".page").find(".end").length>0){
        $(".page .end").addClass("after")
    }else{

        if($(".page").find(".next").length>0){
            $(".page .next").addClass("after");
        }else{
            $(".page div  span").addClass("after")
        }
    }

})