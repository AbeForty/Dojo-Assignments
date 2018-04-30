class Human
    def initialize()
        @@strength = 3
        @@stealth = 3
        @@intelligence = 3
        @health = 100
    end
    def health
        @health
    end
    def health= (value)
        @health = value
    end
    def attack (object)
        if object.class.ancestors.include?(Human)
            object.health -= 5
        end
    end
end
Clint = Human.new
Bruce = Human.new
Bruce.attack(Clint)
