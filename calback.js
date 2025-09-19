function user(name, age, callback) {
    console.log("I'm " + name + ' And Im ' + age + " years  old")
    return callback;
}
function call(fn) {
    fn();
}
call(user('Gokul', 20, function () {}
  ))