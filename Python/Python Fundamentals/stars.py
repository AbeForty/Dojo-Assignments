# x = [4, 6, 1, 3, 5, 7, 25]
x = [4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"]
def draw_stars(lst):
    starsString = ""
    for i in range(0, len(lst)):
        if isinstance(lst[i],int):              
            for i2 in range(0,lst[i]):
                starsString += "*"         
        elif isinstance(lst[i],str):
              for i3 in range(0,len(lst[i])):
                starsString += str(str(lst[i])[:1]).lower()
        print starsString
        starsString=""
draw_stars(x)