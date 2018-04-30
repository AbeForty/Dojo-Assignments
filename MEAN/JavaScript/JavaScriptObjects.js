function printStudents() {
    let students = [
        {name: 'Remy', cohort: 'Jan'},
        {name: 'Genevieve', cohort: 'March'},
        {name: 'Chuck', cohort: 'Jan'},
        {name: 'Osmund', cohort: 'June'},
        {name: 'Nikki', cohort: 'June'},
        {name: 'Boris', cohort: 'June'}
    ]
    for (var key in students) {
        console.log("Name: "+ students[key].name + " Cohort:" + students[key].cohort);
        // console.log();
    }
}
function printStudentsAndInstructors() {
    let users = {
        employees: [
            {'first_name':  'Miguel', 'last_name' : 'Jones'},
            {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
            {'first_name' : 'Nora', 'last_name' : 'Lu'},
            {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
        ],
        managers: [
           {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
           {'first_name' : 'Gordon', 'last_name' : 'Poe'}
        ]
     };
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
