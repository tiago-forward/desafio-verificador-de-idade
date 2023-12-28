const anoDeNascimento = document.querySelector('#ano-nascimento')
const btnDeVerificar = document.querySelector('#btn-verificar')
const descricaoDaPessoa = document.querySelector('#descricao')
const sexoMasculino = document.querySelector('#sexo-masculino')
const sexoFeminino = document.querySelector('#sexo-feminino')
const anoAtual = new Date()
const imagemPessoa = document.querySelector('#img-pessoa')

btnDeVerificar.addEventListener('click', () => {
    const idade = anoAtual.getFullYear() - anoDeNascimento.value
    imagemPessoa.style.backgroundImage = ''

    if (anoDeNascimento.value == 0 || anoDeNascimento.value > anoAtual.getFullYear()) {
        alert('[ERRO] Preencha os dados corretamente!')
        imagemPessoa.style.display = 'none'
    } else if (sexoMasculino.checked) {
        imagemPessoa.style.display = 'block'
        descricaoDaPessoa.textContent = (`Detectamos um Homem com ${idade} anos.`)
        if (idade < 18) {
            imagemPessoa.style.backgroundImage = "url('src/imagens/crianca_homem.jpg')"
        } else if (idade < 40) {
            imagemPessoa.style.backgroundImage = "url('src/imagens/adulto_homem.jpg')"
        } else {
            imagemPessoa.style.backgroundImage = "url('src/imagens/idoso_homem.jpg')"
        }
    } else if (sexoFeminino.checked) {
        imagemPessoa.style.display = 'block'
        descricaoDaPessoa.textContent = (`Detectamos uma Mulher com ${idade} anos.`)
        if (idade < 18) {
            imagemPessoa.style.backgroundImage = "url('src/imagens/crianca_mulher.jpg')"
        } else if (idade < 40) {
            imagemPessoa.style.backgroundImage = "url('src/imagens/adulto_mulher.jpg')"
        } else {
            imagemPessoa.style.backgroundImage = "url('src/imagens/idoso_mulher.jpg')"
        }
    }
})