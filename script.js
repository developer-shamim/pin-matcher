
    // task -1: generating random numbers

    let randomNumber = 0;
    function pinGenarator() {
            randomNumber = Math.floor(1000 + Math.random() * 9000);
            document.getElementById("random-number").value = randomNumber;
            let fail = document.getElementById("fail-alert");
            fail.style.display = " none";
            let success = document.getElementById("success-alert");
            success.style.display = "none"; 
        };
            
    // task-2: input generated pin using number pad
function number_write(x)
{
  var text_box = document.getElementById("number");
  if(x>=0 && x<=9)
  {
    if(isNaN(text_box.value))
    text_box.value = 0;
    text_box.value = (text_box.value * 10)+x;
  }
}
function number_clear()
{
  document.getElementById("number").value = 0;
}
function number_c()
{
  var text_box = document.getElementById("number");
  var num = text_box.value;
  var num1 = num%10;
  num -= num1;
  num /= 10;
  text_box.value = num;
}
// for submit button aciton and alert
    
const submitBtn = document.getElementById("submitButton");
submitBtn.addEventListener("click", function(){
           let pinInput =  document.getElementById("random-number").value;
          let submitInput = document.getElementById("number").value;
          if (submitInput === pinInput) {
                    let success = document.getElementById("success-alert");
                    success.style.display = "block";
                    let fail = document.getElementById("fail-alert");
                    fail.style.display = "none";
                    document.getElementById("random-number").value = "";
                    document.getElementById("number").value = "";
                        
          }
          else{
                    let fail = document.getElementById("fail-alert");
                    fail.style.display = "block";
                    let success = document.getElementById("success-alert");
                    success.style.display = "none";
                    document.getElementById("random-number").value = "";
                    document.getElementById("number").value = "";
                   
          }
          
});

