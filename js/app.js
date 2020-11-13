$(function() {
    var hex = true;
    $(".selection__btn").on("click", function() {
        $(".selection__btn").removeClass("active");
        $(this).addClass("active");    
        if ($("#hex").hasClass("active")) {
            hex = true
            $("#current-color").text(RgbToHex($("#background").css("background-color"))); 
        } else if($("#rgb").hasClass("active")) {
            hex = false;
            $("#current-color").text($("#background").css("background-color")); 
        }
    });

    $("#click-here").on("click", function() {
        $("#background").css("background-color", randomHex());
        if (hex) {
            $("#current-color").text(RgbToHex($("#background").css("background-color"))); 
        } else {
            $("#current-color").text($("#background").css("background-color")); 
        }  
    });
});

function randomHex() {
    var chars = '0123456789ABCDEF'.split('');
    var hex = '#';
    for (var i = 0; i < 6; i++) {
        hex += chars[Math.floor(Math.random() * 16)];
    }
    return hex;
}

function RgbToHex(color) {
    var a = color.split("(")[1].split(")");
    a = a[0].split(",");
    var b = a.map(function(x) {
       x = parseInt(x).toString(16);
       return x;
    });
    return "#" + b.join("");
}