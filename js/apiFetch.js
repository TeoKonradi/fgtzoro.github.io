


// async function apiFetch() {
//     console.log("0");
//     let data;
//     const res = await fetch(link0)
//     .then((res) => res.json())
//     .then((toJson) => data = toJson[0])
//     console.log(data)
//     result = data.posts
//     console.log(result)
//     console.log('1')
//     end = result.id
//     console.log('2')
//     console.log(end)
//     console.log('3')

//     document.getElementById("apiFetch").innerHTML = `apiFetch: ${end}`;
// }


// async function apiFetch1() {
//     console.log('0');
//     let data;
//     const res = await fetch(link1)
//     .then((res) => res.json())
//     .then((toJson) => data = toJson)
//     console.log(data)
// }





// async function apiFetch2() {
//     console.log("0")
//     const result = await fetch(link2)
//     .then(result => result.json())
//     console.log(result)
// }



// async function fetchUsers() {    
//     const res = await fetch(link2)
//     console.log(res);

//     const data = await res.json()
//     console.log(data);

//     const names = data.map(users => `<div>name: ${users.name}, adress: ${users.address.street}</div>`)
//     changed = names.join("")
//     console.log(changed)
//     document.getElementById("txt").innerHTML = `Users: ${changed}`;
// };

async function apiFetch3() {
    console.log("0");
    const SuccessfullyFetched = 'Successfully Fetched';

    const res = await fetch(link0)
    .then((res) => res.json())


    console.log(res);
    let length = res.length;
    console.log(length);

    data = res.map(aID => aID.id)
    changed = data.join(", ");

    console.log(changed);


    let user = res[length - 1];
    console.log(user);
    
    document.getElementById("Name_value").innerHTML = `Name: ${user.Name}`;
    document.getElementById("Age_value").innerHTML = `Age: ${user.Age}`;
    document.getElementById("DickLenght_value").innerHTML = `Dick Lenght: ${user.DickLenght}`;
    document.getElementById("Salary_value").innerHTML = `Salary: ${user.Salary}`;

    document.getElementById("existsIDs").innerHTML = `Exists Id's: ${changed}`;

    document.getElementById('postSuccessfully').innerHTML = SuccessfullyFetched;

    // document.getElementById("apiFetch").innerHTML = end;
}








