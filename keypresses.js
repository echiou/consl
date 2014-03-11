$(document).ready(function() {
    var angle = 0;
    var init = 65;
    var savedTemp;    
    var currentMenu = "main";

    $(document).keypress(function(e) {
        if (currentMenu == "main") {
            menuFunc(e.keyCode);
        }
        else if (currentMenu == "audio") {
            audioFunc(e.keyCode);
        }
        else if (currentMenu == "ac") {
            acFunc(e.keyCode);   
        }
        else {
            alert("uhoh");
        }
    });
    
    function nwFunc() {
        $("#nelabel").css("color", "white");
        $("#nwlabel").css("color", "red");
        $("#selabel").css("color", "white");
        $("#swlabel").css("color", "white");
    }
    function neFunc() {
        $("#nelabel").css("color", "red");
        $("#nwlabel").css("color", "white");
        $("#selabel").css("color", "white");
        $("#swlabel").css("color", "white");
    }
    function swFunc() {
        $("#nelabel").css("color", "white");
        $("#nwlabel").css("color", "white");
        $("#selabel").css("color", "white");
        $("#swlabel").css("color", "red");
    }
    function seFunc() {
        $("#nelabel").css("color", "white");
        $("#nwlabel").css("color", "white");
        $("#selabel").css("color", "red");
        $("#swlabel").css("color", "white");
    }
    
    // AUXXXXXXXXXXXXXXXXXXXXX
    function auxFunc() {
        nwFunc();
    }
    function btFunc() {
        neFunc();
    }
    function fmFunc() {
        seFunc();
    }
    function amFunc() {
        swFunc();
    }
    function airFunc() {
        nwFunc();
    }
    function circFunc() {
        neFunc();
    }
    function rdefrostFunc() {
        swFunc();
    }
    function fdefrostFunc() {
        seFunc();
    }
    
    // BACKKKKKKKKKKKKKKKKKKKKKKKKK
    function backFunc() {
        currentMenu = "main";
        menuFunc();
    }
    function audioFunc(code) {
        angle = 0;
        $("#dial").rotate(angle);
        $("#reverseDial").rotate(-angle);
        $("#nwlabel").text("AUX\xa0\xa0\xa0");
        $("#nelabel").text("\xa0\xa0\xa0BT");
        $("#swlabel").text("AM\xa0\xa0\xa0");
        $("#selabel").text("\xa0\xa0\xa0FM");
        $("#reverseDial").html(init);
        if (code == 119) { //W
            auxFunc();
        }
        else if (code == 99) { //C
            amFunc();
        }
        else if (code == 111) { //O
            btFunc();
        }
        else if (code == 109) { //M
            fmFunc();
        }
        else if (code == 98) {
            backFunc();
        }
    }
    function acFunc(code) {
        angle = 0;
        $("#dial").rotate(angle);
        $("#reverseDial").rotate(-angle);
        $("#nwlabel").text("AIR\xa0\xa0\xa0");
        $("#nelabel").text("\xa0\CIRC");
        $("#swlabel").text("REAR\xa0");
        $("#selabel").text("\xa0FRONT");
        $("#reverseDial").html(init);
        if (code == 119) { //W
            airFunc();
        }
        else if (code == 99) { //C
            rdefrostFunc();
        }
        else if (code == 111) {  //O
            circFunc();
        }
        else if (code == 109) { //M
            fdefrostFunc();
        }
        else if (code == 98) {
            backFunc();
        }
    }
    function menuFunc(code) {
        $("#selabel").css("color", "white");
        $("#nelabel").css("color", "white");
        $("#nwlabel").css("color", "white");
        $("#swlabel").css("color", "white");
        $("#nwlabel").text("AUDIO\xa0");
        $("#nelabel").text("\xa0\xa0\xa0A/C");
        $("#swlabel").text("BT\xa0\xa0");
        $("#selabel").text("\xa0\xa0CONFIG");
        if (code == 119) { //W
            savedTemp = init;
            init = 15;
            currentMenu = "audio";
            audioFunc();
        }
        else if (code == 99) { //C
            savedTemp = init;
            init = 15;
            currentMenu = "audio";
            audioFunc();
        }
        else if (code == 111) { //O
            savedTemp = init;
            init = 15;
            currentMenu = "ac";
            acFunc();
        }
        else if (code == 109) { //M
            savedTemp = init;
            init = 15;
            currentMenu = "audio";
            audioFunc();
        }
        else if (code == 104) { 
            angle -= 40;
            $("#dial").rotate(angle);
            $("#reverseDial").rotate(-angle);
            init -= 2;
            $("#reverseDial").html(init);
        }
        else if (code == 103) { 
            angle += 40;
            $("#dial").rotate(angle);
            $("#reverseDial").rotate(-angle);
            init += 2;
            $("#reverseDial").html(init);
        }
    }
});