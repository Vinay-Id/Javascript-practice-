console.log("ajax");
let fetchbtn = document.getElementById("fetchbtn");
fetchbtn.addEventListener("click", buttonClickHandler);
let backupbtn = document.getElementById("backupbtn");

function buttonClickHandler() {
  console.log("you clicked fetch btn");

  //intantiate an xhr object
  const xhr = new XMLHttpRequest();

  //open the object
//   xhr.open("GET", "data.txt", true);
  xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);

//   xhr.open("POST", "https://jsonplaceholder.typicode.com/todos/1", true);
// xhr.getResponseHeader('content-type','application/json')
  // what to do on progress (optional)
  xhr.onprogress = () => console.log("onprogress");

  //ready state
  xhr.onreadystatechange=()=>console.log('readystate ',xhr.readyState);

  //what to do when response is ready
  xhr.onload = function () {
    if (this.status == 200) {
      console.log(this.responseText);
    } else {
      console.log("some error occurs");
    }
  };
  //send the request
  xhr.send();
}
console.log('we r done');