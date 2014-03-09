$(document).ready(function(){
    var angle = 0;
    
    var back = new Array();
    var funcArray = new Array();
    var dispArray= new Array();
    var menuFuncArray = new Array();
    var audioFuncArray = new Array();
    
    menuFuncArray[0] = audioFunc;
    audioFuncArray[99] = auxFunc;
    audioFuncArray[111] = btFunc;
    audioFuncArray[119] = fmFunc;
    audioFuncArray[109] = amFunc;
    
    
    
    
    function auxFunc() {
        $("#nwlabel").css("color", "red");
        $("#nelabel").css("color", "white");
        $("#selabel").css("color", "white");
        $("#swlabel").css("color", "white");
    }
    function btFunc() {
        $("#nelabel").css("color", "red");
        $("#nwlabel").css("color", "white");
        $("#selabel").css("color", "white");
        $("#swlabel").css("color", "white");
    }
    function fmFunc() {
        $("#swlabel").css("color", "red");
        $("#nelabel").css("color", "white");
        $("#selabel").css("color", "white");
        $("#nwlabel").css("color", "white");
    }
    function amFunc() {
        $("#selabel").css("color", "red");
        $("#nelabel").css("color", "white");
        $("#nwlabel").css("color", "white");
        $("#swlabel").css("color", "white");
    }
    function audioFunc() {
        $("#nwlabel").text("AUX\xa0\xa0\xa0\xa0");
        $("#nelabel").text("\xa0\xa0\xa0\xa0BT");
        $("#swlabel").text("AM\xa0\xa0\xa0\xa0");
        $("#selabel").text("\xa0\xa0\xa0\xa0FM");
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
        });
    }
    $(document).keypress(function(e){
        if (e.keyCode == 119) {
            audioFunc();
        }
        else if (e.keyCode == 99) {
            audioFunc();
        }
        else if (e.keyCode == 111) {
            audioFunc();
        }
        else if (e.keyCode == 109) {
            audioFunc();
        }
   
        else if (e.keyCode == 103) { 
            angle -= 40;
            $("#dial").rotate(angle);
        }
        else if (e.keyCode == 104) { 
            angle += 40;
            $("#dial").rotate(angle);
        }
    });
});