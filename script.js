let detailsForm = document.querySelector("#destinationDetailsForm")

detailsForm.addEventListener("submit", handleFormSubmit );

//USING ARROW FUNCTIONS
// let handleFormSubmit = (event) => {
//     event.preventDefault()
//     console.log(2)
// }

function handleFormSubmit(event){
    event.preventDefault();

    var destName = event.target.elements['name'].value;
    var destLocation = event.target.elements['location'].value;
    var destPhoto = event.target.elements['photo'].value;
    var destDescription = event.target.elements['description'].value;
    

    for (let i = 0; i < detailsForm.length; i++) {
      detailsForm.elements[i].value = "";  
    };
 
    //CREATE CARD HERE
    var destCard = createDestinationCard(destName,destLocation,destPhoto,destDescription)

    var wishList = document.querySelector("#destinationContainer");

    if ( wishList.children.length === 0 ) {
       document.querySelector("#title").textContent = 'My Wish List'  
    };

    document.querySelector("#destinationContainer").appendChild(destCard)

}

function createDestinationCard(name, location, photoURL, description){
   //TRY RETURN HTML 

    var card = document.createElement("div");
    card.className = 'card'

    var img = document.createElement('img');
    img.setAttribute('alt', name);
    
    var constantPhotoUrl ='images/signpost.jpg';

    if (photoURL.length === 0 ) {
        img.setAttribute('src', constantPhotoUrl);
    }
    else{
        img.setAttribute('src', photoURL);
    }

    card.appendChild(img)

    var cardBody = document.createElement('div');
    cardBody.className = 'cardBody'
     
    var cardTitle = document.createElement("h3");
    cardTitle.innerText = name;
    cardBody.appendChild(cardTitle)

    var cardSubTitle = document.createElement("h4");
    cardSubTitle.innerText = location;
    cardBody.appendChild(cardSubTitle)

    if (description.length !== 0) {
        var cardText = document.createElement('p')
        cardText.className = 'cardText'
        cardText.innerText = description
        cardBody.appendChild(cardText)
    }

    var cardDeletBtn = document.createElement("div")
    cardDeletBtn.innerText = 'Remove'

    cardDeletBtn.addEventListener("click", removeDestination)
    cardBody.appendChild(cardDeletBtn)

    function removeDestination(evt){
        var card = evt.target.parentElement.parentElement;
        card.remove()
    }

    card.appendChild(cardBody)

    return card
};
