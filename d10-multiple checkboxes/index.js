const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
let lastChecked;
function handleCheck(e) {
  //check if the shift key is down
  //And check that they are checking it
  let inBetween = false;
  if(e.shiftKey && this.checked) {
    //loop over every checkboxes
    checkboxes.forEach(checkbox => {
      console.log(checkbox);
      if(checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
        console.log('inbtn');
      }
      if(inBetween) {
        checkbox.checked = true;
      }
    });
  }
  lastChecked = this;
}
checkboxes.forEach(checkbox => checkbox.addEventListener("click",handleCheck));