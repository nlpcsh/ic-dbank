import { dbank } from "../../declarations/dbank";

async function printBalance() {
  const currentAmount = await dbank.checkBalance();
  document.getElementById('value').innerText = Math.round(currentAmount * 100) / 100;
}

window.addEventListener('load', printBalance);

document.querySelector('form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const submitBtn = e.target.querySelector('#submit-btn');
  const inputAdd = document.getElementById('input-amount');
  const inputSubstract = document.getElementById('withdrawal-amount');

  const inputAmount = inputAdd.value;
  const outputAmount = inputSubstract.value;

  submitBtn.setAttribute('disabled', true);

  if (inputAdd.value.length > 0) {
    await dbank.topUp(parseFloat(inputAmount));
  } else if (inputSubstract.value.length > 0) {
    await dbank.withdrawl(parseFloat(outputAmount))
  }

  await dbank.compound();

  printBalance();

  inputAdd.value = '';
  inputSubstract.value = '';

  submitBtn.removeAttribute('disabled');
});
