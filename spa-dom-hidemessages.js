const rm = document.getElementById("container");

rm.addEventListener("click", function (e) {
  if (e.target.className == "remove-button" || e.target.closest("p") == "p") {
    let box = e.target.closest(".pane");
    // box.remove();
    box.style.display = "none";
  }
});

// rm.forEach(function () {
//   container.addEventListener("click", function (e) {
//     let removeP = document.querySelector(".pane");
//     removeP.innerHTML = "";
//     e.stopPropagation();
//   });
// });
