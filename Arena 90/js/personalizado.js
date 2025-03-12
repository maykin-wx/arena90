 function atualizarDataHora() {
    const data = new Date();

    const diaDaSemana = obterDiaDaSemana();

    const meses = [
      'Janeiro', 'Fevereiro', 'Marco', 'Abril', 'Maio', 'Junho',
      'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];

    const dia = String(data.getDate()).padStart(2, '0'); 
    const mes = meses[data.getMonth()];  
    const ano = data.getFullYear(); 
    const hora = String(data.getHours()).padStart(2, '0'); 
    const minuto = String(data.getMinutes()).padStart(2, '0');  
    const segundo = String(data.getSeconds()).padStart(2, '0'); 

   
    const dataHoraFormatada = `${diaDaSemana}, ${dia} de ${mes} de ${ano} ${hora}:${minuto}:${segundo}`;


    document.getElementById('data-hora').textContent = dataHoraFormatada;
  }

  function obterDiaDaSemana() {
    const data = new Date();
    const diasDaSemana = [
      'Domingo', 'Segunda-feira', 'Terca-feira', 'Quarta-feira', 
      'Quinta-feira', 'Sexta-feira', 'Sábado'
    ];
    const diaSemana = diasDaSemana[data.getDay()];  
    return diaSemana;
  }


  atualizarDataHora();

  
  setInterval(atualizarDataHora, 1000);

let s1 = 5;
let m1 = 80;

let s2 = 20;
let m2 = 58;

let s3 = 36;
let m3 = 24;


const jg1 = document.getElementById('jg1');
const jg2 = document.getElementById('jg2');
const jg3 = document.getElementById('jg3');


function atualizarCronometros() {
  jg1.textContent = `${formatarTempo(m1)}:${formatarTempo(s1)}'`;

  jg2.textContent = `${formatarTempo(m2)}:${formatarTempo(s2)}'`;
  
  jg3.textContent = `${formatarTempo(m3)}:${formatarTempo(s3)}'`;
  
  s1++;
  s2++;
  s3++;

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

function formatarTempo(tempo) {
  return tempo < 10 ? '0' + tempo : tempo;
}


setInterval(atualizarCronometros, 1000);
