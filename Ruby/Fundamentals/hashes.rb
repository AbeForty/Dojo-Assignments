h = {:first_name => "Coding", :last_name => "Dojo", :location => "Burbank", :address => "175 Olive Avenue"} 
h.delete(:last_name)
puts h
puts h.empty?
puts h.has_key?(:locations)
puts h.has_value?("San Jose")