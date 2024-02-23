function buttonpush() {
  let numb = document.getElementById('tabs')
  let trimmedValue = numb.value.trim()
  // Remove espaços em branco e verifica se é vazio ou igual a '0'
  let texxt = document.getElementById('showus')

  if (
    trimmedValue === '' ||
    trimmedValue === '0' ||
    parseFloat(trimmedValue) < 0 ||
    isNaN(parseFloat(trimmedValue))
  ) {
    window.alert('[ERRO] Somente números positivos acima de zero!')
  } else {
    let x = Number(numb.value)
    let mult = 1

    // Limpa o conteúdo anterior
    texxt.innerHTML = ''

    while (mult <= 10) {
      let result = x * mult
      texxt.innerHTML += `${x} x ${mult} = ${result}<br>`
      mult++
    }
    texxt.innerHTML += 'Fim do cálculo.'
  }
}

/*A condição if (numb.value === '' || numb.value.trim() === '0') verifica se o valor é uma string vazia ou se, após a remoção dos espaços em branco, é igual a '0'. Isso deve cobrir os casos em que o usuário digita zero.
Para corrigir isso, você pode ajustar a condição para verificar se o valor é nulo ou se contém apenas espaços em branco. Você pode usar trim() para remover espaços em branco antes de verificar o comprimento.  */
