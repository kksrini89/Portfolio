/**
 * Created by srini on 31-03-2016.
 */
$(".nav a").on('click',function(){
    $(".nav").find('.active').removeClass("active");
    $(this).parent().addClass("active");
});

$("#portfolio-first").hover(function(){
    $("#overlayIconOne").addClass("fa fa-fire");
});
$("#portfolio-second").hover(function(){
    $("#overlayIconTwo").addClass("fa fa-fire");
});
$("#portfolio-third").hover(function(){
    $("#overlayIconThree").addClass("fa fa-fire");
});

// Contact US
$("#submitId").on('click',function(){
    var Name=$("#nameText").val();
    var subject=$("#subject").val();
    var msg=$("#msgBody").val() +"%0A%0A" +"-----"+"%0A"+Name;
    var to="kksrini89@gmail.com";
    // window.location="mailTo:"+to+"?subject="+subject+"&body="+;
    window.location = 'mailto:' + to + '?subject=' + subject + '&body=' + msg;

    //Notification after sent the mail
    // toastr.options={
    //  "timeOut": "1000",
    //  "extendedTimeOut": "1000",
    // }
    // toastr.info('mail sent');
    $("#nameText").val("");
    $("#subject").val("");
    $("#msgBody").val("");
    $("#nameText").focus();
});
