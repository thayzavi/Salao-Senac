document.getElementById('feedbackFrom').addEventListener('submit', function (event){event.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const data = document.getElementById('data').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    if(!nome){
        alert('Por favor, preencha o campo nome ');return;
    }
    if(!data){
        alert('Por favor, preencha o campo Data');return;
    }
    if(!mensagem){
        alert('Por favor, preencha o campo mensagem');return;
    }
    alert('Feedback enviado com sucesso!')

    document.getElementById('feedbackFrom').reset();

    
    });