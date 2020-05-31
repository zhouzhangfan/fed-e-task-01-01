setTimeout(function () {
    var a = "hello ";
    setTimeout(function () {
        var b = "lagou ";
        setTimeout(function () {
            var c = "I love U";
            console.log(a + b + c);    
        }, 10);
    }, 10);
}, 10);

Promise.resolve("hello ").then(a => {
    return a + 'logou '
}).then(b => {
    return b + "I love U"
}).then(c => {
    console.log(c)
})