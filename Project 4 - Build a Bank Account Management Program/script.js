class BankAccount {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }

  deposit(amount) {
    if (amount <= 0) {
      return "Deposit amount must be greater than zero.";
    }
    
    this.transactions.push({ type: "deposit", amount: amount });
    this.balance += amount;
    return `Successfully deposited $${amount}. New balance: $${this.balance}`;
  }

  withdraw(amount) {
    if (amount <= 0 || amount > this.balance) {
      return "Insufficient balance or invalid amount.";
    }
    
    this.transactions.push({ type: "withdraw", amount: amount });
    this.balance -= amount;
    return `Successfully withdrew $${amount}. New balance: $${this.balance}`;
  }

  checkBalance() {
    return `Current balance: $${this.balance}`;
  }

  listAllDeposits() {
    const deposits = [];
    for (let i = 0; i < this.transactions.length; i++) {
      if (this.transactions[i].type === "deposit") {
        deposits.push(this.transactions[i].amount);
      }
    }
    return `Deposits: ${deposits.join(",")}`;
  }

  listAllWithdrawals() {
    const withdrawals = [];
    for (let i = 0; i < this.transactions.length; i++) {
      if (this.transactions[i].type === "withdraw") {
        withdrawals.push(this.transactions[i].amount);
      }
    }
    return `Withdrawals: ${withdrawals.join(",")}`;
  }
}

// ==========================================
// Setup to satisfy the "myAccount" tests
// (at least 5 transactions, 2 deposits, 2 withdrawals, balance > $100)
// ==========================================

const myAccount = new BankAccount();

// 3 deposits (amounts: 50, 200, 100)
myAccount.deposit(50);
myAccount.deposit(200);
myAccount.deposit(100);

// 2 withdrawals (amounts: 50, 100)
myAccount.withdraw(50);
myAccount.withdraw(100);