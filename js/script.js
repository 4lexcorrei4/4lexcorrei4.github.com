/* -------- MENU -------- */

function showHideMenu() {
    if (window.matchMedia('(max-device-width: 480px)').matches) {
        if ($('#sidebar').css("display") == "none") {
            $('#mobile-menu-open').css("display", "none");
            $('#mobile-menu-close').css("display", "block");
        } else {
            $('#mobile-menu-open').css("display", "block");
            $('#mobile-menu-close').css("display", "none");
        }
        $('#sidebar').slideToggle();
    }
}

function showHideSubmenu(element) {
    if ($("#submenu-" + element).css("display") == "none")
        $("#arrow-" + element).css("transform", "rotate(90deg)");
    else
        $("#arrow-" + element).css("transform", "rotate(0)");
    $("#submenu-" + element).slideToggle();
}

/* -------- COURSES -------- */

function showHideCourses(type) {
    var types = ["courses-online-contents", "courses-summer-contents"];
    for (var thisType = 0; thisType < types.length; thisType++) {
        if (types[thisType] == type)
            $("#" + types[thisType]).slideToggle();
        else if ($("#" + types[thisType]).css("display") == "block")
            $("#" + types[thisType]).slideToggle();
    }
}

/* -------- DETAILS -------- */

function showHideDetails(block) {
    $("#" + block + "-details").slideToggle();
}