//data para cadastro
let colocarData = new Date();
let date = new Date('2022-01-10');

if(colocarData < date) {
    console.log("Prosseguir com cadastro")
}else{
    console.log("Não foi possivel continuar seu cadastro, data inválida.")
}

// Idade do cadastrado
let idadeParaCadastro =27
if(idadeParaCadastro >=18) {
    console.log("Prosseguir com cadastro")
}else{
    console.log("Não foi possivel continuar seu cadastro, idade mínima não permitida")
}

//Quantidade de participantes
let listaCadastrados = ["João","Maria","José","Pedro","Thiago"]
if (listaCadastrados.length <= 99) {
    console.log("Cadastro Finalizado")
}else {
    console.log("Não é possivel concluir seu cadastro, número máximo de participantes atingido.")
}