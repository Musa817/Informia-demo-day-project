//Creating a button and running a function if said button is clicked.
let searchButton = document.getElementById("search");
let billInfo = document.createElement("div");
billInfo.id = "info";
let billSpace = document.getElementById("Bills");
//Logging how many clicks user has.
//let  
function onClick(event){
event.preventDefault();
let inputElement = document.getElementById("keyword");
let userInput = inputElement.value;
//Fetching some bill data from the ProPublica Congress API.
fetch(' https://api.propublica.org/congress/v1/bills/search.json?query=' + userInput,{//opening fetch function.
	headers: new Headers({//opening headers.
		"X-API-Key": "rGAZ6C77Cn1BKLZ0qmYlQNpylB6e2EJG5f50g4pS"
	})//closing headers.
})//closing fetch function.
	.then(function(res) {
		return res.json();
	
	})
	//Displaying bill information and links onto the page.
	.then(function(data) {
	 	let billArray  = data.results[0].bills;
		for(let i = 0; i < billArray.length; i++){
		let billTitle = document.createElement("p");
		let billSummary = document. createElement("p");
		let billUrl = document.createElement("a");
		let URL = billArray[i].congressdotgov_url;
		billUrl.textContent = "More about the bill.";
		billUrl.href = URL;
		billTitle.innerText = "Title:" + " " + billArray[i].title;
		billSummary.innerText = "Summary:" + " " + billArray[i].summary_short;
		if (billArray[i].summary_short == "") {
			billSummary.innerText = "Summary:" + " N/A"
		}
		billUrl.href = billArray[i].congressdotgov_url;
        billInfo.appendChild(billTitle);
     	billInfo.appendChild(billSummary);
		billInfo.appendChild(billUrl);
		billSpace.appendChild(billInfo);
		}

		console.log(billArray[7]);
		inputElement.value = " ";
	
	}
	)
	
	.catch(function(error) {
		console.log("ERROR:", error);
	
	});
	billInfo.innerHTML = " ";
}
searchButton.addEventListener("click", onClick);