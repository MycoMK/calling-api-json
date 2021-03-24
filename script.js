// console.log('connected')

const appContainer = document.querySelector('#app');
// function fecthData(){
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//         .then((response) => response.json())
//         .then((data) => {data.forEach((objInDataArr) => {
//              const p = document.createElement('p');
//              p.textContent =  objInDataArr.title;
//              appContainer.appendChild(p)
//             }); 
      
//     });
// }
//     fecthData()

 
fetch(`https://reqres.in/api/users`)
.then (res => res.json())
.then((data) =>{
    console.log(data)
    let output = '<h3>Users</h3>';
    data.data.forEach(function(user){
        console.log(user)
        output += `<ul>
             
            <li>Name: ${user.first_name}</li>
            <li>Email: ${user.email}</li>
        </ul>
            `;
            
    });
    document.querySelector('#app').innerHTML = output;
    })
