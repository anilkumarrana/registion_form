var addressObject ={
    "INDIA": {
        "Assam": ["Bongaigaon", "Jorhat", "Kokrajhar", "Lakhimpur", "Tinsukia", "Kamrup Metropolitan"],
        "Goa": ["North Goa", "South Goa"],
        "Himachal Pradesh": ["Kangra", "Kullu", "Mandi", "Shimla", "Lahaul and Spiti", "Kinnaur"],    
        "Kerela": ["Kollam", "Malappuram", "Thiruvananthapuram", "Kannur", "Palakkad"],    
        "Tripura": ["Dhalai", "North Tripura", "South Tripura", "West Tripura"],    
        "Sikkim": ["Gangtok", "Mangan", "Namchi", "Geyzing", "Pakyong", "Soreng"],   
        "West Bengal": ["Malda", "Alipurduar", "Howrah", "Kolkata", "Bankura", "Nadia"],
        "Delhi": ["Central Delhi", "East Delhi", "New Delhi", "North Delhi", "South Delhi", "West Delhi"]        
      },
      "USA": {
        "Arizona": ["Gila", "Yuma", "Apache", "Mohave", "Santa Cruz", "Greenlee"],
        "California": ["San Francisco", "Los Angeles", "Sacramento", "San Diego", "Riverside", "San Jose"],
        "Georgia": ["Atlanta", "Augusta", "Columbus", "Savannah"],
        "Michigan": ["Watersmeet", "Holland", "Flint", "Holly", "Dearborn"],
        "New York": ["Shirley", "Brooklyn", "Manhattan", "Bronx", "Yonkers"],
        "Washington": ["Pierce", "Yakima", "Thurston", "Snohomish"],
        "New Mexico": ["Alamogordo", "Santa Fe", "Albuquerque"]
      },
      "BANGLADESH": {
          "Barisal": ["Barisal", "Barguna", "Bhola", "Pirojpur", "Jhalokati", "Patuakhali"],
          "Khulna": ["Bagerhat", "Jashore", "Khulna", "Narail", "Satkhira", "Meherpur"],
          "Rajshahi": ["Natore", "Sirajganj", "Pabna", "Bogura", "Naogaon", "Joypurhat"],
          "Rangpur": ["Dinajpur", "Kurigram", "Rangpur", "Thakurgaon", "Panchagarh", "Gaibandha"],
          "Sylhet": ["Habiganj", "Moulvibazar", "Sunamganj", "Sylhet"],
          "Dhaka": ["Gazipur", "Tangail", "Rajbari", "Gopalganj", "Faridpur", "Narayanganj"],
          "Chittagong": ["Rangamati", "Cox's Bazar", "Chattogram", "Lakshmipur", "Chandpur", "Brahmanbaria"]
      }
}


window.onload = function(){
    
    var countrySel = document.getElementById("Country_name");
    var stasteSel = document.getElementById("state_name");
    var districSel = document.getElementById("district")

    for (var x in addressObject) {
        countrySel.option[countrySel.option.length]= new option(x,x);
    }
     countrySel.onchange = function(){
        //empty districts and state dropdown
        districSel.length = 1;
        stasteSel.length=1;
     

        //display   correct values
        for(var y in addressObject[this.value]){
            stasteSel.option[stasteSel.option.length] = new option(y,y);    
        }
     }
   stasteSel.onchange =function(){
    districSel,length = 1;
  }
  var z = addressObject[countrySel.value][this.value];
  console.log(z);
  for(var i=0; i<z.length; i++){
    districSel.option[districSel.option.length] = new option[z[i],z[i]];
  }
}

