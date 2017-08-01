$(document).ready(function(){
    var from,to,subject,text,name,cmailid,mobile;
    $("#send").click(function(){
        mobile=$("#txt_mobno").val()
        name=$("#txt_name").val();
        cmailid=$("#txt_mail").val();
        to=$("#to").val();
        subject=$("#subject").val();
        text=$("#txt_inquire").val();
        $("#message").text("Sending Message...Please wait");
        $.get("http://localhost:3000/send",{to:"info@hardcipher.in",subject:"This Is query Form Enquiry",text:text,name:name,cmailid:cmailid,mobile:mobile},function(data){
        if(data=="sent")
        {
            $("#message").empty().html("Meassage Sent Successfully. We will contact you soon.");
            $("#query").remove();
            $("#msgico").remove();
            $("#snd").remove();
           $("#iphn img").attr("src", url="assets/images/iphone_sent.png");
        }

});
    });
});