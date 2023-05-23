function BankAccount (customerName , balance = 0){
          this.customerName = customerName;
          this.accountNumber = Date.now();
          this.balance = balance;

          this.deposite = function(amount){
                    this.balance += amount;
          }

          this.withdraw = (amount) => {
                    this.balance -= amount;
          }
}

const rakeshAccount = new BankAccount('Rakesh K' , 1000);
const johnAccount = new BankAccount('John Doe');
rakeshAccount.deposite(5000);
johnAccount.deposite(1000);
rakeshAccount.withdraw(2000);
johnAccount.withdraw(200);

console.log(rakeshAccount , johnAccount);