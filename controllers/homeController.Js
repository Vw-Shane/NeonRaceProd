function myFunction() {
    alert("Function called!"); // add this line
    var message = document.getElementById("message").value;
    console.log(message);
}
module.exports = {
    myFunction();
}