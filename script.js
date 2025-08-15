(function(){
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".menu a").forEach(a=>{
    if(a.getAttribute("href") === path) a.classList.add("active");
  });
})();

function initContactForm(){
  const form = document.getElementById("contact-form");
  if(!form) return;
  const success = document.getElementById("success");

  form.addEventListener("submit", (e)=>{
    e.preventDefault();
    success.style.display = "block";
    form.reset();
    setTimeout(()=> success.style.display = "none", 5000);
  });
}
document.addEventListener("DOMContentLoaded", initContactForm);
