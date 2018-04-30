words = "It's thanksgiving day. It's my birthday, too!"
print words.find("day")
words2 = words.replace("day", "month")
print words2
x = [2, 54, -2, 7, 12, 98, "world"]
print min(x)
print max(x)
y = [x[0],x[len(x)-1]]
print y
x = [19,2,54,-2,7,12,98,32,10,-3,6]
x.sort()
first_half = x[:len(x)/2]
second_half = x[len(x)/2:len(x)]
z = []
z.append(first_half)
for i in range(0, len(second_half)):
    z.append(second_half[i])
print z
