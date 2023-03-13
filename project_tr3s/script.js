function meuEscopo(){
    const form = document.querySelector('.forma');
    const resultado =document.querySelector('.resultado');

    const pessoas = [];

    function recebeEventoform (evento){
        evento.preventDefault();
        const nome_container = form.querySelector('.nome_container');
        const celular = form.querySelector('.celular');
        const email = form.querySelector('.email');


        pessoas.push({
            nome_container: nome_container.value,
            celular: celular.value,
            email: email.value
        });
        console.log(pessoas);
        resultado.innerHTML += `<br></br><p> ${nome_container.value} seus dados foram enviados.</p>`
    }
    
    form.addEventListener('submit', recebeEventoform);

}
meuEscopo();