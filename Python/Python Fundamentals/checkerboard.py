output = ""
for row in range(0, 8):
    for square in range(0, 8):
        if (row % 2 == 0):
            if (square % 2 == 0):           
                output += "*"
            else:
                output+= " "
        else:              
            if (square % 2 == 0):           
                output += " "
            else:
                output+= "*"       
    output+="\n"
      
  
        

print output 
# if even row start with *
# if odd row start with space
#  * * * *
# * * * *

