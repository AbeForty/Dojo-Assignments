for i in range (1,2001):
    if i % 2 == 0:
        print "Number is " + str(i) + " This is an even number."
    else:
        print "Number is " + str(i) + " This is an odd number."
helloLst = [5,7,8,12]
def multiply(lst):
    for i in range(0,len(lst)):
        lst[i] *= 5
    print lst
multiply(helloLst)