class Mammal
    def initialize()
        @health = 150
    end
    def display_health
        puts @health
    end
end
mammal1 = Mammal.new
puts mammal1.display_health