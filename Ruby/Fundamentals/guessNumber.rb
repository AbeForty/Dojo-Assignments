def guess_number num 
    number = 25
    # your code here
    if num < 25
      return "too low"
    elsif num > 25
      return "too high"
    else
      return "you got it!"
    end
end 
guess_number(100)