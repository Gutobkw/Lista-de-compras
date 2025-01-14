import { criarItemDaLista } from "./scripts/criarItemDaLista.js";
import verificarListaVazia from "./scripts/verificarListaVazia.js";
const listaDeCompra = document.getElementById("lista-de-compras");
const botaoAdicionar = document.getElementById("adicionar-item");


botaoAdicionar.addEventListener("click", (evento) => {
    evento.preventDefault();
    const itemDaLista = criarItemDaLista ();
    listaDeCompra.appendChild(itemDaLista);
    verificarListaVazia(listaDeCompra);

})

 verificarListaVazia(listaDeCompra);















