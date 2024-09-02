a = document.querySelectorAll('.copia')

a.forEach((a)=> {
    a.addEventListener('click', ()=> {
        let text = a.textContent;
        navigator.clipboard.writeText(text).then(function(){
            alert(`Texto copiado`)
        }).catch(function(err) {
            console.error('erro ao copiar', err)
        })
    })
})

document.addEventListener("DOMContentLoaded", function () {
    const nav = document.getElementById("navegacao");
    const mainContent = document.getElementById("conteudo-principal");
  
    window.addEventListener("scroll", function () {
      if (window.scrollY > mainContent.offsetTop) {
        nav.classList.remove("hide");
        nav.classList.add("show");
      } else {
        nav.classList.remove("show");
        nav.classList.add("hide");
      }
    });
  });
  