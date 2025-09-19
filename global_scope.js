// let name="pavi",mark=450;
// function User()
// {
//     let name="kavi",mark=890
//     console.log(name,mark)
// }
// User()
// console.log(name,mark)

if (true) {
  let c = 30;
  const d = 40;
  var e = 50;
}
console.log(globalThis.e); // undefined
console.log(typeof d); // undefined
console.log(e);        // 50 (var is function/global scoped)
