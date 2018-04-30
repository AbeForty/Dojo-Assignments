function printStudents() {
    var students = [
        { first_name: 'Michael', last_name: 'Jordan' },
        { first_name: 'John', last_name: 'Rosales' },
        { first_name: 'Mark', last_name: 'Guillen' },
        { first_name: 'KB', last_name: 'Tonel' }
    ]
    for (var key in students) {
        console.log(students[key].first_name + " " + students[key].last_name);
        // console.log();
    }
}
function printStudentsAndInstructors() {
    var users = {
        'Students': [
            { first_name: 'Michael', last_name: 'Jordan' },
            { first_name: 'John', last_name: 'Rosales' },
            { first_name: 'Mark', last_name: 'Guillen' },
            { first_name: 'KB', last_name: 'Tonel' }
        ],
        'Instructors': [
            { first_name: 'Michael', last_name: 'Choi' },
            { first_name: 'Martin', last_name: 'Puryear' }
        ]
    }
    var numOfStudents = 0;
    var numOfInstructors = 0;
    for (var object in users) {
        for (var key in users[object]) {
            var nameLength = users[object][key].first_name.length + users[object][key].last_name.length;
            numOfStudents++
            console.log(numOfStudents + " - " + users[object][key].first_name + " " + users[object][key].last_name + " - " + nameLength);
            // console.log();
        }
    }
}
