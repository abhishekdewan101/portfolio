//function looks after the changing of the chevron on click

$("#collapseheader").click(function(){
    if($("#downchevron").attr('class').indexOf("fa-caret-down") > -1){
        $("#downchevron").removeClass("fa-caret-down");
        $("#downchevron").addClass("fa-caret-up");
    }else{
        $("#downchevron").removeClass("fa-caret-up");
        $("#downchevron").addClass("fa-caret-down");
    }
});