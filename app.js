//number 1,2,Infinity, 1.3, -2
//string'hello' "hello" `hello`
//BigInt
//symbol
//object [], {}
//underfined
//null
//boolean true false 

//var let const

// 'hello Dima'
// let sayHello = 'hello'
// console.log(`${sayHello} Dima`)

// + - / * ** ++ -- +=n (увеличивает с шагом N). > <  >=  <= % == === != !== isNaN() () 
// || () &&

// console.log (3%2)
// console.log (NaN===Nan)
// console.log (Object.is(NaN, NaN))
// console.log (0/-3)
// console.log (-0===+0)
// console.log (Object.is(-0, +0))
// console.log (null>0)
// console.log (null==0)
// console.log (null>=0)

// const num=1
// // num=2 const нельзя переписать
// if (num===1){
//   console.log(true)
// } else if (num===3){
//   console.log("Hello")
// }else{
//     console.log('')
// }


// alert ('hello');

// const sayHi = prompt("введите число")
// console.log (sayHi)

// console.log(String(1))

// let num2=20
// console.log(num2.toString())

// const getNumber = +prompt('enter your number')
// if (getNumber%2 === 0){
//    alert ('even')
// }else{
//    alert ('odd')
// }

// getNumber%2 === 0?  alert ('even'): alert ('odd')  //тернарный оператор

// switch ( getNumber) {
//     case 10:
//          console.log ('10');
//          breake
//     case 20:
//          console.log ('20');
//          breake
//     default:
//          console.log ('default');
// }

// console.log (false || 1 || false)
// console.log (null, false, 0 , "", undefined, NaN) // Отрицательные значения в JS

// console.log (!true)

// const enterNun = +prompt ('enter')
// if (1 || 3) {
//     console.log ('1')
// } if (2&&5) {
//     console.log ('2')
// }

// if (confirm('Вы админ?') === false) {
//     alert ("Вы не дали ответ")
// } else {
//    const getPassword = promt('Введите пароль')
//     if (getPassword ===false) {
//         alert ("Вы не ввели пароль")
//      } else {
//         if (getPassword==='admin'){
//          alert ("Вы Admin")
//         }else{
//             alert ("Вы не Admin")
//         }
    

//      }
//     }
// }

// const getAdmin = confirm ('admin?')
// console.log (getAdmin)

// if ( getAdmin===true){
//     const getPassword = prompt ('enter password')
//     if (getPassword ==="admin") {
//         alert ('admin')
//     } else{
//         console.log ('no')
//     }
// }

const getAge=prompt('Введите Ваш возраст')

if (getAge<19 && getAge > 0) {
    alert ('young')
} else if (getAge > 18 && getAge < 51) {
    alert ('middle')    
} else if (getAge > 50 && getAge < 101) {
    alert ('old') 
} else if (getAge < 0 || getAge > 100) {
    alert ('error') 
}