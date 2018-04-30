var daysUntilMyBirthday = 60;
while (daysUntilMyBirthday >= 0) {
    if (daysUntilMyBirthday > 30) {
        console.log(daysUntilMyBirthday + ' days until my birthday. Such a long time... :(');
        daysUntilMyBirthday--;
    }
    else if (daysUntilMyBirthday <= 5 && daysUntilMyBirthday > 0) {
        console.log(daysUntilMyBirthday + ' DAYS UNTIL MY BIRTHDAY!!!')
        daysUntilMyBirthday--;
    }
    else if (daysUntilMyBirthday===0){
        console.log('HAPPY BIRTHDAY!!!')
        break;
    }
    else if (daysUntilMyBirthday <= 30) {
        console.log(daysUntilMyBirthday + ' days until my birthday. Ooh it\'s getting closer... :)');
        daysUntilMyBirthday--;
    }  
}