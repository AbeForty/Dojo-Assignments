module MyEnumerable
    def my_each
      i = 0
      while i < self.length
        yield self[i]
        i +=1
      end
    end
  end
  class Array
     include MyEnumerable
  end
  [1,2,3,4].my_each { |i| puts i } # => 1 2 3 4
  [1,2,3,4].my_each { |i| puts i * 10 } # => 10 20 30 40