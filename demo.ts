//Start notepad++ demo.ts
//copy the data
// tsc demo.ts
//node demo.js




interface Flight{
	flightId:number;
	flightName:String;
	flightCode:String;
	noOfSeats:number;
	flightType:String;
}

let flightData = {flightId:101,flightName:'Kingfisher',flightCode:'FL1001',noOfSeats:70,flightType:'General'};


function printFlightDetails(flightData : Flight){
	console.log("Flight Details : \nFlight Id : " + flightData.flightId + "\nFlight Name : " + flightData.flightName + "\nFlight Code : " + flightData.flightCode + "\nNoOfSeats : " + flightData.noOfSeats + "\nFlight Type : " + flightData.flightType);
}


printFlightDetails(flightData);
