// function kali (a,b) {
//     return a*b;
// }
// var hasil=kali(9,5);
// console.log(hasil);

// const tambah = (x,y)=> x + y;
// console.log(tambah(7,8));

// function string (a,b){
//     return a + ' ' +b;
// };
// let jadi = string ('halo', 'angel');
// console.log (jadi);

// function greet (name){
// console.log ('halo, '+name+'!');
// };
// greet ('angel');

// let person={
//     fullName:function(){
//         return this.firstName + ' ' + this.lastName;
//     }
// }

// let person1={
//     firstName:"Angelica",
//     lastName:"Novita"
// }
// let fullName = person.fullName.call(person1);
// console.log(fullName);


// let person = {
//     fullName: function(kota, negara) {
//         return this.firstName + " " + this.lastName + " sedang di " + kota + ", " + negara + ".";
//     }
// }

// let person1 = {
//     firstName: "Angelica",
//     lastName: "Novita"                                    
// }

// let fullName = person.fullName.apply(person1, ["Semarang", "Indonesia"]);
// console.log(fullName);

let person ={
    name:' Angel',
    city: ' Semarang',
    greet: function() {
        return 'halo' + this.name + ',' + 'selamat datang di' + this. city + '!';
    }
};
    let greetAngel = person.greet.bind(person);
    console.log (greetAngel()); 


