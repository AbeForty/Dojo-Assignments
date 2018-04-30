class BankAccount 
    @@no_of_accounts = 0
    def initialize()
      @account_number = rand(0..9).to_s + rand(0..9).to_s + rand(0..9).to_s + rand(0..9).to_s + rand(0..9).to_s + rand(0..9).to_s
      @checking_balance = 0 
      @savings_balance = 0 
      @@no_of_accounts += 1
      @@interest_rate = 0.01
    #   puts "Created account #{@@no_of_accounts}"
    end
    def hello 
      puts "Hello Welcome to Dojo National Bank!"
    end
    def checking_balance
        @checking_balance
    end
    def savings_balance
        @savings_balance
    end
    def show_total
        @checking_balance + @savings_balance
    end
    def deposit(amount, account)
        if account == "Savings"
            @savings_balance += amount
        elsif account == "Checking"
            @checking_balance += amount
        end
    end
    def withdraw(amount, account)
        if account == "Savings"
            unless  amount > @savings_balance 
                @savings_balance -= amount
            else
                puts("Insufficient funds available.")
            end
        elsif account == "Checking"
            unless amount > @checking_balance
                @checking_balance -= amount
            else
                puts("Insufficient funds available.")
            end
        end
    end
    def account_information
      puts "" 
      puts "Account Number: #{@account_number}"
      puts "Total Balance: #{@checking_balance + @savings_balance}"
      puts "Checking Balance: #{@checking_balance}" 
      puts "Savings Balance: #{@savings_balance}"
      puts "Interest Rate: #{@@interest_rate}"
    end 
  end 
  # now using above class to create objects 
  Marty = BankAccount.new
  Marty.deposit(3000, "Savings")
  Marty.account_information
  Emmett = BankAccount.new
  Emmett.deposit(4000, "Savings")
  Emmett.account_information
  Emmett.withdraw(10000, "Savings")
