arr = [1,"Burger", 2,6, "Choi", 4,14]
puts arr.at(1)
puts arr.fetch(3)
arr.delete("Burger")
puts arr.to_s
puts "Array length: " + arr.length.to_s
arr2 = ["d","b","c","f","a","e"]
arr3 = [5,3,1,2,6,4]
puts arr2.sort.to_s
puts arr3.sort.to_s
puts arr3.sort.reverse.to_s
puts arr[4..7]
puts arr3.shuffle.join("-").to_s
arr3.insert(3,7)
puts arr3
puts arr.values_at(1, 3, 5).join(" and ").to_s