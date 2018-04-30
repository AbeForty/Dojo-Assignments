// function tellMeTheTime(hour, minute, period) {
//     var timeOfDay = "";
//     if (period === "AM" && (hour === 12) && minute ===0) {
//         timeOfDay = "midnight";
//     }
//     else if (period === "AM" && (hour != 12)) {
//         timeOfDay = "morning";
//     }
//     else if (period === "PM" && hour < 5) {
//         timeOfDay = "afternoon";
//     }
//     else if (period === "PM" && hour >= 5) {
//         timeOfDay = "evening";
//     }
//     if (hour === 0) {
//         hour = 12;
//     }

//     if (minute === 30 && hour < 12) {
//         console.log("It's half past " + hour + " in the " + timeOfDay);
//     }
//     else if (minute ===0 && hour !== 12) {
//         console.log("It's " + hour + " in the " + timeOfDay);
//     }
//     else if (minute === 5 && hour < 12) {
//         console.log("It's five after " + hour + " in the " + timeOfDay);
//     }
//     else if (minute === 15 && hour < 12) {
//         console.log("It's quarter after " + hour + " in the " + timeOfDay);
//     }
//     else if (minute < 30 && hour < 12) {
//         console.log("It's just after " + hour + " in the " + timeOfDay);
//     }
//     else if (hour > 12) {
//         console.log("Time no longer exists.");
//     }
//     else if (hour < 12 && minute > 30) {
//         console.log("It's almost " + (hour + 1) + " in the " + timeOfDay);
//     }
//     else if (hour === 12 && minute > 30 ) {
//         console.log("It's almost " + (1) + " in the " + "morning.");
//     }

//     else if (minute ===0 && hour === 12) {
//         console.log("It's " + timeOfDay);
//     }
// }
function tellMeTheTime(hour, minute, period) {
    var timeOfDay = "";
    if (period === "AM" && (hour === 12) && minute ===0) {
        timeOfDay = "midnight";
    }
    else if (period === "AM" && (hour != 12)) {
        timeOfDay = "morning";
    }
    else if (period === "PM" && hour < 5) {
        timeOfDay = "afternoon";
    }
    else if (period === "PM" && hour >= 5) {
        timeOfDay = "evening";
    }
     else if (period === "PM" && hour === 12) {
        timeOfDay = "noon";
    }
    if (hour === 0) {
        hour = 12;
    }

    if (minute === 30 && hour < 12) {
        console.log("It's half past " + hour + " in the " + timeOfDay);
    }
    else if (minute ===0 && hour !== 12) {
        console.log("It's " + hour + " in the " + timeOfDay);
    }
    else if (minute === 5 && hour < 12) {
        console.log("It's five after " + hour + " in the " + timeOfDay);
    }
    else if (minute === 15 && hour < 12) {
        console.log("It's quarter after " + hour + " in the " + timeOfDay);
    }
    else if (minute < 30 && hour < 12) {
        console.log("It's just after " + hour + " in the " + timeOfDay);
    }
    else if (hour > 12) {
        console.log("Time no longer exists.");
    }
    else if (hour < 12 && minute > 30) {
        console.log("It's almost " + (hour + 1) + " in the " + timeOfDay);
    }
    else if (hour === 12 && minute > 30 ) {
        console.log("It's almost " + (1) + " in the " + "morning.");
    }
    else if (minute === 0 && hour === 12) {
        console.log("It's " + timeOfDay);
    }
}
