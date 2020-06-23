var obj = {
    name: 'abc',
    age:'18',
    sex:'male'
}

var obj1 = {}
function clone(orgin, target){
    var target = target || {};
    for(var prop in orgin){
        target[prop] = orgin[prop];
    }
    return target;
}

clone(obj,obj1);