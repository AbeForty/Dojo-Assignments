# print "x 1 2 3 4 5 6 7 8 9 10 11 12"
for row in range (0,13):
    rowString = ""
    for col in range(0,13):
        if row == 0 and col == 0:
            rowString += "x  "
        elif row==0:
            rowString += str(col) + "  "
        elif col == 0:
            rowString += str(row) + "  "
        else:
            rowString += str(row*col) + "  "
    print rowString