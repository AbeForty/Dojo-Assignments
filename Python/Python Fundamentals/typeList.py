l = ['magical unicorns', 19, 'hello', 98.98, 'world']
m = [2, 3, 1, 7, 4, 12]
n = ['magical', 'unicorns']


def typeList(lst):
    count = 0
    intCount = 0
    final_str_string = "String: "
    final_int_string = "Sum: "
    sum = 0
    for item in lst:
        if (isinstance(item, str)):
            final_str_string += item + " "
            count += 1
        elif (isinstance(item, int) or isinstance(item, float)):
            sum += item
            intCount += 1
    final_int_string += str(sum)
    if (count == len(lst)):
        print "This list you entered is of string type"
    elif (intCount == len(lst)):
        print "This list you entered is of integer type"
    else:
        print "This list you entered is of mixed type"
    if (count > 0):
        print(final_str_string)
    if (intCount > 0):
        print(final_int_string)


typeList(l)
