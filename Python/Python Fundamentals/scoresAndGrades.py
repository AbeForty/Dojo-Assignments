import random
for i in range(1,11):
    random_num = random_num = random.randint(1,100)
    if random_num > 90:
        print "Score: " + str(random_num) + "; " + "Your grade is A"
    elif random_num > 80 and random_num <= 89:
        print "Score: " + str(random_num) + "; " + "Your grade is B"
    elif random_num > 70 and random_num <= 79:
        print "Score: " + str(random_num) + "; " + "Your grade is C"
    elif random_num > 60 and random_num <= 69:
        print "Score: " + str(random_num) + "; " + "Your grade is D"
    else:
        print "Score: " + str(random_num) + "; " + "Your grade is F"
print "End of the program. Bye!"
 

