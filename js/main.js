/*Código para ocultar a opção: quantidade de refrigarantes*/
$(document).ready(function () {
    $('#refrigerante').change(function () {
        if ($(this).val() === 'semRefrigerante') {
            $('#qntRefri').hide();
            $('label[for="qntRefri"]').hide();
        } else {
            $('#qntRefri').show();
            $('label[for="qntRefri"]').show();
        }
    });

    // Ocultar inicialmente se a opção "Não precisa de refrigerante" estiver selecionada
    if ($('#refrigerante').val() === 'semRefrigerante') {
        $('#qntRefri').hide();
        $('label[for="qntRefri"]').hide();
    }
});
/*fim do código para ocultar a opção: quantidade de refrigarantes*/



/*Define a quantidade de sabores da pizza pequena*/
window.addEventListener('DOMContentLoaded', (event) => {
    const selectElement = document.getElementById('tamanho');
    const qntSaboresElement = document.getElementById('qntSabores');

    selectElement.addEventListener('change', (event) => {
        if (selectElement.value === 'pequena') {
            qntSaboresElement.value = 1;
            qntSaboresElement.readOnly = true;
        } else {
            qntSaboresElement.value = '';
            qntSaboresElement.readOnly = false;
        }
    });
});
/*fim da definição da quantidade de sabores da pizza pequena*/

/*Define a quantidade máxima de sabores*/
let inputSabores = document.getElementById("qntSabores");
let numeroMaximo = 2;

inputSabores.addEventListener("change", function () {
    // Obtenha o valor do input convertendo-o para um número
    let valor = parseInt(inputSabores.value);

    // Verifique se o valor está acima do limite máximo
    if (valor > numeroMaximo) {
        // Defina o valor máximo no input
        inputSabores.value = numeroMaximo;
    }
});
/*fim do código que define a quantidade máxima de sabores*/


/*Armazena a quantidade de pizzas que o usuário pode selecionar*/
$(document).ready(function () {
    let saboresXPizzaInput = $("#saboresxpizza");
    let qntSaboresInput = $("#qntSabores");
    let qntPizzasInput = $("#qntPizzas");

    // Atualiza o campo "Teste" com o resultado da multiplicação
    function updateSaboresXPizza() {
        let sabores = parseInt(qntSaboresInput.val());
        let pizzas = parseInt(qntPizzasInput.val());
        let resultado = sabores * pizzas;
        saboresXPizzaInput.val(resultado);
    }

    // Chama a função de atualização sempre que houver alterações nos inputs
    qntSaboresInput.on("change", updateSaboresXPizza);
    qntPizzasInput.on("change", updateSaboresXPizza);
});
/*fim do código que armazena a quantidade de pizzas que o usuário pode selecionar*/

/*Muda a quantidade*/
$(document).ready(function () {
    let addBtn = $(".adicionar");
    let subBtn = $(".subtrair");
    let qtyBox = $(".qtyBox");
    let saboresXPizzaInput = $("#saboresxpizza"); // Campo de teste

    addBtn.on("click", function () {
        let qty = $(this).siblings(".qtyBox");
        let maxQty = parseInt(saboresXPizzaInput.val()); // Usar o valor de saboresXPizzaInput

        if (qty.val() < maxQty) {
            qty.val(parseInt(qty.val()) + 1);
        }

        // Verifica se algum botão atingiu a quantidade máxima
        let totalQty = getTotalQty();
        let maxTotalQty = getMaxTotalQty();

        if (totalQty >= maxTotalQty) {
            // Oculta o ícone de adição de todos os botões
            $(".icons .adicionar").hide();
        } else {
            // Exibe o ícone de adição de todos os botões
            $(".icons .adicionar").show();
        }
    });

    subBtn.on("click", function () {
        let qty = $(this).siblings(".qtyBox");

        if (qty.val() <= 0) {
            qty.val(0);
        } else {
            qty.val(parseInt(qty.val()) - 1);
        }

        // Exibe o ícone de adição de todos os botões
        $(".icons .adicionar").show();
    });

    saboresXPizzaInput.on("change", function () {
        let maxQty = parseInt($(this).val());

        qtyBox.val(0); // Limpa o campo de quantidade

        // Exibe o ícone de adição de todos os botões
        $(".icons .adicionar").show();
    });

    // Função para obter a quantidade total selecionada
    function getTotalQty() {
        let totalQty = 0;
        $(".qtyBox").each(function () {
            totalQty += parseInt($(this).val());
        });
        return totalQty;
    }

    // Função para obter a quantidade máxima total
    function getMaxTotalQty() {
        let maxQty = parseInt(saboresXPizzaInput.val()); // Usar o valor de saboresXPizzaInput
        return maxQty;
    }

});

/*fim do código que muda a quantidade*/


/*Garante que a quantidade mínima será 1*/
$(document).ready(function () {
    let qtyInput = $("#qntSabores");

    qtyInput.on("input", function () {
        let value = parseInt($(this).val());
        if (isNaN(value) || value < 1) {
            $(this).val(1);
        }
    });
});
/*fim do cód. que garante a quantidade mínima como 1 */


/*Muda o preço*/
$(document).ready(function () {
    // Obtém o elemento select pelo seu ID
    let tamanhoSelect = $("#tamanho");

    // Adiciona um event listener para capturar a mudança de seleção
    tamanhoSelect.on("change", function () {
        // Obtém o valor selecionado no select
        let selectedOption = tamanhoSelect.val();

        // Obtém todos os elementos de preço
        let precoElements = $(".price p");

        // Atualiza o texto de todos os elementos de preço
        precoElements.each(function () {
            let precoElement = $(this);

            // Atualiza o texto com
            switch (selectedOption) {
                case "pequena":
                    precoElement.text("R$29,90");
                    break;
                case "media":
                    precoElement.text("R$34,90");
                    break;
                case "grande":
                    precoElement.text("R$44,90");
                    break;
            }
        });
    });
});
/*Fim da mudança de preço*/

/*Máscara e validação*/
$(document).ready(function () {

    $("#telefone").mask("(00) 00000-0000")

    $("form").validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true,
                minlength: 15,
                maxlength: 15
            },
            mensagem: {
                required: true
            }
        },
        messages: {
            nome: "digite seu nome",
            email: "digite seu e-mail",
            telefone: "digite seu telefone",
            mensagem: "digite sua mensagem"
        },
        submitHandler: function (form) {
            alert("Envio feito com sucesso!");
        },
        invalidHandler: function (evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos!`);
            }
        }
    })
})
/*Fim da máscara e validação*/


/*Mostrar modal*/
document.addEventListener('DOMContentLoaded', function () {
    const modalExemplo = new bootstrap.Modal('#exemplo-modal')
    setTimeout(function () {
    }, 1000)
})
/*Fim mostrar modal*/

/*Envia o pedido para o wpp*/
const evento = document.getElementById('send');
evento.addEventListener('click', enviarFormulario);

function enviarFormulario() {
    let nomePedido = document.getElementById('nomePedido').value;
    let qntPizzas = document.getElementById('qntPizzas').value;
    let sabores = [];

    // Obter a lista de sabores de pizzas selecionados
    let saborPizzas = document.querySelectorAll('#opcaoPizza ul.list-unstyled li strong');
    saborPizzas.forEach((sabor, index) => {
        let quantidade = document.querySelectorAll('#opcaoPizza ul.list-unstyled li .quantidade')[index].value;
        if (quantidade > 0) {
            sabores.push(sabor.textContent);
        }
    });

    let refrigerante = document.getElementById('refrigerante').value;
    let mensagem = document.getElementById('mensagem').value;
    let espaco = ' ';
    let quebra = '%0A';
    let numero = 5541988868087;

    let saboresString = sabores.join(', ');

    let win = window.open(`https://wa.me/${numero}?text=nome:${espaco}${nomePedido}${quebra}quantidade%20de%20pizzas:${espaco}${qntPizzas}${quebra}sabores:${espaco}${saboresString}${quebra}refrigerante:${espaco}${refrigerante}${quebra}mensagem:${espaco}${mensagem}${quebra}`, '_blank');
}


/*Fim envia o pedido para o wpp*/





