class Animal(object):
    def __init__(self, name, health):
        self.name = name
        self.health = health     
    def display_health(self):
        print "Health: " + str(self.health)
        return self
    def walk(self):
        self.health -= 1
        return self
    def run(self):
        self.health -= 5
        return self
class Dog(Animal):
    def __init__(self, name):
        super(Dog, self).__init__(name, 150)
    def pet(self):
        self.health += 5
        return self
class Dragon(Animal):
    def __init__(self, name):
        super(Dragon, self).__init__(name ,170)
    def fly(self):
        self.health -= 10
        return self
    def display_health(self):
        super(Dragon, self).display_health()
        print "I am a Dragon"
        return self
myDog = Dog("Doug")
myDragon = Dragon("Sparky")
myDog.walk().walk().walk().run().run().display_health()
myDragon.walk().walk().walk().run().run().fly().display_health()
