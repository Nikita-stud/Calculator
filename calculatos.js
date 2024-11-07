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


      if(buttons[i].value === "+"){

      }
      if(buttons[i].value === "-"){

      }
      if(buttons[i].value === "*"){

      }
      if(buttons[i].value === "/"){
    
      }
      if(buttons[i].value === "dot"){
        amount += `.`;
      }
      if(buttons[i].value === "delete"){
        amount = amount.slice(0, -1);
      }
      if(buttons[i].value === "="){

      }


      screen.innerText = `${amount}`;
    })
  }
}
displayScreen()





// for(let i=0; i< buttons.length; i++){

//   buttons.addEventListener("click", () =>{

//     let calculatorInputs = {
//       firstNumber: "",
//       secondNumber: "",
//       operator: "",
//       result: calculate(this.firstNumber, this.secondNumber, this.operator)
//     };
//     console.log(calculatorInputs.result)

//     function calculate(firstNumber, secondNumber, operator){
//       switch(operator){
//         case `+`:
//           return firstNumber + secondNumber;
//         case `-`:
//           return firstNumber - secondNumber;
//         case `*`:
//           return firstNumber * secondNumber;
//         case `/`:
//           return firstNumber / secondNumber;
//         default:
//           return null;
//       }
//     }

//     function displayValue(calculatorInputs){
//       screen.innerText = calculatorInputs.result;
//     }
//     displayValue()
//   })
// }