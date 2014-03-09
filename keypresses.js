$(document).ready(function(){
    var angle = 0;
    
    
    
    
    // AUXXXXXXXXXXXXXXXXXXXXX
    function auxFunc() {
        $("#nwlabel").css("color", "#f13c00");
        $("#nelabel").css("color", "white");
        $("#selabel").css("color", "white");
        $("#swlabel").css("color", "white");
    }
    function btFunc() {
        $("#nelabel").css("color", "#f13c00");
        $("#nwlabel").css("color", "white");
        $("#selabel").css("color", "white");
        $("#swlabel").css("color", "white");
    }
    function fmFunc() {
        $("#swlabel").css("color", "#f13c00");
        $("#nelabel").css("color", "white");
        $("#selabel").css("color", "white");
        $("#nwlabel").css("color", "white");
    }
    function amFunc() {
        $("#selabel").css("color", "#f13c00");
        $("#nelabel").css("color", "white");
        $("#nwlabel").css("color", "white");
        $("#swlabel").css("color", "white");
    }
    // BACKKKKKKKKKKKKKKKKKKKKKKKKK
    function backFunc() {
        $("#selabel").css("color", "white");
        $("#nelabel").css("color", "white");
        $("#nwlabel").css("color", "white");
        $("#swlabel").css("color", "white");
        $("#nwlabel").text("AUDIO\xa0");
        $("#nelabel").text("\xa0\xa0\xa0A/C");
        $("#swlabel").text("BT\xa0\xa0");
        $("#selabel").text("\xa0\xa0CONFIG");
        menuFunc();
        $("#reverseDial").html("71");
    }
    function audioFunc() {
        angle = 0;
        $("#dial").rotate(angle);
        $("#reverseDial").rotate(-angle);
        $("#nwlabel").text("AUX\xa0\xa0\xa0");
        $("#nelabel").text("\xa0\xa0\xa0BT");
        $("#swlabel").text("AM\xa0\xa0\xa0");
        $("#selabel").text("\xa0\xa0\xa0FM");
        $("#reverseDial").html(init);
        $(document).keypress(function(e){
            if (e.keyCode == 119) {
                fmFunc();
            }
            else if (e.keyCode == 99) {
                auxFunc();
            }
            else if (e.keyCode == 111) { 
                btFunc();
            }
            else if (e.keyCode == 109) {
                amFunc();
            }
            else if (e.keyCode == 98) {
                backFunc();
            }
        });
    }
    function menuFunc() {
        $(document).keypress(function(e){
        if (e.keyCode == 119) {
            savedTemp = init;
            init = 15;
            audioFunc();
        }
        else if (e.keyCode == 99) {
            savedTemp = init;
            init = 15;
            audioFunc();
        }
        else if (e.keyCode == 111) {
            savedTemp = init;
            init = 15;
            audioFunc();
        }
        else if (e.keyCode == 109) {
            savedTemp = init;
            init = 15;
            audioFunc();
        }
   
        else if (e.keyCode == 104) { 
            angle -= 40;
            $("#dial").rotate(angle);
            $("#reverseDial").rotate(-angle);
            init -= 2;
            $("#reverseDial").html(init);
        }
        else if (e.keyCode == 103) { 
            angle += 40;
            $("#dial").rotate(angle);
            $("#reverseDial").rotate(-angle);
            init += 2;
            $("#reverseDial").html(init);
        }
    });
    }
    
    var init = 65;
    var savedTemp;
    
    $("#reverseDial").html(init);
    menuFunc();

    

});