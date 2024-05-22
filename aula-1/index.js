console.log("Hello World!");

function verificar(idade) {
    if (idade < 18) {
        return ("criança");
    } else if (idade < 90) {
        return ("adulto");
    } else {
        return ("dinossauro");
    }
}

console.log(verificar(9));


const fruta = "limão";

switch (fruta) {
    case "laranja":
        console.log("laranja");
        break;
    case "limão":
        console.log("limão");
        break;
    case "melancia":
        console.log("melancia");
        break;
    default:
        console.log("nada");
}