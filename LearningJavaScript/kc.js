function myFunction() {
    //document.getElementById('demo').innerHTML = Date()
    var x = document.getElementById("myText").value;
    if (isNaN(x)) {
        alert(x + " is not a nunmber");
    } else {
        if (x > 5) {
            alert(x + " is bigger than 5");
        } else if (x < 5) {
            alert(x + " is less than 5");
        }
    }
}


// Name and age validation Function.
function validation() {
    
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    
    if (name === '' || age === '') {
        alert("Please fill all fields...!!!!!!");
        return false;
    } else if (isNaN(age)) {
        alert("Enter Age in numbers...!!!!!!");
        return false;
    } else  {
        display();
        return true;
    }

}
function display(){
 let name=document.getElementById("name").value;
 let Age=document.getElementById("age").value;
 let City=document.getElementById("City").value;
  let Country=document.getElementById("Country").value;
  alert("Name:"+name+"     "+"Age:"+Age+"     "+"City:"+City+"    "+"Country:"+Country);
}