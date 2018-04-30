class MathDojo
    def initialize()
      @result = 0
    end
    def add *params
      for i in params # => [1, 2, 3, 4, 5]
        if i.class == Array
           for x in i
             @result += x
            end
        else
          @result += i
        end
      end
      self
    end
    def subtract *params
      for i in params # => [1, 2, 3, 4, 5]
        if i.class == Array
           for x in i
              @result -= x
            end
        else
          @result -= i
        end
      end
      self
    end
    def result 
      @result
    end
  end
  challenge1 = MathDojo.new.add(2).add(2, 5).subtract(3, 2).result # => 4
  puts challenge1
  challenge2 = MathDojo.new.add(1).add([3, 5, 7, 8], [2, 4.3, 1.25]).subtract([2,3], [1.1, 2.3]).result # => 23.15
  puts challenge2