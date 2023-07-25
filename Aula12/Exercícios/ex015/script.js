function verificar() {
    var data = new Date
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = "Homem"
            if (idade >= 0 && idade < 10) {
                img.setAttribute ('src', 'logo-aquarela.png')
            } else if(idade < 21) {
                img.setAttribute ('src', 'logo-ctAlexSilva.png')
            } else if (idade < 50) {
                img.setAttribute ('src', 'logo-doCampo.png')
            } else {
                img.setAttribute ('src', 'logo-uberEvandro.png')
            }
        } else if (fsex[1].checked) {
            genero = "Mulher"
            if (idade >= 0 && idade < 10) {
                img.setAttribute ('src', 'logo-laMotta.png')
            } else if(idade < 21) {
                img.setAttribute ('src', 'logo-recantoCaipira.png')
            } else if (idade < 50) {
                img.setAttribute ('src', 'logo-lmAcabamentos.png')
            } else {
                img.setAttribute ('src', 'logo-csm.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos!`
        res.appendChild(img)
    }
}