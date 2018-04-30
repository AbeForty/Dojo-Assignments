list_one = [1, 2, 5, 6, 2]
list_two = [1, 2, 5, 6, 2]

list_three = [1, 2, 5, 6, 5]
list_four = [1, 2, 5, 6, 5, 3]

list_five = [1, 2, 5, 6, 5, 16]
list_six = [1, 2, 5, 6, 5]

list_seven = ['celery', 'carrots', 'bread', 'milk']
list_eight = ['celery', 'carrots', 'bread', 'cream']
def compareList(lst, lst2):
    matches = False
    if len(lst) == len(lst2):
        for i in range(0, len(lst)):
            if (lst[i] == lst2[i]):
                matches = True
            else:
                matches = False
                break
        if matches == True:
            print "The lists are the same."
        else:
            print "This lists are not the same."
    else:
        print "The lists are not the same."


compareList(list_three, list_four)
