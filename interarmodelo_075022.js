function Test(){
    var txtd = document.querySelector('input#txtidd')
    var idad = document.querySelector('div#ja')
    var pd = document.querySelector('div#wr')
    var idade = Number(txtd.value)
    var an = 2024
    var ano = 2024 - idade

    if(idade >= 2024 || idade < 1924){
        alert('Ano invalido')
    }else{
    pd.innerHTML = `</br>Verificado</br>Tens <strong>${ano}anos</strong></br> `
    if(ano < 18){
        idad.innerHTML = `Menor de idade nao entra`
    }else{
        idad.innerHTML = `Bem Vindo Senhor(a)`   
    } }
}