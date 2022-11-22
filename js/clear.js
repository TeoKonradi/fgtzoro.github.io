const free = [];

async function deleteID() {

    console.log("0");
    let data;
    const res = await fetch(link0)
    .then((res) => res.json())
    .then((res) => data = res)
    console.log(data);
    let length = data.length;
    console.log(`Lenght: ${length}`);
    let lastEnteredUser = data[length - 1];
    console.log(lastEnteredUser);



    const clearID = document.getElementById("deleteById").value;

    console.log(`clearID: ${clearID}`);
    console.log(`type: ${typeof(clearID)}`);

    async function takeID() {
        let deleteUrl = `${link0}/${clearID}`; 
        console.log(deleteUrl);

        let options = { method: 'DELETE' };

        chosenId = await fetch(deleteUrl, options)
        .then(response => response.json)
        .then(response => secData = response)

    }

    IdArray = data.map(IDS => IDS.id);
    changed = IdArray.join(", ");

    console.log(IdArray);
    console.log(typeof(clearID));

    console.log(666);
    console.log(changed);

    clearIdNum = Number(clearID);

    console.log(typeof(clearIdNum));


    // console.log(typeof(IdArray[0]));

    const textGreaterThan = 'U enter id greater than exist';
    const textDoesntExist = "Id wich u have entered doesn't exist";
    const textChosenIdCorrectly = `Chosen Id correctly deleted: ${clearID}`;


    if (lastEnteredUser.id < clearID) {
        console.log('U enter id greater than exist');
        document.getElementById('postSuccessfully').innerHTML = textGreaterThan;
    }
    else if (!(IdArray.includes(clearIdNum))) {
        console.log(`Id wich u have entered doesn't exist`)
        document.getElementById('postSuccessfully').innerHTML = textDoesntExist;
    }
    else{
        takeID();
        console.log(`Chosen Id correctly deleted: ${clearID}`);
        document.getElementById('postSuccessfully').innerHTML = textChosenIdCorrectly;
    }
    
    async function clearIdFetch() {
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
    
    clearIdFetch(link0);
}

async function clearApi() {
    const textApiAC = 'Api already clear';
    const textApiSuccessfullyCleared = 'Api successfully cleared';


    console.log("0");
    let data;
    const res = await fetch(link0)
    .then((res) => res.json())
    .then((res) => data = res)
    console.log(data);
    let length = data.length;
    console.log(`Lenght: ${length}`);
    let lastEnteredUser = data[length - 1];
    console.log(lastEnteredUser);

    async function takeID(clearID) {
        let deleteUrl = `${link0}/${clearID}`; 
        console.log(deleteUrl);
        console.log('hui');
        let options = { method: 'DELETE' };
        
        chosenId = await fetch(deleteUrl, options)
        .then(response => response.json)
        .then(response => secData = response)

    }
    
    let IdArray = data.map(IDS => IDS.id);
    
    console.log(IdArray);

    let IdArrayLenght = IdArray.length;
    console.log(IdArrayLenght);

    let LastId = IdArray[IdArrayLenght - 1];

    if(length === 0) {
        console.log('Api already clear');
        document.getElementById('postSuccessfully').innerHTML = textApiAC;
    }
    else {
        for(let clearID = 1; clearID <= LastId; clearID++){
            takeID(clearID);
        }
        document.getElementById('postSuccessfully').innerHTML = textApiSuccessfullyCleared;
    }

    async function clearApiFetch() {
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
    
    clearApiFetch(link0);
}








