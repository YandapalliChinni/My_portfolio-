var tablinks=document.getElementsByClassName("tab-links");
var tabcontents=document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
// google sheet contact form
  const scriptURL = 'https://script.google.com/macros/s/AKfycbwW8itX5hBrIb3ibRebYrKomG46D1_vI8HoAMvqYisJZoM-oDeTbX-TWkO6GsEb3NT1vA/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg=document.getElementById("msg")
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML="Message sent successfully"
        setTimeout(function(){
            msg.innerHTML=""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
  window.addEventListener('scroll', function() {
    var header = document.querySelector('#header');
    header.classList.toggle('scrolled', window.scrollY > 0);
});
