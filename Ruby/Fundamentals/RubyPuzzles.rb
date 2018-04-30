def arr_sum()
  arr = [3,5,1,2,7,9,8,13,25,32]
  sum = 0
  for i in arr
    sum += i
  end
  puts "Sum: " + sum.to_s
  return arr.reject {|num| num < 10 }.to_s
end
arr_sum
def shuffleAndReturn5Chars
  arr = ["John", "KB", "Oliver", "Cory", "Matthew", "Christopher"]
  print arr.shuffle
  return arr.reject {|name| name.length < 5 }
end
shuffleAndReturn5Chars
def allAlphabet
  arr = 'a'..'z'
  arr = arr.to_a
  arr = arr.shuffle
  puts arr.to_s
  puts "First: " + arr.first
  puts "Last: " + arr.last
  if arr.first == "a" || arr.first == "e" || arr.first == "i" || arr.first == "o" || arr.first == "u"
    puts "The first letter is a vowel"
  end
end
def rand_num_arr_10
  arr = []
  10.times{arr.push(rand(55..100))}
  puts arr.to_s
end
def rand_num_arr_10_sorted
  arr = []
  10.times{arr.push(rand(55..100))}
  puts arr.sort.to_s
  puts "Min: " + arr.sort.first.to_s
  puts "Max: " + arr.sort.last.to_s
end
def rand_str_5_char
  return_str = ""
  5.times {return_str += (65+rand(26)).chr}
  return return_str
end
def rand_str_5_char_10
  arr = []
  for x in 1..10
    return_str = ""
      5.times { return_str += (65+rand(26)).chr }
    arr.push(return_str)
  end
  return arr
end
