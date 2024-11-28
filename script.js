//imputs and InnerHTML

//.innerHTML command:
// 1. gets the content of an HTML element. EG. <p> click <a>here</a> </p>
// the innerHTML of the paragraph is:  click <a>here</a>
//the innerHTML of the anchor <a> is: here
//2. sets the content of an HTML element.
//value command: retrieves the content of an input element
//IMPORTANT* value command should always be used in a button

document.getElementById("order-btn").addEventListener("click", getOrder);

function getOrder() {
  //input: retrieve users data
  let topping1 = document.getElementById("top1input").value;
  let topping2 = document.getElementById("top2input").value;
  let size = document.getElementById("size-input").value;

  // processing: make output statement
  let output = `Your ${size} pizza with ${topping1} and ${topping2} will be ready in 20 minutes.`;

  //output: display output in the "your order" section of the website
  document.getElementById("order-output").innerHTML = output;
}
