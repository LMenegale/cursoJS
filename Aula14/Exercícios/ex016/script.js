function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')
   
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = 'Contando...<br>'
        res.innerHTML += `\u{1f449}`
        let i = Number(ini.value) // Convertendo de string para inteiro
        let f = Number(fim.value) // Convertendo de string para inteiro
        let p = Number(passo.value) // Convertendo de string para inteiro
        if (p <= 0) {
            window.alert('Passo inválido. Considerando PASSO 1')
            p = 1
        }
        if (i < f){
            // Contagem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1f449}`
            }
        } else {
            // Contagem decrescente
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1f449}`
            }
        }
        res.innerHTML += `\u{1f3c1}`       
    }
}