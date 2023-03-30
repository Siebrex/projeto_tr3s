function meuEscopo(){
    const form = document.querySelector('.forma');
    const forms = document.querySelector('.formaA');
    const resultado =document.querySelector('.resultado');
    const resultados =document.querySelector('.resultados');

    const pessoas = [];

    function recebeEventoform (evento){
        evento.preventDefault();
        const nome_container = form.querySelector('.nome_container');
        const celular = form.querySelector('.celular');
        const email = form.querySelector('.email');

        const nome_containere = forms.querySelector('.nome_container');
        const celulare = forms.querySelector('.celular');
        const emaile = forms.querySelector('.email');



        pessoas.push({
            nome_container: nome_container.value,
            celular: celular.value,
            email: email.value,
            nome_container: nome_containere.value,
            celular: celulare.value,
            email: emaile.value
        });
        console.log(pessoas);
        resultado.innerHTML += `<br></br><p> ${nome_container.value} seus dados foram enviados.</p>`;

        console.log(pessoas);
        resultados.innerHTML += `<br></br><p> ${nome_container.value} seus dados foram enviados.</p>`
    }
    
    form.addEventListener('submit', recebeEventoform);
    forms.addEventListener('submit', recebeEventoform);

}
meuEscopo();