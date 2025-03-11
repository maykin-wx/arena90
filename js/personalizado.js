 // Função para formatar a data e hora
 function atualizarDataHora() {
    const data = new Date();

    // Obter o dia da semana
    const diaDaSemana = obterDiaDaSemana();

    // Definir o nome dos meses por extenso
    const meses = [
      'Janeiro', 'Fevereiro', 'Marco', 'Abril', 'Maio', 'Junho',
      'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];

    // Pegar os componentes da data
    const dia = String(data.getDate()).padStart(2, '0');  // Dia com 2 dígitos
    const mes = meses[data.getMonth()];  // Mês por extenso
    const ano = data.getFullYear();  // Ano
    const hora = String(data.getHours()).padStart(2, '0');  // Hora com 2 dígitos
    const minuto = String(data.getMinutes()).padStart(2, '0');  // Minuto com 2 dígitos
    const segundo = String(data.getSeconds()).padStart(2, '0');  // Segundo com 2 dígitos

    // Formatar a data e hora: "Dia da Semana, DD de Mês de AAAA HH:MM:SS"
    const dataHoraFormatada = `${diaDaSemana}, ${dia} de ${mes} de ${ano} ${hora}:${minuto}:${segundo}`;

    // Atualizar o conteúdo do parágrafo com a data e hora formatadas
    document.getElementById('data-hora').textContent = dataHoraFormatada;
  }

  // Função para obter o dia da semana
  function obterDiaDaSemana() {
    const data = new Date();
    const diasDaSemana = [
      'Domingo', 'Segunda-feira', 'Terca-feira', 'Quarta-feira', 
      'Quinta-feira', 'Sexta-feira', 'Sábado'
    ];
    const diaSemana = diasDaSemana[data.getDay()];  // Pega o dia da semana com base no índice retornado por getDay()
    return diaSemana;
  }

  // Atualiza a data e hora imediatamente
  atualizarDataHora();

  // Atualiza a cada segundo
  setInterval(atualizarDataHora, 1000);
// Definindo os tempos iniciais para cada cronômetro (em minutos)
let s1 = 5;
let m1 = 80;

let s2 = 20;
let m2 = 58;

let s3 = 36;
let m3 = 24;

// Pegando os elementos para mostrar os tempos
const jg1 = document.getElementById('jg1');
const jg2 = document.getElementById('jg2');
const jg3 = document.getElementById('jg3');

// Função para atualizar todos os cronômetros
function atualizarCronometros() {
  // Atualiza o cronômetro 1
  jg1.textContent = `${formatarTempo(m1)}:${formatarTempo(s1)}'`;
  
  // Atualiza o cronômetro 2
  jg2.textContent = `${formatarTempo(m2)}:${formatarTempo(s2)}'`;
  
  // Atualiza o cronômetro 3
  jg3.textContent = `${formatarTempo(m3)}:${formatarTempo(s3)}'`;
  
  // Incrementa os segundos de cada cronômetro
  s1++;
  s2++;
  s3++;

  // Se os segundos chegarem a 60, reinicia para 0 e incrementa os minutos
  if (s1 === 60) {
    s1 = 0;
  }

  if (s2 === 60) {
    s2 = 0;
  }

  if (s3 === 60) {
    s3 = 0;
  }
}

// Função para garantir que o número de minutos e segundos tenha 2 dígitos
function formatarTempo(tempo) {
  return tempo < 10 ? '0' + tempo : tempo;
}

// Inicia os cronômetros
setInterval(atualizarCronometros, 1000); // Atualiza a cada 1 segundo
