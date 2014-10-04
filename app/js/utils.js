var Utils = {};

Utils.keyCodeIs = function(keyCode){
    return function(event) {return event.keyCode === keyCode;};
};

Utils.keyUpEvents = function(keyCode){
    return $(document).asEventStream('keyup').filter(Utils.keyCodeIs(keyCode));
};

Utils.keyDownEvents = function(keyCode){
    return $(document).asEventStream('keydown').filter(Utils.keyCodeIs(keyCode));
};

function always(value) { return function() { return value }}
Utils.keyStateProperty = function(keyCode) {
    return Utils.keyDownEvents(keyCode).map(always("DOWN"))
        .merge(Utils.keyUpEvents(keyCode).map(always("UP"))).toProperty("UP");
};
