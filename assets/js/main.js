console.log("Started Loading Js")
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.ipify.org?format=json");
xhr.onload = function() {
  if (xhr.status === 200) {
    const ip = JSON.parse(xhr.responseText).ip;
    let typed = new Typed(".auto-ty",{
    strings: ["_JcIsReal#3206",`${ip}`,"Dai Racis -kyle",],
    typeSpeed: 3,
    backSpeed: 3,
    loop: true
})
  }
};
xhr.send();

  //loader
  $(window).on("load",function(){
    $(".loader-wrapper").fadeOut("slow");
});
console.log("Successfully Finished Loading")
