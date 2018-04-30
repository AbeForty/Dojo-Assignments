class Bike():
    def __init__(self, price, max_speed):
        self.price = price
        self.max_speed = max_speed
        self.miles = 0
    price = 0
    max_speed = 0
    miles = 0
    def displayInfo(self):
        print self.price
        print self.max_speed
        print self.miles
    def ride(self):
        print "Riding"
        self.miles+=10
        return self
    def reverse(self):
        print "Reversing"
        if self.miles > 5:
            self.miles-=5
        return self
Joker = Bike(25000,75)
Harley = Bike(15000,50)
Riddler = Bike(12000,45)
for i in range(0,3):
    Joker.ride()
Joker.reverse()
Joker.displayInfo()
for i in range(0,2):
    Harley.ride().reverse()
Harley.displayInfo()
for i in range(0,3):
    Riddler.reverse()
Riddler.displayInfo()