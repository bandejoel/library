// window.addEventListener('load', () => {

//     // Via Query parameters - GET
//     /* const params = (new URL(document.location)).searchParams;
//     const name = params.get('name');
//     const surname = params.get('surname'); */

//     // Via local Storage
//     /* const name = localStorage.getItem('NAME');
//     const surname = localStorage.getItem('SURNAME'); */
    
//     const name = sessionStorage.getItem('NAME');
//     // const surname = sessionStorage.getItem('SURNAME');
    
//     document.getElementById('result-name').innerHTML = name;
//     // document.getElementById('result-surname').innerHTML = surname;

// })
function passvalues(){
    var firstname = document.getElementById("info").value;

localStorage.setItem("textvalue",firstname);
return false;

}

document.getElementById("result").innerHTML = localStorage.getItem("textvalue");



