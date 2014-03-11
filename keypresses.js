$(document).ready(function() {
    var angle = 0;
    var init = 65;
    var vol = 3;
    var aux = 6;
    var am = 2;
    var fm = 4;
    var temp = 8;
    var air = 9;
    var rdefrost = 10;
    var fdefrost = 20;
    
    var dialType = null;
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
    function volFunc() {
        dialType = "vol";
        nwFunc();
        checkDial();
    }
    function auxFunc() {
        dialType = "aux";
        neFunc();
        checkDial();
    }
    function fmFunc() {
        dialType = "fm";
        seFunc();
        checkDial();
    }
    function amFunc() {
        dialType = "am";
        swFunc();
        checkDial();
    }
    function tempFunc() {
        dialType = "temp";
        nwFunc();
        checkDial();
    }
    function airFunc() {
        dialType = "air";
        neFunc();
        checkDial();
    }
    function rdefrostFunc() {
        dialType = "rdefrost";
        swFunc();
        checkDial();
    }
    function fdefrostFunc() {
        dialType = "fdefrost";
        seFunc();
        checkDial();
    }
    
    // BACKKKKKKKKKKKKKKKKKKKKKKKKK
    function backFunc() {
        currentMenu = "main";
        dialType = null;
        checkDial();
        menuFunc();
    }
    
    function checkDial() {
        switch(dialType) {
            case "vol":
                $("#reverseDial").text(vol);            
                break;
            case "aux":
                $("#reverseDial").text(aux);
                break;
            case "am":
                $("#reverseDial").text(am);
                break;
            case "fm":
                $("#reverseDial").text(fm);
                break;
            case "temp":
                $("#reverseDial").text(temp);            
                break;
            case "air":
                $("#reverseDial").text(air);
                break;
            case "rdefrost":
                $("#reverseDial").text(rdefrost);
                break;
            case "fdefrost":
                $("#reverseDial").text(fdefrost);
                break; 
            default:
                $("#reverseDial").text("");
                break;
        }
    }
    function turnDialForward() {
        angle += 3.6;
        $("#dial").rotate(angle);
        $("#reverseDial").rotate(-angle);
        switch(dialType) {
            case "vol":
                if (vol < 100) {
                    vol += 1; 
                }
                break;
            case "aux":
                if (aux < 100) {
                    aux += 1;
                }
                break;
            case "am":
                if (am < 100) {
                    am += 1;
                }
                break;
            case "fm":
                if (fm < 100) {
                    fm += 1;
                }
                break;
            case "temp":
                if (temp < 100) {
                    temp += 1;  
                }
                break;
            case "air":
                if (air < 100) {
                    air += 1;
                }
                break;
            case "rdefrost":
                if (rdefrost < 100) {
                    rdefrost += 1;
                }
                break;
            case "fdefrost":
                if (fdefrost < 100) {
                    fdefrost += 1;
                }
                break; 
            default:
                break;
        }
        checkDial();
    }
    function turnDialBackward() {
        angle -= 3.6;
        $("#dial").rotate(angle);
        $("#reverseDial").rotate(-angle);
        switch(dialType) {
            case "vol":
                if (vol > 0) {
                    vol -= 1;   
                }
                break;
            case "aux":
                if (aux > 0) {
                    aux -= 1;
                }
                break;
            case "am":
                if (am > 0) {
                    am -= 1;
                }
                break;
            case "fm":
                if (fm > 0) {
                    fm -= 1;
                }
                break;
            case "temp":
                if (temp > 0) {
                    temp -= 1; 
                }
                break;
            case "air":
                if (air > 0) {
                    air -= 1;
                }
                break;
            case "rdefrost":
                if (rdefrost > 0) {
                    rdefrost -= 1;
                }
                break;
            case "fdefrost":
                if (fdefrost > 0) {
                    fdefrost -= 1;
                }
                break; 
            default:
                break;
        }
        checkDial();
    }
    function audioFunc(code) {
        $("#dial").rotate(angle);
        $("#reverseDial").rotate(-angle);
        $("#nwlabel").text("VOL\xa0\xa0\xa0");
        $("#nelabel").text("\xa0\xa0\AUX");
        $("#swlabel").text("AM\xa0\xa0\xa0");
        $("#selabel").text("\xa0\xa0\xa0FM");
        checkDial();
        
        
        if (code == 119) { //W
            volFunc();
        }
        else if (code == 99) { //C
            amFunc();
        }
        else if (code == 111) { //O
            auxFunc();
        }
        else if (code == 109) { //M
            fmFunc();
        }
        else if (code == 98) {
            backFunc();
        }
        else if (code == 103) { 
            turnDialBackward();
        }
        else if (code == 104) { 
            turnDialForward();
        }
    }
    function acFunc(code) {
        $("#dial").rotate(angle);
        $("#reverseDial").rotate(-angle);
        $("#nwlabel").text("TEMP\xa0\xa0");
        $("#nelabel").text("\xa0\xa0\AIR");
        $("#swlabel").text("REAR\xa0");
        $("#selabel").text("\xa0FRONT");
        checkDial();
        
        if (code == 119) { //W
            tempFunc();
        }
        else if (code == 99) { //C
            rdefrostFunc();
        }
        else if (code == 111) {  //O
            airFunc();
        }
        else if (code == 109) { //M
            fdefrostFunc();
        }
        else if (code == 98) {
            backFunc();
        }
        else if (code == 103) { 
            turnDialBackward();
        }
        else if (code == 104) { 
            turnDialForward();
        }
    }
    function menuFunc(code) {
        $("#selabel").css("color", "white");
        $("#nelabel").css("color", "white");
        $("#nwlabel").css("color", "white");
        $("#swlabel").css("color", "white");
        $("#nwlabel").text("AUDIO\xa0\xa0");
        $("#nelabel").text("\xa0\xa0\xa0A/C");
        $("#swlabel").text("BT\xa0\xa0");
        $("#selabel").text("\xa0\xa0CONFIG");
        if (code == 119) { //W
            currentMenu = "audio";
            //dialType = "vol"
            audioFunc();
        }
        else if (code == 99) { //C
            currentMenu = "audio";
            audioFunc();
        }
        else if (code == 111) { //O
            currentMenu = "ac";
            //dialType = "temp"
            acFunc();
        }
        else if (code == 109) { //M
            currentMenu = "audio";
            audioFunc();
        }
        else if (code == 103) { 
            turnDialBackward();
        }
        else if (code == 104) { 
            turnDialForward();
        }
    }
});