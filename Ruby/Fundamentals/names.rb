def new_user user
    puts "The name is '#{user[:first_name]} #{user[:last_name]}'"
end
  a = {first_name: "Michael", last_name: "Choi"}
  b = {first_name: "John", last_name: "Doe"}
  c = {first_name: "Jane", last_name: "Doe"}
  d = {first_name: "James", last_name: "Smith"}
  e = {first_name: "Jennifer", last_name: "Smith"}
  names = [a, b, c, d, e]
  puts "You have " + names.length.to_s + " in the array"
  for i in names
    new_user i 
  end