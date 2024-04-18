const gift = document.getElementById('gift')
const caixa = document.getElementById('caixa_pres')
const bolo = document.getElementById('bolo')
const surprise = document.getElementById('surprise')

gift.addEventListener("click", hello_world)
bolo.addEventListener("click", resetar)

const Cclasses = caixa.classList
const Sclasses = surprise.classList


function hello_world() {
    Cclasses.add("display_none")
    Cclasses.remove("d-flex")
    Sclasses.remove("display_none")
}

function resetar() {
    Cclasses.remove("display_none")
    Cclasses.add("d-flex")
    Sclasses.add("display_none")
}