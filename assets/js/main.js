console.log("Started Loading Js")
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.ipify.org?format=json");
xhr.onload = function() {
  if (xhr.status === 200) {
    const ip = JSON.parse(xhr.responseText).ip;
    let typed = new Typed(".auto-ty",{
    strings: ["_jcrealblakman",`${ip}`,"Real",],
    typeSpeed: 3,
    backSpeed: 3,
    loop: true
})
  }
};
xhr.send();

  //loader
  $(window).on("load",function(){
    $(".loader-wrapper").fadeOut('fast');
});
console.log("Successfully Finished Loading")
let list = ["./assets/img/pro.PNG","./assets/img/rel.webp",'https://files.jcmainclr.xyz/uploads/IMG_0076.JPG','https://files.jcmainclr.xyz/uploads/IMG_1709.JPG','https://files.jcmainclr.xyz/uploads/IMG_1708.JPG','https://files.jcmainclr.xyz/uploads/21.png','https://files.jcmainclr.xyz/uploads/rel.png','https://files.jcmainclr.xyz/uploads/3.jpg','https://files.jcmainclr.xyz/uploads/4.jpg','https://files.jcmainclr.xyz/uploads/5.webp','https://files.jcmainclr.xyz/uploads/rel1.png','https://files.jcmainclr.xyz/uploads/real-load.gif']
document.getElementById("load-random").innerHTML = `<img src='${list[Math.floor(Math.random ()*  list.length) ]}' width='400'>`
