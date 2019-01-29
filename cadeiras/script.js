$(document).ready(function() {
    $("#cTimeType").onchange(function() {
        if ($("#cTimeType").val == "s")
            $("#cTime").html = "<option disabled selected>Escolher</option><option value="1">1</option><option value="2">2</option>";
        else
            $("#cTime").html = "<option disabled>Escolher</option><option value="2" selected>2</option>";
    })
});