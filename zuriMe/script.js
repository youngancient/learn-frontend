document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".subdiv button").forEach((atag) => {
    atag.onclick = () => {
      let m = atag.innerHTML.toLowerCase();
      if (m == "hobbies") {
        document.querySelector(".ul-hobbies").style.display = "block";
      } else if (m == "capabilities") {
        document.querySelector(".ul-capabilities").style.display = "block";
      } else if (m == "interests") {
        document.querySelector(".ul-interests").style.display = "block";
      }
      document
        .querySelector("footer")
        .scrollIntoView({ behavior: "smooth", block: "end" });
    };
  });
  document.querySelector(".fa-bars").onclick = () => {
    document.querySelector(".alinks").style.display = "flex";
  };
});
