const anoDeNascimento = document.querySelector('#ano-nascimento')
const btnDeVerificar = document.querySelector('#btn-verificar')
const descricaoDaPessoa = document.querySelector('#descricao')
const sexoMasculino = document.querySelector('#sexo-masculino')
const sexoFeminino = document.querySelector('#sexo-feminino')
const anoAtual = new Date()

const imagemPessoa = document.querySelector('#img-pessoa')

btnDeVerificar.addEventListener('click', () => {
    
    const idade = anoAtual.getFullYear() - anoDeNascimento.value
    let sexoSelecionado = "";
    
    if (sexoMasculino.checked) {
        sexoSelecionado = 'Homem'
        descricaoDaPessoa.textContent = (`Detectamos ${sexoSelecionado} com ${idade} anos.`)
        if (idade < 18) {
            imagemPessoa.style.backgroundImage = "url('src/imagens/crianca_homem.jpg')"
            imagemPessoa.style.display = 'block'
        } else if (idade < 40) {
            imagemPessoa.style.backgroundImage = "url('src/imagens/adulto_homem.jpg')"
            imagemPessoa.style.display = 'block'
        } else {
            imagemPessoa.style.backgroundImage = "url('src/imagens/idoso_homem.jpg')"
            imagemPessoa.style.display = 'block'
        }
    } else if (sexoFeminino.checked) {
        sexoSelecionado = 'Mulher'
        descricaoDaPessoa.textContent = (`Detectamos ${sexoSelecionado} com ${idade} anos.`)
        if (idade < 18) {
            imagemPessoa.style.backgroundImage = "url('src/imagens/crianca_mulher.jpg')"
            imagemPessoa.style.display = 'block'
        } else if (idade < 40) {
            imagemPessoa.style.backgroundImage = "url('src/imagens/adulto_mulher.jpg')"
            imagemPessoa.style.display = 'block'
        } else {
            imagemPessoa.style.backgroundImage = "url('src/imagens/idoso_mulher.jpg')"
            imagemPessoa.style.display = 'block'
        }
    }
})