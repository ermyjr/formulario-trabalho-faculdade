const cpfInput = document.getElementById('cpf');

cpfInput.addEventListener('input', formatarCPF);

function formatarCPF() {

  const cpf = cpfInput.value;

  cpf = cpf.replace(/\D/g, '');

  if (cpf.length > 3) {
    cpf = cpf.substring(0, 3) + '.' + cpf.substring(3);
  }
  if (cpf.length > 7) {
    cpf = cpf.substring(0, 7) + '.' + cpf.substring(7);
  }
  if (cpf.length > 11) {
    cpf = cpf.substring(0, 11) + '-' + cpf.substring(11);
  }

  cpfInput.value = cpf;
}


function getCpfSemFormatacao() {
  const cpfSemFormatacao = cpfInput.value.replace(/\D/g, '');
  return cpfSemFormatacao;
}


const formulario = document.querySelector('form');
formulario.addEventListener('submit', function (event) {
  const cpfSemFormatacao = getCpfSemFormatacao();
  console.log('CPF sem formatação:', cpfSemFormatacao);

});


const telefoneInput = document.getElementById('tel');
const celularInput = document.getElementById('phone');


telefoneInput.addEventListener('input', formatarTelefone);
celularInput.addEventListener('input', formatarCelular);


function formatarTelefone() {
  const telefone = telefoneInput.value;
  telefone = telefone.replace(/\D/g, ''); // Remover caracteres não numéricos
  telefone = telefone.replace(/^(\d{2})(\d{4})(\d{4})$/, '($1) $2-$3'); // Aplicar a formatação (xx) xxxx-xxxx
  telefoneInput.value = telefone;
}

// Função para formatar o valor do celular
function formatarCelular() {
  const celular = celularInput.value;
  celular = celular.replace(/\D/g, ''); // Remover caracteres não numéricos
  celular = celular.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3'); // Aplicar a formatação (xx) xxxxx-xxxx
  celularInput.value = celular;
}

// Obter o valor do telefone sem formatação para enviar ao banco de dados
function getTelefoneSemFormatacao() {
  const telefoneSemFormatacao = telefoneInput.value.replace(/\D/g, '');
  return telefoneSemFormatacao;
}

// Obter o valor do celular sem formatação para enviar ao banco de dados
function getCelularSemFormatacao() {
  const celularSemFormatacao = celularInput.value.replace(/\D/g, '');
  return celularSemFormatacao;
}


const formulario = document.querySelector('form');
formulario.addEventListener('submit', function (event) {
  const telefoneSemFormatacao = getTelefoneSemFormatacao();
  const celularSemFormatacao = getCelularSemFormatacao();
  console.log('Telefone sem formatação:', telefoneSemFormatacao);
  console.log('Celular sem formatação:', celularSemFormatacao);
 
});

// Função para validar o formulário
function validarFormulario() {
    // Obter referência para o formulário
    const formulario = document.querySelector('form');
  
    // Obter todos os campos obrigatórios, exceto os de checkbox no segundo fieldset
    const camposObrigatorios = formulario.querySelectorAll(
      'input[required]:not(fieldset.checkbox input[type="checkbox"])'
    );
  
    // Validar os campos obrigatórios
    for (const i = 0; i < camposObrigatorios.length; i++) {
      const campo = camposObrigatorios[i];
  
      // Verificar se o campo está vazio
      if (campo.value.trim() === '') {
        // Adicionar classe de erro ao campo
        campo.classList.add('erro');
        // Exibir uma mensagem de erro (pode ser personalizada)
        alert('Preencha todos os campos obrigatórios.');
        // Impedir o envio do formulário
        return false;
      }
    }
  
    // Permitir o envio do formulário caso todos os campos estejam preenchidos
    return true;
  }
  
  // Adicionar evento de submit ao formulário
  const formulario = document.querySelector('form');
  formulario.addEventListener('submit', function (event) {
    // Chamar a função de validação do formulário
    if (!validarFormulario()) {
      // Impedir o envio do formulário caso a validação falhe
      event.preventDefault();
    }
  });
  