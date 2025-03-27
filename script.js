
function irPara(pagina) {
    window.location.href = pagina;
}


function login() {
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

    if (email && senha) {
        alert("Login realizado com sucesso!");
        irPara("loja.page");
    } else {
        alert("Por favor, preencha todos os campos!");
    }
}


function cadastrar() {
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    let confirmarSenha = document.getElementById("confirmarSenha").value;

    if (nome && email && senha && confirmarSenha) {
        if (senha === confirmarSenha) {
            alert("Cadastro realizado com sucesso!");
            irPara("loja.page");
        } else {
            alert("As senhas não coincidem!");
        }
    } else {
        alert("Por favor, preencha todos os campos!");
    }
}


let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];


function adicionarAoCarrinho(produto, preco, quantidade) {
    let item = {
        produto: produto,
        preco: preco,
        quantidade: parseInt(quantidade)
    };
    carrinho.push(item);
    localStorage.setItem("carrinho", JSON.stringify(carrinho)); 
    alert(`${quantidade}x ${produto} adicionado ao carrinho!`);
}


function irParaCompra() {
    if (carrinho.length > 0) {
        irPara("compra/compra.html");
    } else {
        alert("Seu carrinho está vazio!");
    }
}


function carregarCarrinho() {
    let cartItems = document.getElementById("cart-items");

    if (carrinho.length === 0) {
        cartItems.innerHTML = "<p>Seu carrinho está vazio.</p>";
    } else {
        cartItems.innerHTML = carrinho.map(item => 
            `<p>${item.quantidade}x ${item.produto} - R$${(item.quantidade * item.preco).toFixed(2)}</p>`
        ).join("");
    }
}


function confirmarCompra() {
    alert("Compra realizada com sucesso!");
    localStorage.removeItem("carrinho");
    irPara("loja.page");
}
