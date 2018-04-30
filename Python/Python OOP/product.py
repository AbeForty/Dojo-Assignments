class Product():
    def __init__(self, price, item_name, weight, brand):
        self.price = price
        self.item_name = item_name
        self.weight = weight
        self.brand = brand
        self.status = "for sale"
        self.tax = 0.0975
        self.return_status = ""
    def display_info(self):
        print "Price: " + str(self.price)
        print "Item Name: " + self.item_name
        print "Weight: " + str(self.weight)
        print "Brand: " + self.brand
        print self.status
        print "\n"
        return self
    def sell(self):
        self.status = "sold"
        print "sold"
        return self
    def add_tax(self):
        pre_tax_price = self.price
        self.price = pre_tax_price + (pre_tax_price * self.tax)
        return self
    def return_item(self, return_status):
        if return_status == "defective":
            self.price = 0
        elif return_status == "in the box":
            self.status = "for sale"
        elif return_status == "used":
            self.status = "for sale"
            pre_discounted_price = self.price
            self.price = pre_discounted_price * 0.80 
        print "returned"
        return self       
Pasta = Product(3.50,"Pasta",0.50,"Unkar Plutt's Kitchen")
Fish = Product(4.50,"Wild Alaskan Salmon", 0.50, "Krusty's Seafood")
Cookies = Product(4.50,"Chocolate Chip Cookies", 0.50, "GLaDOS' Bakery")
Bread = Product(1.99,"French Baguette", 0.75, "GLaDOS' Bakery")
Pasta.display_info()
Cookies.display_info()
Bread.display_info()
Fish.display_info()
Pasta.sell()
Cookies.sell()
Cookies.return_item("defective")
Bread.sell()
Fish.sell()
Bread.return_item("in the box")
Pasta.return_item("used")
Pasta.display_info()
Cookies.display_info()
Bread.display_info()
Fish.display_info()