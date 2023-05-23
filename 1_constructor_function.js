function BankAccount (customerName , balance = 0){
          this.customerName = customerName;
          this.accountNumber = Date.now();
          this.balance = balance;
}

const rakeshAccount = new BankAccount('Rakesh K' , 1000);
const johnAccount = new BankAccount('John Doe');

rakeshAccount.balance = 5000;
console.log(rakeshAccount.balance);
console.log(rakeshAccount , johnAccount);