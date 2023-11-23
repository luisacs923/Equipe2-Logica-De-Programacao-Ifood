//To do List
//Desenvolver, utilizando os conceitos abordados ao longo do módulo, uma aplicação de lista de tarefas (ToDo List).

//Dentre as funcionalidades, espera-se que seja possível:

// - Adicionar uma tarefa
// - Editar uma tarefa salva
// - Remover uma tarefa salva
// - Listar todas as tarefas salvas
// - Obter uma tarefa, através de um parâmetro (id)

const prompt = require('prompt-sync') (); //para funcionar o prompt, instalar no terminal usando: npm install prompt-sync

// A lista é armazenada como um array de objetos, sendo cada tarefa um objeto com as chaves: title, id, isComplete
const toDoList = [];
// A variável contador vai determinar o id da tarefa que será adicionada
let contador = 1;

function adicionaTarefa(lista) {
    const titulo = prompt("Digite o nome da tarefa: ");
    const tarefa = {
        id: contador++,
        title: titulo,
        isComplete: false, // a chave isComplete diz se a tarefa foi concluída ou não, sua entrada padrão é false
    };
    lista.push(tarefa);
}

function editaTarefa(lista, idParaEditar) {
    const tarefaParaEditar = lista.find(tarefa => tarefa.id === idParaEditar);

    if (tarefaParaEditar) {
        const novoTitulo = prompt(`Digite o novo nome para a tarefa ${idParaEditar}: `);
        tarefaParaEditar.title = novoTitulo;
        console.log(`Tarefa ${idParaEditar} editada com sucesso. Novo título: ${novoTitulo}`);
    } else {
        throw new Error(`Tarefa com ID ${idParaEditar} não encontrada.`);
    }
}

function removeTarefa(lista, idParaRemover) {
  const indice = lista.findIndex((tarefa) => tarefa.id === idParaRemover);

  if (indice !== -1) {
    lista.splice(indice, 1);
    console.log(`Tarefa com ID ${idParaRemover} removida com sucesso.`);
  } else {
    throw new Error(`Tarefa com ID ${idParaRemover} não encontrada na lista.`);
  }
}

// function listarTarefas(lista) {
//     const ids = lista.map((tarefa) => tarefa.id);
//     window.alert("IDs das tarefas: " + ids.join(", "));
//   }

  

function exibirTarefa() {}

function exibirMenu() {
    console.log("Bem vindo a aplicação de Lista de Tarefas.\n" + 
                                    "Escolha uma das opções abaixo:\n" + 
                                    "1. Adicionar Tarefa\n" + 
                                    "2. Editar uma Tarefa salva\n" + 
                                    "3. Remover uma Tarefa salva\n" + 
                                    "4. Listar todas as Tarefas salvas\n" + 
                                    "5. Exibir uma única Tarefa por Id\n" + 
                                    "6. Sair da aplicação" 
                                    );
    const escolha = prompt("Escolha uma opção acima: ")
    return escolha;
}

let escolha;
let idEscolhido; //Para as funções de editar, remover e exibir uma única tarefa, usamos a chave id da tarefa específica desejada
do {
    escolha = Number(exibirMenu());
    switch (escolha) {
        case 1:
            adicionaTarefa(toDoList);
            break;
        case 2:
            idEscolhido = parseInt(prompt("Digite o indice da tarefa que deseja editar:"));
            try {
                editaTarefa(toDoList, idEscolhido);
            } catch(err) {
                console.error(err.message);
            }
            break;
        case 3:
            idEscolhido = parseInt(prompt("Digite o indice da tarefa que deseja remover"));
            try {
                removeTarefa(toDoList, idEscolhido);
            } catch(err) {
                console.error(err.message);
            }
            break;
        case 4:
            listarTarefas(toDoList);
            break;
        case 5: 
            idEscolhido = parseInt(prompt("Digite o indice da tarefa que deseja visualizar"));
            try {
                exibirTarefa(toDoList, idEscolhido);
            } catch (err) {
                console.error(err.message);
            }
            break;
        case 6:
            console.log("Até logo!");
            break;
        default:
            console.log("Opção Inválida. Por favor, escolha novamente.");
            break;
    }
} while (escolha !== 6);
