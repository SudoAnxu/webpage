document.addEventListener("DOMContentLoaded", function() {
  var header = document.querySelector("header.fade-in");
  var head2 = document.querySelector("h2.fade-in");
  var generator = document.querySelector(".generator");
  var sceneText = document.getElementById("sceneText");

  // Fade in header and scene text
  setTimeout(function() {
    header.classList.add("active");
    head2.classList.add("active2");
    sceneText.classList.add("active");
  }, 500);

  // Hover effect on generator
  generator.addEventListener("mouseenter", function() {
    this.classList.add("hover-effect");
  });

  generator.addEventListener("mouseleave", function() {
    this.classList.remove("hover-effect");
  });

  // Generate random romantic scene
  var scenes = [
    "A candlelit dinner under the stars",
    "Walking hand in hand on a moonlit beach",
    "A surprise weekend getaway to a cozy cabin",
    "Watching a romantic movie together",
    "Dancing together in the rain"
  ];

  var generateButton = document.getElementById("generateButton");
  var mainContent = document.querySelector("main");

  generateButton.addEventListener("click", function() {
    var randomIndex = Math.floor(Math.random() * scenes.length);
    var randomScene = scenes[randomIndex];
    sceneText.innerText = randomScene;

    sceneText.classList.add("page-transition");
    setTimeout(function() {
      sceneText.classList.remove("page-transition");
    }, 1000);
  });
});
