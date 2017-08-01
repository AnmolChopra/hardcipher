    <script type="text/javascript">
$(document).ready(function(){    
    //Check if the current URL contains '#'
    if(document.URL.indexOf("http://127.0.0.1:51456/index.html")==-1){
        // Set the URL to whatever it was plus "#".
        url = document.URL+"#disp";
        location = "#disp";

        //Reload the page
        location.reload(true);
    }
});
</script> 