const screen = document.getElementById("screen-value");
const buttons = document.getElementsByTagName("button");

function displayScreen(){
  let amount = "";

  for(let i=0; i< buttons.length; i++){
    buttons[i].addEventListener("click", ()=>{

      console.log(buttons[i].value)

      if(!isNaN(buttons[i].value)){
        amount += buttons[i].value;
        console.log(amount)
      }
      if(amount.length > 10){
        amount = `TOO LARGE`;
      }


      if(buttons[i].value === "plus"){

      }
      if(buttons[i].value === "minus"){

      }
      if(buttons[i].value === "multiply"){

      }
      if(buttons[i].value === "divide"){
    
      }
      if(buttons[i].value === "dot"){
        amount += `.`;
      }
      if(buttons[i].value === "delete"){
        amount = amount.slice(0, -1);
      }
      if(buttons[i].value === "equal"){

      }


      screen.innerText = `${amount}`;
    })
  }
}
displayScreen()