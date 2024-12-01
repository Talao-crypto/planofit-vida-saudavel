// Array que contém os nomes das imagens do carrossel
const images = ["imagens/img1.jpg", "imagens/img2.jpg", "imagens/img3.jpg"];
let currentIndex = 0; // Índice da imagem atual

// Função para exibir a imagem no carrossel
function showImage(index) {
  const carouselImage = document.getElementById("carouselImage");

  // Remove a classe "active" para a imagem atual, tornando-a invisível
  carouselImage.classList.remove("active");

  // Usa um pequeno atraso para criar um efeito de transição suave
  setTimeout(() => {
    carouselImage.src = images[index]; // Atualiza a imagem com o novo índice
    carouselImage.classList.add("active"); // Adiciona a classe "active" para tornar a nova imagem visível
  }, 500); // Tempo de atraso para a transição suave (ajustável)
}

// Função que avança para a próxima imagem no carrossel
function nextImage() {
  currentIndex = (currentIndex + 1) % images.length; // Incrementa o índice e volta ao início se chegar ao final
  showImage(currentIndex); // Exibe a próxima imagem
}

// Define o intervalo para alternar automaticamente as imagens a cada 3 segundos
setInterval(nextImage, 3000); // 3000 ms = 3 segundos

const gruposMusculares = [
  "Peitoral", 
  "Bíceps", 
  "Pernas", 
  "Costas", 
  "Cardio", 
  "Abdômen", 
  "Antebraços", 
  "Glúteos", 
  "Ombros", 
  "Tríceps"
];

const equipamentos = [
  "Banco", 
  "Máquina", 
  "Peso Corporal", 
  "Halteres",
  "Barra",
  "Elásticos",
  "Máquina de Cardio",
  "Bola de Exercício",
  "Barra EZ",
  "Rolo de Espuma",
  "Kettlebell"
];
const exercicios = [
  // Peitoral
  { nome: "Supino Reto", grupoMuscular: "Peitoral", equipamento: "Banco", descricao: "Exercício para peito", imagem: "imagens_exercicios/supino_reto.jpg" },
  { nome: "Peck Deck", grupoMuscular: "Peitoral", equipamento: "Máquina", descricao: "Exercício para peito", imagem: "imagens_exercicios/pec_deck.png" },
  { nome: "Flexão de Braço", grupoMuscular: "Peitoral", equipamento: "Peso Corporal", descricao: "Flexão de braço para peito e tríceps", imagem: "imagens_exercicios/flexao_braco.jpg" },
  { nome: "Crucifixo Inclinado", grupoMuscular: "Peitoral", equipamento: "Halteres", descricao: "Exercício de peito em banco inclinado", imagem: "imagens_exercicios/crucifixo_inclinado.jpg" },
  { nome: "Pullover", grupoMuscular: "Peitoral", equipamento: "Halteres", descricao: "Exercício de peito e dorsais", imagem: "imagens_exercicios/pullover.jpeg" },
  { nome: "Supino Inclinado", grupoMuscular: "Peitoral", equipamento: "Banco", descricao: "Supino em banco inclinado para parte superior do peito", imagem: "imagens_exercicios/supino_inclinado.png" },

  // Bíceps
  { nome: "Rosca Direta", grupoMuscular: "Bíceps", equipamento: "Halteres", descricao: "Exercício para bíceps", imagem: "imagens_exercicios/rosca_direta.png" },
  { nome: "Rosca Martelo", grupoMuscular: "Bíceps", equipamento: "Halteres", descricao: "Exercício para bíceps", imagem: "imagens_exercicios/rosca_martelo.png" },
  { nome: "Rosca Concentrada", grupoMuscular: "Bíceps", equipamento: "Halteres", descricao: "Exercício para bíceps", imagem: "imagens_exercicios/rosca_concentrada.jpeg" },
  { nome: "Rosca Scott", grupoMuscular: "Bíceps", equipamento: "Máquina", descricao: "Exercício para bíceps", imagem: "imagens_exercicios/rosca_scott.png" },
  { nome: "Rosca Inversa", grupoMuscular: "Bíceps", equipamento: "Barra", descricao: "Exercício para bíceps", imagem: "imagens_exercicios/rosca_inversa.jpg" },

  // Pernas
  { nome: "Agachamento Livre", grupoMuscular: "Pernas", equipamento: "Peso Corporal", descricao: "Exercício para pernas", imagem: "imagens_exercicios/agachamento_livre.png" },
  { nome: "Leg Press", grupoMuscular: "Pernas", equipamento: "Máquina", descricao: "Exercício para pernas", imagem: "imagens_exercicios/leg_press.png" },
  { nome: "Cadeira Extensora", grupoMuscular: "Pernas", equipamento: "Máquina", descricao: "Exercício para pernas", imagem: "imagens_exercicios/extensora.png" },
  { nome: "Afundo", grupoMuscular: "Pernas", equipamento: "Halteres", descricao: "Exercício unilateral para pernas", imagem: "imagens_exercicios/afundo.png" },
  { nome: "Flexão de Joelhos", grupoMuscular: "Pernas", equipamento: "Máquina", descricao: "Exercício para isquiotibiais", imagem: "imagens_exercicios/cadeira_flexora.png" },
  { nome: "Agachamento com Peso Corporal", grupoMuscular: "Pernas", equipamento: "Peso Corporal", descricao: "Agachamento usando apenas o peso do corpo", imagem: "imagens_exercicios/agachamento_corpo.png" },
  { nome: "Swing com Kettlebell", grupoMuscular: "Pernas", equipamento: "Kettlebell", descricao: "Swing com kettlebell para pernas e costas", imagem: "imagens_exercicios/swing_kettlebell.png" },

  // Costas
  { nome: "Puxada Frontal", grupoMuscular: "Costas", equipamento: "Máquina", descricao: "Pode variar o estímulo dependendo da distância entre as mãos e a pegada na barra (aberta ou fechada)", imagem: "imagens_exercicios/puxada_alta.png" },
  { nome: "Remada Curvada", grupoMuscular: "Costas", equipamento: "Halteres", descricao: "Exercício para costas", imagem: "imagens_exercicios/remada_curvada.png" },
  { nome: "Levantamento Terra", grupoMuscular: "Costas", equipamento: "Barra", descricao: "Exercício para costas e pernas", imagem: "imagens_exercicios/levantamento_terra.png" },
  { nome: "Remada Baixa", grupoMuscular: "Costas", equipamento: "Máquina", descricao: "Exercício para parte inferior e dorsal", imagem: "imagens_exercicios/remada_baixa.png" },

  // Cardio
  { nome: "Corrida", grupoMuscular: "Cardio", equipamento: "Máquina de Cardio", descricao: "Corrida para treino cardiovascular", imagem: "imagens_exercicios/corrida.jpg" },
  { nome: "Bicicleta Ergométrica", grupoMuscular: "Cardio", equipamento: "Máquina de Cardio", descricao: "Bicicleta para cardio", imagem: "imagens_exercicios/bicicleta.jpg" },
  { nome: "Pular Corda", grupoMuscular: "Cardio", equipamento: "Peso Corporal", descricao: "Pular corda para cardio", imagem: "imagens_exercicios/pular_corda.png" },

  // Abdômen
  { nome: "Prancha", grupoMuscular: "Abdômen", equipamento: "Peso Corporal", descricao: "Exercício isométrico para abdômen", imagem: "imagens_exercicios/prancha.png" },
  { nome: "Abdominal Militar", grupoMuscular: "Abdômen", equipamento: "Peso Corporal", descricao: "Exercício para abdômen", imagem: "imagens_exercicios/abdominal_militar.jpg" },
  { nome: "Elevação de Pernas", grupoMuscular: "Abdômen", equipamento: "Peso Corporal", descricao: "Exercício para abdômen", imagem: "imagens_exercicios/elevacao_perna.jpeg" },

  // Antebraços
  { nome: "Rosca Inversa", grupoMuscular: "Antebraços", equipamento: "Barra", descricao: "Exercício para antebraços", imagem: "imagens_exercicios/rosca_inversa.jpg" },

  // Glúteos
  { nome: "Agachamento Sumô", grupoMuscular: "Glúteos", equipamento: "Halteres", descricao: "Exercício para glúteos", imagem: "imagens_exercicios/agachamento_sumo.png" },

  // Ombros
  { nome: "Desenvolvimento com Halteres", grupoMuscular: "Ombros", equipamento: "Halteres", descricao: "Exercício para ombros", imagem: "imagens_exercicios/desenvolvimento_halter.png" },
  { nome: "Elevação Lateral", grupoMuscular: "Ombros", equipamento: "Halteres", descricao: "Exercício para ombros", imagem: "imagens_exercicios/elecacao_lateral.png" },

  // Tríceps
  { nome: "Tríceps Testa", grupoMuscular: "Tríceps", equipamento: "Halteres", descricao: "Exercício para tríceps", imagem: "imagens_exercicios/triceps_testa.png" },
  { nome: "Mergulho", grupoMuscular: "Tríceps", equipamento: "Banco", descricao: "Exercício para tríceps", imagem: "imagens_exercicios/mergulho.png" }
];

// Variáveis para armazenar filtros ativos
let activeMuscleGroup = null;
let activeEquipment = null;
let cart = []; // Lista do carrinho

 function clearCart() {
  const cartList = document.getElementById("cart-list");
  cartList.innerHTML = ""; // Remove todos os itens do carrinho
  cart = []; // Esvazia o array do carrinho
  alert("O carrinho foi limpo!");
}

// Exibe exercícios na lista
function displayExercises(exerciciosParaMostrar) {
  const exerciseList = document.getElementById("exercise-list");
  exerciseList.innerHTML = ""; // Limpa a lista de exercícios antes de exibir
  if (exerciciosParaMostrar.length === 0) {
    exerciseList.innerHTML = "<p>Nenhum exercício encontrado.</p>";
    return;
  }
  exerciciosParaMostrar.forEach(exercicio => {
    const exerciseItem = document.createElement("div");
    exerciseItem.className = "exercise-item";
    exerciseItem.innerHTML = `
      <h3>${exercicio.nome}</h3>
      <p><strong>Grupo Muscular:</strong> ${exercicio.grupoMuscular}</p>
      <p><strong>Equipamento:</strong> ${exercicio.equipamento}</p>
      <p>${exercicio.descricao}</p>
      <img class="thumbnail" src="${exercicio.imagem}" alt="${exercicio.nome}">
      <br>
      <button class = "filter-item" onclick="addToCart('${exercicio.nome}')">Adicionar ao Carrinho</button>
    `;
    exerciseList.appendChild(exerciseItem);
  });
}

// Filtra exercícios com base no grupo muscular, equipamento e busca simultaneamente
function filterExercises() {
  const searchValue = document.getElementById("search-input").value.toLowerCase();

  const filteredExercises = exercicios.filter((e) => {
    const matchesMuscleGroup = activeMuscleGroup ? e.grupoMuscular === activeMuscleGroup : true;
    const matchesEquipment = activeEquipment ? e.equipamento === activeEquipment : true;
    const matchesSearch = e.nome.toLowerCase().includes(searchValue);

    return matchesMuscleGroup && matchesEquipment && matchesSearch;
  });

  displayExercises(filteredExercises);
}

// Atualiza o filtro para grupo muscular
function filterByMuscleGroup(grupo) {
  // Ativa ou desativa o filtro de grupo muscular
  activeMuscleGroup = activeMuscleGroup === grupo ? null : grupo;
  filterExercises();

    // Faz a tela rolar para a seção de equipamentos
  const equipmentSection = document.querySelector(".equipamentos");
  equipmentSection.scrollIntoView({ behavior: "smooth" });

}

// Atualiza o filtro para equipamento
function filterByEquipment(equipamento) {
  // Ativa ou desativa o filtro de equipamento
  activeEquipment = activeEquipment === equipamento ? null : equipamento;
  filterExercises();

  const exercisesSection = document.querySelector(".exercicios-disponiveis");
  exercisesSection.scrollIntoView({ behavior: "smooth" });

}

// Popula os filtros de grupo muscular
function populateMuscleGroupFilters() {
  const filterContainer = document.getElementById("muscle-group-filters");
  gruposMusculares.forEach(grupo => {
    const div = document.createElement("div");
    div.className = "filter-item";
    div.innerText = grupo;
    div.onclick = () => filterByMuscleGroup(grupo);
    filterContainer.appendChild(div);
  });
}

// Popula os filtros de equipamentos
function populateEquipmentFilters() {
  const filterContainer = document.getElementById("equipment-filters");
  equipamentos.forEach(equipamento => {
    const div = document.createElement("div");
    div.className = "filter-item";
    div.innerText = equipamento;
    div.onclick = () => filterByEquipment(equipamento);
    filterContainer.appendChild(div);
  });
}

// Função para adicionar exercício ao carrinho
function addToCart(nomeExercicio) {
  // Verifica se o exercício já está no carrinho
  if (cart.includes(nomeExercicio)) {
    alert("Este exercício já foi adicionado ao carrinho!");
    return;
  }

  // Adiciona o exercício ao carrinho
  cart.push(nomeExercicio);
  
  // Atualiza a lista no DOM
  const cartList = document.getElementById("cart-list");
  const listItem = document.createElement("li");
  listItem.innerText = nomeExercicio;
  cartList.appendChild(listItem);

  // Feedback para o usuário
  alert(`O exercício "${nomeExercicio}" foi adicionado ao carrinho!`);
}

// Função de busca dinâmica
document.getElementById("search-input").addEventListener("input", filterExercises);

// Inicializa a página
window.onload = () => {
  populateMuscleGroupFilters();
  populateEquipmentFilters();
  displayExercises(exercicios); // Mostra todos os exercícios inicialmente
};

function gerarDieta() {
  const objetivo = document.getElementById("objetivo").value;
  const dietaLista = document.getElementById("dieta-lista");
  const dietaGerada = document.getElementById("dieta-gerada");

  // Limpa a lista anterior
  dietaLista.innerHTML = "";

  // Define as dietas para cada objetivo
  const dietas = {
    "perder-peso": [
      "Café da manhã: 1 ovo cozido + 1 fatia de pão integral",
      "Almoço: Salada de frango grelhado + legumes",
      "Jantar: Sopa de legumes"
    ],
    "melhorar-saude": [
      "Café da manhã: Frutas frescas + aveia",
      "Almoço: Peixe grelhado + arroz integral + salada",
      "Jantar: Omelete de legumes"
    ],
    "definir": [
      "Café da manhã: 4 claras de ovo + batata-doce",
      "Almoço: Frango grelhado + quinoa + brócolis",
      "Jantar: Filé de peixe + salada"
    ]
  };

  // Validação simples
  if (!dietas[objetivo]) {
    alert("Selecione um objetivo válido.");
    return;
  }

  // Preenche a lista com base no objetivo
  dietas[objetivo].forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    dietaLista.appendChild(li);
  });

  // Mostra a seção de dieta
  dietaGerada.style.display = "block";

}



function calcularIMC() {
  const peso = parseFloat(document.getElementById("imc-peso").value);
  const alturaCm = parseFloat(document.getElementById("imc-altura").value);

  // Validação simples
  if (isNaN(peso) || isNaN(alturaCm) || peso <= 0 || alturaCm <= 0) {
    document.getElementById("imc-resultado").textContent = "Por favor, insira valores válidos para peso e altura.";
    return;
  }

  // Convertendo altura para metros
  const alturaM = alturaCm / 100;

  // Calculando o IMC
  const imc = (peso / (alturaM * alturaM)).toFixed(1);

  // Determinando a categoria do IMC
  let categoria = "";
  if (imc < 18.5) {
    categoria = "Abaixo do peso";
  } else if (imc >= 18.5 && imc < 24.9) {
    categoria = "Peso normal";
  } else if (imc >= 25 && imc < 29.9) {
    categoria = "Sobrepeso";
  } else {
    categoria = "Obesidade";
  }

  // Exibindo o resultado
  document.getElementById("imc-resultado").innerHTML = `Seu IMC é <strong>${imc}</strong> (${categoria}).`;
}
