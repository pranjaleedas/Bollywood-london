var searchBar = document.getElementById("search-bar");
searchBar.addEventListener("input", searchFunctionality);

// check what search term has been entered
function searchFunctionality() {
     //removing any spaces before or after the user's input
     //converting user's input to lower case to match the string
     userInput = searchBar.value.trim().toLowerCase(); 
  
    //run the function displayResults for each party card
    var partyCards = document.querySelectorAll(".card");
      partyCards.forEach(displayResults);
    }
    

function displayResults(partyCard) {

    // if search box is empty, show the party card
    if (userInput.length == 0) {
      partyCard.classList.remove("hidden");
    
    } else {

        // retrieve the title of party stored in tag 'h3'
        var partyTitle = partyCard.querySelector(".card h3").textContent.toLowerCase();
        if (partyTitle.includes(userInput)) {
            partyCard.classList.remove("hidden");
        } else {
            partyCard.classList.add("hidden");
        }
    }
}