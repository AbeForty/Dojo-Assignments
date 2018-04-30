class Car():
    def __init__(self, price, speed, fuel, mileage):
        self.price = price
        self.fuel = fuel
        self.speed = speed
        self.mileage = mileage
        self.tax = 0
    price = 0
    fuel = 100
    speed = 0
    mileage = 0
    tax = 0
    def display_all(self):
        print "Price: " + str(self.price)
        if self.fuel < 100 and self.fuel > 0:
            print "Fuel: Not Full"
        elif self.fuel == 100:
            print "Fuel: Full"
        else:
            print "Fuel: Empty"
        print "Speed: " + str(self.speed) + "mph"
        print "Mileage: " + str(self.mileage) + "mpg"
        if self.price > 10000:
            print "Tax: 0.15"
        else:
            print "Tax: 0.12"
        print "\n"
Joker = Car(25000,75,100,35)
Harley = Car(15000,50, 50, 25)
Riddler = Car(5000,45, 0, 20)
Joker.display_all()
Harley.display_all()
Riddler.display_all()