function calcularChurrasco() {
    const homens = parseInt(document.getElementById('homens').value);
    const mulheres = parseInt(document.getElementById('mulheres').value);
    const criancas = parseInt(document.getElementById('criancas').value);

    const carneHomem = 0.5;
    const carneMulher = 0.3;
    const carneCrianca = 0.2;

    const frangoHomem = 0.2;
    const frangoMulher = 0.2;
    const frangoCrianca = 0.1;
    const linguicaHomem = 0.2;
    const linguicaMulher = 0.2;
    const linguicaCrianca = 0.2;

    const refrigeranteHomem = 0.3;
    const refrigeranteMulher = 0.4;
    const refrigeranteCrianca = 0.2;

    const cervejaHomem = 0.8;
    const cervejaMulher = 0.5;

    const totalCarne = (homens * carneHomem) + (mulheres * carneMulher) + (criancas * carneCrianca);
    const totalFrango = (homens * frangoHomem) + (mulheres * frangoMulher) + (criancas * frangoCrianca);
    const totalLinguica = (homens * linguicaHomem) + (mulheres * linguicaMulher) + (criancas * linguicaCrianca);
    const totalRefrigerante = (homens * refrigeranteHomem) + (mulheres * refrigeranteMulher) + (criancas * refrigeranteCrianca);
    const totalCerveja = (homens * cervejaHomem) + (mulheres * cervejaMulher);
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
        <p>Carne bovina &#x1F969: ${totalCarne.toFixed(2)} kg</p>
        <p>Frango &#x1F357: ${totalFrango.toFixed(2)} kg</p>
        <p>Linguiça &#x1F953: ${totalLinguica.toFixed(2)} kg</p>
        <p>Refrigerante &#x1F964: ${totalRefrigerante.toFixed(2)} L</p>
        <p>Cerveja &#x1F37A: ${totalCerveja.toFixed(2)} L</p>
    `;
}
