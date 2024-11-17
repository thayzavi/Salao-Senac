function calcularDuracaoTotal(servicos){
    return servicos.reduce((total, servico) => {
        const duracao = parseInt(servico.split('|')[1],10);
        return total + duracao;
    }, 0);
}
function verificarConflito(horaInicial, duracaoTotal) {
    const [horas, minutos] = horaInicial.split(':').map(Number);
    const horaFinal = new Date();
    horaFinal.setHours(horas);
    horaFinal.setMinutes(minutos + duracaoTotal);

    if (horaFinal.getHours() >= 18) {
        return true;
    }
    return false;
}

    document.getElementById("agendamentoForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const cliente = document.getElementById("cliente").value;
    const telefone = document.getElementById('telefone').value;
    const email = document.getElementById('email').value;
    const profissional = document.getElementById("profissional").value;
    const servicosSelecionados = Array.from(document.getElementById("servico").selectedOptions).map(option => option.value);
    const data = document.getElementById("data").value;
    const hora = document.getElementById("hora").value;
    const errorMessage = document.getElementById("error-message");
    const resultado = document.getElementById("resultado");

    // Validação básica
    if (cliente === "" || profissional === "" ||servicosSelecionados.length === 0|| data === "" || hora === "" || telefone === "" || email == "") {
        errorMessage.style.display = "block";
    } 

    const duracaoTotal = calcularDuracaoTotal(servicosSelecionados);

    if (verificarConflito(hora, duracaoTotal)){
        alert("CONFLITO DE HORÁRIO! ESCOLA OUTRO HORÁRIO");
        return;
    }
   

    errorMessage.style.display = "none";
    resultado.innerHTML = `<strong>Agendamento realizado com sucesso! U m E-mail sera enviado com um lembrete do seu agendamento</strong><br>
        Cliente: ${cliente}<br>
        Telefone : ${telefone}<br>
        E-mail : ${email}<br>
        Profissional : ${profissional}<br>
        Serviços: ${servicosSelecionados.map(s => s.split('|')[0]).join(', ')}<br>
        Data: ${data}<br>
        Horário: ${hora}
        Duração Total: ${duracaoTotal} minutos`;
    resultado.style.display = "block";

});