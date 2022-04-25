// display the pets in list items
function displayPet(){
    // creating the text
    let petsDiv = document.getElementById("pets");  // this is a div on register.html
    let tmp=""; // clear the field  
    for(let i=0;i<petSalon.pets.length;i++){
        let pet = petSalon.pets[i]; // get each pet
        tmp+=""
        let li = document.createElement("li"); // creating the li tag
        let text = document.createTextNode(pet.name);
        li.appendChild(text);
        petsDiv.appendChild(li);
    }
    document.getElementById("pets").innerHTML=tmp;
}




// // creating the text
//     let petsDiv = document.getElementById("pets");  // this is a div on register.html

// display the pets in cards
function displayCards(){
    let tmp="";   
    for(let i=0;i<petSalon.pets.length;i++){
        let pet = petSalon.pets[i];
        tmp+=`
        <div class="pet" id="${pet.id}">
            <div class="pet-header">
                <h4>${pet.name}</h4>
                <button onclick="deletePet(${pet.id});">🗑️</button>
            </div>
            <label>Age: ${pet.age}</label>
            <label>Gender: ${pet.gender}</label>
            <label>Breed: ${pet.breed}</label>
            <label>Color: ${pet.color}</label>
            <label>Owner: ${pet.owner}</label>
            <label>Phone: ${pet.phone}</label>
        </div> 
        `;       
    }
    document.getElementById("pets").innerHTML=tmp;
}


// display in table
function displayTable(){
    let tr="";   
    for(let i=0;i<petSalon.pets.length;i++){
        let pet = petSalon.pets[i];
        tr+=`
        <table class="petTable" id="petTable">
            <td><h4>${pet.name}</h4></td>
            <td>Age: ${pet.age}</td>
            <td>Gender: ${pet.gender}</td>
            <td>Breed: ${pet.breed}</td>
            <td>Owner: ${pet.owner}</td>
            <td>Phone: ${pet.phone}</td>
        </table> 
        `; 
    }
    document.getElementById("pets").innerHTML=tmp;
}

