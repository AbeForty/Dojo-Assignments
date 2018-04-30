import random
print "Starting the program..."
headCount = 0
tailsCount = 0
for i in range(1,5001):
    random_num = random_num = random.randint(0,1)
    if random_num == 0:
        headCount+=1
        print "Attempt #" + str(i) +": Throwing a coin... It's a head! ... Got " + str(headCount) + " head(s) so far and " + str(tailsCount) + " tail(s) so far"
    else:
        tailsCount+=1
        print "Attempt #" + str(i) + ": Throwing a coin... It's a tails! ... Got " + str(headCount) + " head(s) so far and " + str(tailsCount) + " tail(s) so far"


