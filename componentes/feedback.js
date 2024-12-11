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
    
    // Estrla//
    var stars = document.querySelectorAll('.star-icon');
                        
    document.addEventListener('click', function(e){
    var classStar = e.target.classList;
    if(!classStar.contains('ativo')){
        stars.forEach(function(star){
        star.classList.remove('ativo');
        });
        classStar.add('ativo');
        console.log(e.target.getAttribute('data-avaliacao'));
    }
});