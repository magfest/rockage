var badgeTypeChanged = function() {
    // Set the kicked-in amount to either 0 or the supporter/season level
    if ($("#supporter").is(":checked")){
        $("input[name='amount_extra']").val({{ SUPPORTER_LEVEL }});
    } else if ($("#season_supporter").is(":checked")){
        $("input[name='amount_extra']").val({{ SEASON_LEVEL }});
    } else {
        $("input[name='amount_extra']").val(0);
    }

    // Rockage-specific
    if ($("#student").is(":checked")) {
        $("input[name='is_student']").val(1);
    } else {
        $("input[name='is_student']").val(0);
    }
};