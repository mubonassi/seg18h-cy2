function calcular(){
  const num1 = Number(document.getElementById('num1').value) || 0;
  const num2 = Number(document.getElementById('num2').value) || 0;
  const op = document.getElementById('op').value;
  const resultado = document.getElementById('resultado');
  let res = 0;

  switch(op){
    case '+':
      res = num1 + num2;
      break;
    case '-':
      res = num1 - num2;
      break;
    case '*':
      res = num1 * num2;
      break;
    case '/':
      if (num2 == 0){
        resultado.textContent = 'Erro: Não se pode dividir por 0 (zero)'
        return;
      }
      res = num1 / num2;
      break;
    default:
      resultado.textContent = 'Erro: Operação invalida!';
      return;
  }

  resultado.textContent = `${num1} ${op} ${num2} = ${res}`;
}

function limpar(){
  document.getElementById('num1').value = '';
  document.getElementById('num2').value = '';
  document.getElementById('resultado').textContent = '';
  document.getElementById('op').value = '+';
}