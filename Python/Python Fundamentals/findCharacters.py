word_list = ['hello', 'world', 'my', 'name', 'is', 'Anna']
new_list = []


def findCharacter(char, lst):
    for i in range(0, len(lst)):
        if word_list[i].find(char) > 0:
            new_list.append(word_list[i])
    print new_list

findCharacter("o", word_list)
