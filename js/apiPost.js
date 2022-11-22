

// async function apiPost1() {
//     fetch(link0, {
//     method: 'POST',
//     headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(
//         {
//             "Name": "JOhn",
//             "Age": 23,
//             "Dick lenght": 6.5,
//             "Salary": 120000
//         }
//     )
// })
// .then(response => response.json())
// .then(response => console.log(JSON.stringify(response)))
// }


async function apiPost2() {


let Name;
let Age;
let DickLenght;
let Salary;

const postSuccessfullyUpoladed = 'Post successfully uploaded';

Name = document.getElementById("Name").value;
Age = document.getElementById("Age").value;
DickLenght = document.getElementById("DickLenght").value;
Salary = document.getElementById("Salary").value;

document.getElementById('postSuccessfully').innerHTML = postSuccessfullyUpoladed;

    fetch(link0, {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(
        {
            "Name": Name,
            "Age": Age,
            "DickLenght": DickLenght,
            "Salary": Salary
        }
    )
})
.then(response => response.json())
.then(response => console.log(JSON.stringify(response)))

console.log(1);

async function postIdFetch() {
    console.log('hui');
    let options = { method: 'GET' };
    
    ArrayIDs = await fetch(link0, options)
    .then((ArrayIDs) => ArrayIDs.json())
    
    console.log(ArrayIDs)

    data = ArrayIDs.map(aID => aID.id)
    changed = data.join(", ");

    console.log(changed);

    document.getElementById("existsIDs").innerHTML = `Exists Id's: ${changed}`;
}

postIdFetch(link0);

}


