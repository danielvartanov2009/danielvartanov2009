document.getElementById('submit').addEventListener('click', function() {
    let input1 = parseFloat(document.getElementById('input1').value);
    let input2 = parseFloat(document.getElementById('input2').value);
    let result;

    if (isNaN(input1) || isNaN(input2)) {
      alert('Please enter valid numbers');
      return;
    }

    switch (true) {
      case document.getElementById('plus').checked:
        result = input1 + input2;
        break;
      case document.getElementById('minus').checked:
        result = input1 - input2;
        break;
      case document.getElementById('multiplication').checked:
        result = input1 * input2;
        break;
      case document.getElementById('division').checked:
        if (input2 === 0) {
          alert('Cannot divide by zero');
          return;
        }
        result = input1 / input2;
        break;
      case document.getElementById('factorial').checked:
        result = factorial(input1);
        break;
      default:
        alert('Please select an operation');
        return;
    }

    document.getElementById('result').innerText = result;
  });

  function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }