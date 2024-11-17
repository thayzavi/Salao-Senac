function validaloginForm(){
    const email = document.getElementById(`email`).value;
    const senha = document.getElementById(`senha`).value;

    if (email === ''){
        errorMessage.textContent = 'Por favor, insira seu email .';
        return false;
    }
    if (senha.length < 6){
        errorMessage.textContent = 'A senha deve ter pelo meno 6 digitos'
        return false;
    }
    alert('Login realizado com sucesso!')
    window.location.href = 'agendamento.html'
    return true;
}


function validarCadastro(){
    const nomeCompleto = document.getElementById('nomeCompleto').value;
        const contato = document.getElementById('contato').value;
        const senha = document.getElementById('senhaCadastro').value;
        const confirmarSenha = document.getElementById('confirmarSenha').value;

        if (nomeCompleto === '') {
            errorMessage.textContent = 'Por favor, insira seu nome completo.';
            return false;
        }
        if (contato === ""){
            alert("Preecha o campo telefone.");
            return false;
        }
        
        if (senha.length < 6) {
            errorMessage.textContent = 'A senha deve ter pelo menos 6 caracteres.';
            return false;
        }
        if (senha !== confirmarSenha){
            errorMessage.textContent = 'As senhas não correspondem';
            return false;
        }

        alert('Cadastro realizado com sucesso!')
        window.location.href = "agendamento.html";
        return true;
}