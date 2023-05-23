function BankAccount(customerName, balance = 0) {
  this.customerName = customerName;
  this.accountNumber = Date.now();
  this.balance = balance;
}

//adding deposit and withdraw in prototype
BankAccount.prototype.deposit = function (amount) {   // we can't use arrow function on prototype , because 'this' used
  this.balance += amount;                            // inside an arrow function points to the window object and tries
};                                                  //  to find 'balance' in window's contest which is not there.Here      
                                                   //   'this' is pointing to the object rakeshAccount & johnAccount.
BankAccount.prototype.withdraw = function (amount) {
  this.balance -= amount;
};

const rakeshAccount = new BankAccount('Rakesh K' , 2000);
const johnAccount = new BankAccount('John Doe' , 1000);
rakeshAccount.deposit(5000);
rakeshAccount.withdraw(1000);

console.log(rakeshAccount , johnAccount);
