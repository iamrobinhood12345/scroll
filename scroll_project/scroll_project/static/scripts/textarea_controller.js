$(document).ready(function() {

        // JQuery code to be added in here.
        var Text = ''

        for(var i = 0; i < 400; i++) {
           Text += '                                                                                                                                                                                                                                              \n'
        }
        var textbox = $("<textarea id='textbox' rows='180' cols='100' style='font-family:Monaco;color:#003399;white-space:pre-wrap'></textarea>");
        $( "#textboxdiv" ).append( textbox );
        // $(".textbox").value = "hello";
        document.getElementById("textbox").value = Text;
        $('#textbox').click( function() { console.log("hello"); });
});
