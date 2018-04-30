primeCount = 0 
for i in range(100, 100000):
    prime = True
    for i2 in range(2, i):
      if i % i2==0:
        prime = False  
        if float(i)/i2 == i2:
            print "Bar"
            break
        else:
            print "FooBar"
            break
      elif i % i2 !=0:
        print "Prime"
        primeCount += 1   
if primeCount == i-2:
    print "Foo"
    primeCount = 0