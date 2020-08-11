//Creating a button and running a function if said button is clicked.
let memberButton = document.getElementById("members");;
let inputElement = document.getElementById("keyword");
let memberInfo = document.createElement("div");
let memberContainer = document.createElement("div");
memberContainer.id = "info";
let memberImgR = document.createElement("img");
memberImgR.src = "https://a.scpr.org/i/51a5f89bff486658b8f3b8a3cd956564/221771-full.jpg";
memberImgR.style.width = "5%";
let memberImgD = document.createElement("img");
memberImgD.style.width = "5%";
memberImgD.src = "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.capoliticalreview.com%2Fwp-content%2Fuploads%2F2013%2F06%2FDemocrat-Donkey.jpg&f=1&nofb=1"

//Logging how many clicks user has.
//let  
function onClick2(event){
event.preventDefault();
//Fetching some data from the ProPublica Congress API.

fetch('https://api.propublica.org/congress/v1/116/senate/members.json',{//opening fetch function.
	headers: new Headers({//opening headers.
		"X-API-Key": "rGAZ6C77Cn1BKLZ0qmYlQNpylB6e2EJG5f50g4pS"
	})//closing headers.
})//closing fetch function.
	.then(function(myJson) {
		return myJson.json();
	
	})
	//Displaying bill information and links onto the page.
	.then(function(dataJson) {
		 let memberArray = dataJson.results[0].members;
		 for(let i = 0; i < memberArray.length; i++){
           if(inputElement.value == memberArray[i].last_name){
			   let memberName = document.createElement("p");
			   memberName.innerText = "Senator" + " " + memberArray[i].last_name;
			   let memberParty = document.createElement("p");
			   let memberimgC = document.createElement("div");
			    memberimgC.id = "imgcontainer";
			   if(memberArray[i].party == "R"){
				memberParty.innerText = "Political Party:" + " " + "Republican";
				memberimgC.appendChild(memberParty);
				memberimgC.appendChild(memberImgR);
			}
			else if(memberArray[i].party == "D"){
				memberParty.innerText = "Political Party:" + " " + "Democrat";
				memberimgC.appendChild(memberParty);
				memberimgC.appendChild(memberImgD);
			}
			   memberNumber = document.createElement("p");
			   memberNumber.innerText = "Phone number:" + " " + memberArray[i].phone;
			   let memberState = document.createElement("p");
			   memberState.innerText = "Senator of:" + " " + memberArray[i].state;
			   memberInfo.appendChild(memberName);
			   memberInfo.appendChild(memberimgC);
			   memberInfo.appendChild(memberNumber);
			   memberInfo.appendChild(memberState);
			   memberContainer.appendChild(memberInfo);
			   document.body.appendChild(memberContainer);
			   console.log(dataJson);
			   
		   }			 
		 }
	 
		 
		}
		
	)
	
	.catch(function(err) {
		console.log("ERROR:", err);
	
	});
	memberInfo.innerHTML = " ";	
}

memberButton.addEventListener("click", onClick2);