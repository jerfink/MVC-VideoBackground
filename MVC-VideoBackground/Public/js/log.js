
(function($) {
    $.log = function(value) {
        if (console)
            console.log(value);
    }
    $.log.group = function(value) {
        if (console && console.group)
            console.group(value);
    }
    $.log.groupEnd = function(value) {
        if (console && console.groupEnd)
            console.groupEnd(value);
    }
})(jQuery);