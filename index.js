'use strict'

const { isPrime } = require('./PrimeNumberService')
const inquirer = require('inquirer');

inquirer
  .prompt([{type: 'input', name: 'enteredNumber', message: "Ingrese un número para consultar primos descendentes"}])
  .then(checkDescPrimeNumber)

const checkDescPrimeNumber = answer => {
  const number = Number(answer.enteredNumber)
  for(let i=number; i>=2; i--){
    if(isPrime(i)) console.log(`${i} es número primo`)
  }
}