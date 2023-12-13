var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-content");

function opentab(tname){
    for (tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tname).classList.add("active-tab");
}
function openmenu(){
    var sidemenu=document.getElementById("sidemeu");
    sidemeu.style.right="0";
}
function closemenu(){
    var sidemenu=document.getElementById("sidemeu");
    sidemeu.style.right="-200px";
}
const scriptURL = 'https://script.google.com/macros/s/AKfycbyL2leWxqBo5oBVf-n-VNx7puPTiX6vSUGbMmFnDyJA8v8nWe2hFV9NBNxwYThTBs2n/exec'
const form = document.forms['submit-to-google-sheet']
  
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        document.getElementById("msg").innerHTMl = "Message Sent Successfully";
        setTimeout(function(){
            document.getElementById("msg").innerHTMl = "";
        },5000)
        form.reset()
        })
    .catch(error => console.error('Error!', error.message))
})