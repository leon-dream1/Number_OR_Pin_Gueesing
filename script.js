
// Generate random Number
document.getElementById("number_generate_btn").addEventListener("click", function(){
  //Empty result
  document.getElementById("fail").style.display = "";
  document.getElementById("success").style.display = "";


  //generate random Number
  var number = Math.floor(Math.random()*(9999 - 1000 + 1) ) + 1000;
   
  document.getElementById("number_input").value = number;

})


document.getElementById("parent_button").addEventListener("click", function(event){
   // get the number that was Clicked
    const number = event.target.innerText;


    //check the all thing
    if(number == 'C'){
      document.getElementById("button_input").value = "";
    }
    else if(number == '<'){
      var inputNumber = document.getElementById('button_input').value;// "1234" After Split -> ["1", "2", "3", "4"]    
      // const previousTypedNumber = typedNumberField.value;
      const digits = inputNumber.split('');
      digits.pop(); //["1", "2", "3"]
      const remainingDigits = digits.join('');//"123"
      document.getElementById('button_input').value = remainingDigits;

    }
    else if(number == "Submit"){
      document.getElementById("button_input").value = "";
    }
    else{
      const input_number = document.getElementById("button_input").value; //""

      var pin = input_number + number;
      document.getElementById("button_input").value = pin;
   
    }
  
})

var count = 3;
document.getElementById("submit_button").addEventListener("click", function(event){
  //get the Pin
  var userPin = document.getElementById("button_input").value;
  var randomPin = document.getElementById("number_input").value;

  //Check pin is matching or not
  if(userPin == randomPin && userPin != "" && randomPin != ""){
    document.getElementById("success").style.display = "block";
    document.getElementById("button_input").value = "";
    document.getElementById("number_input").value = "";
  }
  else if(userPin != "" && randomPin != ""){
    document.getElementById("fail").style.display = "block";
    document.getElementById("button_input").value = "";
    count--;
    if(count >= 0)
     document.getElementById("chance").innerText = count+" Try left";
  }

  document.getElementById("number_input").value = "";
  
})