def printStudents():
    students = [
        { "first_name": 'Michael', "last_name": 'Jordan' },
        { "first_name": 'John', "last_name": 'Rosales' },
        { "first_name": 'Mark', "last_name": 'Guillen' },
        { "first_name": 'KB', "last_name": 'Tonel' }
    ]
    for i in range(0,len(students)):
        print students[i]["first_name"] + " " + students[i]["last_name"] 

def printStudentsAndInstructors():
    users = {
        "Students": [
            { "first_name": 'Michael', "last_name": 'Jordan' },
            { "first_name": 'John', "last_name": 'Rosales' },
            { "first_name": 'Mark', "last_name": 'Guillen' },
            { "first_name": 'KB', "last_name": 'Tonel' }
        ],
        "Instructors": [
            { "first_name": 'Michael', "last_name": 'Choi' },
            { "first_name": 'Martin', "last_name": 'Puryear' }
        ]
    }
    numOfStudents = 0
    numOfInstructors = 0
    for obj in users:
        print obj
        # for i2 in range(0,len(obj)):
        for i in range(0,len(users[obj])):
            nameLength = len(str(users[obj][i]["first_name"])) + len(str(users[obj][i]["last_name"]))
            numOfStudents = i+1
            print str(numOfStudents) + " - " + str(users[obj][i]["first_name"]) + " " + str(users[obj][i]["last_name"]) + " - " + str(nameLength)
printStudentsAndInstructors()
# printStudents()