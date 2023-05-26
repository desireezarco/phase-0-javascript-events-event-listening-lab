// const input = document.getElementById("button");
// input.addEventListener("click", function () {
//   alert("I was clicked!");
// });

// //second argument//
// function() {
//     alert('I was clicked!');
//   }

// //passing the function name as the second arg to addEventListener() rather than function itself://

//   const input = document.getElementById('button');

//   function clickAlert() {
//     alert('I was clicked!');
//   }

//   input.addEventListener('click', clickAlert);

// document.querySelector("#button").addEventListener("click", alertMe);

// function alertMe() {
//   return alert("Hi, I was clicked!");
// }

function addingEventListener() {
  const input = document.getElementById("button");
  input.addEventListener("click", function () {
    alert("I was clicked!");
  });
}
addingEventListener();
