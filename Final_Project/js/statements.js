//Creating a button and running a function if said button is clicked.
let statementButton = document.getElementById("statements");
let statementContainer = document.createElement("div");
statementContainer.id = "statementcontainer";
function onClick3(event){
event.preventDefault();
let inputElement = document.getElementById("keyword");
let userInput = inputElement.value;
//Fetching some bill data from the ProPublica Congress API.
fetch('https://api.propublica.org/congress/v1/statements/search.json?query=' + userInput,{//opening fetch function.
	headers: new Headers({//opening headers.
		"X-API-Key": "rGAZ6C77Cn1BKLZ0qmYlQNpylB6e2EJG5f50g4pS"
	})//closing headers.
})//closing fetch function.
	.then(function(res) {
		return res.json();
	
	})
	//Displaying bill information and links onto the page.
	.then(function(data) {
    console.log(data);
    let statementArray = data.results;
    for(let i  = 0; i < statementArray.length; i++){
    let stateInfo = document.createElement("p");
    stateInfo.innerText = statementArray[i].statement_type;
    let stateTitle = document.createElement("p");
    stateTitle.innerText = statementArray[i].subjects[0].title;
    let stateURL = document.createElement("a");
    stateURL.textContent = "More about the statement."
    stateURL.href = statementArray[i].subjects[0].URL;
    let stateData = document.createElement("div");
    stateData.appendChild(stateInfo);
    stateData.appendChild(stateTitle);
    stateData.appendChild(stateURL);
    statementContainer.appendChild(stateData);
    document.body.appendChild(statementContainer);

    }
	
	}
	)
	
	.catch(function(error) {
		console.log("ERROR:", error);
	
	});
	
}
statementButton.addEventListener("click", onClick3);