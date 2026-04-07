// //Construa uma página web que permita montar a escalação de um time de jogadores. Nele deverá ser possível:

// Escalar um jogador
// Informar a posição do jogador a ser escalado para o time.
// Informar o nome do jogador.
// Informar o número da camisa do jogador.
// Ter um botão "Escalar" que pergunta ao usuário se ele deseja confirmar a escalação daquele
// jogador e então insere as informações em uma lista na página.
// Após o jogador ser escalado os campos de texto devem ser limpos.
// Remover um jogador
// Informar o número da camisa do jogador.
// Ter um botão "Remover" que pergunta ao usuário se ele deseja confirmar a
// remoção daquele jogador e então exclui ele da lista na página.
// Após o jogador ser removido o campo de texto deve ser limpo.

//escalar jogador

let soccerPlayers = [];
exibirListSoccers();

function addSoccerPlayer() {
  const menuAddSoccer = document.getElementById("listSoccers");

  const addUlSoccerPlayer = document.createElement("ul");
  const addLiNameSoccerPlayer = document.createElement("li");
  const addLiPositionSoccerPlayer = document.createElement("li");
  const addLiNumberSoccerPlayer = document.createElement("li");
  const nameInput = document.createElement("input");
  const positionInput = document.createElement("input");
  const numberInput = document.createElement("input");

  const labelNameSoccerPlayer = document.createElement("label");
  labelNameSoccerPlayer.htmlFor = "nameSoccer";
  labelNameSoccerPlayer.innerText = "Nome do Jogador: ";
  nameInput.type = "text";
  nameInput.name = "nameSoccer";
  nameInput.id = "nameSoccer";
  addUlSoccerPlayer.appendChild(document.createElement("br"));
  addUlSoccerPlayer.appendChild(document.createElement("br"));
  addUlSoccerPlayer.append(labelNameSoccerPlayer, nameInput);

  const labelPositionSoccerPlayer = document.createElement("label");
  labelPositionSoccerPlayer.htmlFor = "PositionSoccer";
  labelPositionSoccerPlayer.innerText = "Posicao do Jogador: ";
  positionInput.type = "text";
  positionInput.name = "positionSoccer";
  positionInput.id = "positionSoccer";
  addUlSoccerPlayer.appendChild(document.createElement("br"));
  addUlSoccerPlayer.appendChild(document.createElement("br"));
  addUlSoccerPlayer.append(labelPositionSoccerPlayer, positionInput);

  const labelNumberSoccerPlayer = document.createElement("label");
  labelNumberSoccerPlayer.htmlFor = "numberSoccer";
  labelNumberSoccerPlayer.innerText = "Qual numero da camisa  do Jogador: ";
  numberInput.type = "text";
  numberInput.name = "numberSoccer";
  numberInput.id = "numberSoccer";
  addUlSoccerPlayer.appendChild(document.createElement("br"));
  addUlSoccerPlayer.appendChild(document.createElement("br"));
  addUlSoccerPlayer.append(labelNumberSoccerPlayer, numberInput);

  //button enviar informacoes

  const sendBtn = document.createElement("button");
  sendBtn.innerText = "Enviar";
  sendBtn.type = "button";
  addUlSoccerPlayer.appendChild(document.createElement("br"));

  sendBtn.onclick = function () {
    const nameSoccer = nameInput.value;
    const positionSoccer = positionInput.value;
    const numberSoccer = numberInput.value;

    if (
      nameSoccer.trim() === "" ||
      positionSoccer.trim() === "" ||
      numberSoccer.trim() === ""
    ) {
      window.alert("Preencha todos os campos");
      return;
    } else if (isNaN(numberSoccer)) {
      window.alert(
        "Numero da camisa invalido!" +
          "\nPor gentileza digite um número valido!",
      );
      return;
    }

    const player = {
      nameSoccer: nameSoccer.toUpperCase(),
      positionSoccer: positionSoccer.toUpperCase(),
      numberSoccer: parseInt(numberSoccer),
    };
    addUlSoccerPlayer.remove(); //remove menu AddSoccer

    //menuConfirm
    const confirmAdd = document.getElementById("listSoccers");
    const confirmMsg = document.createElement("h4");
    confirmMsg.innerText =
      "Confirma as informacoes abaixo?\n" +
      `Nome: ${nameSoccer}\n
      Posicao: ${positionSoccer}\n
      Numero da camisa: ${numberSoccer}`;
    confirmAdd.appendChild(confirmMsg);

    //buttonConfirm
    const confirmBtn = document.createElement("button");
    confirmBtn.innerText = "Confirmar";
    confirmBtn.type = "button";
    confirmAdd.appendChild(confirmBtn);

    //buttonCancel
    const cancelBtn = document.createElement("button");
    cancelBtn.innerText = "cancelar";
    cancelBtn.type = "button";
    confirmAdd.appendChild(cancelBtn);

    cancelBtn.onclick = function () {
      window.alert("Escalacao cancelada!");
      confirmBtn.remove();
      confirmMsg.remove();
      cancelBtn.remove();
    };

    confirmBtn.onclick = function () {
      soccerPlayers.push(player);
      exibirListSoccers();
      console.log("Time atual: ", soccerPlayers);
      confirmBtn.remove();
      confirmMsg.remove();
      cancelBtn.remove();
      window.alert("Jogador escalado com sucesso!!");
    };
  };

  addUlSoccerPlayer.appendChild(sendBtn);

  menuAddSoccer.appendChild(addUlSoccerPlayer);
}

function exibirListSoccers() {
  const listPlayers = document.getElementById("listPlayers");
  listPlayers.innerText = "";
  if (soccerPlayers.length === 0) {
    const emptyList = document.createElement("h4");
    emptyList.innerText = "Nenhum jogador escalado ainda...";
    listPlayers.appendChild(emptyList);
  } else {
    soccerPlayers.forEach(function (player) {
      const li = document.createElement("li");
      li.innerText = `⚽ ${player.nameSoccer} - ${player.positionSoccer} - Nº ${player.numberSoccer}`;
      listPlayers.appendChild(li);
    });
  }
}

function removeSoccerPlayer() {
  const menuRemovePlayer = document.getElementById("listSoccers");
  const removeMsg = document.createElement("h4");

  removeMsg.innerText =
    "Digite o nome do jogador acima a qual deseja retirar da escalacao";
  const removeInput = document.createElement("input");
  removeInput.type = "text";
 

  //  const removeMsgUppercase = removeMsg.toUpperCase()

  const removeBtn = document.createElement("button");
  removeBtn.type = "button";
  removeBtn.innerText = "Confirmar";

  const cancelRemoveBtn = document.createElement("button");
  cancelRemoveBtn.type = "button";
  cancelRemoveBtn.innerText = "Sair";

  menuRemovePlayer.appendChild(removeMsg);
  menuRemovePlayer.appendChild(removeInput);
  menuRemovePlayer.appendChild(removeBtn);
  menuRemovePlayer.appendChild(cancelRemoveBtn);

  cancelRemoveBtn.onclick = function () {
    removeMsg.remove();
    removeInput.remove();
    removeBtn.remove();
    cancelRemoveBtn.remove();
  };

  removeBtn.onclick = function () {
    const playerName = removeInput.value.toUpperCase();

    if (playerName.trim() === "") {
      window.alert("Digite um nome válido");
      return;
    }

    const index = soccerPlayers.findIndex(function (player) {
      //verifica se o jogador digitado está no array de jogadores escalados..
      return player.nameSoccer === playerName;
    });

    if (index === -1) {
      window.alert(`Jogador ${playerName} não encontrado na escalacao!!`);
    } else {
      soccerPlayers.splice(index, 1); // remove o index (digitado pelo usuario), remove 1 e para!
      exibirListSoccers(); // atualizar lista!
      removeMsg.remove();
      removeInput.remove();
      removeBtn.remove();
      cancelRemoveBtn.remove();
      
      window.alert(`Voce retirou ${playerName} da escalacao do time`);
       console.log(`Jogador a ser removido: `, playerName);
       console.log(`Time atualizado;`, soccerPlayers)
    }
  };
}
