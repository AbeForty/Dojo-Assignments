function playSlots(quartersDropped, max) {
    // var quarters = 0;
    var numberOfPlays = 0;
    var quartersWon = 0;  
    while (quartersDropped > 0 && quartersDropped > max) {     
        for (var i = 1; i <= quartersDropped; i++) {
            console.log('You have ' + quartersDropped + ' quarters remaining.');
            var winValue = Math.trunc(Math.random() * 100 + 1);
            if (winValue === 50) {
                quartersWon = Math.floor(Math.random() * 50) + 50;
                console.log('You won ' + quartersWon + ' quarters');
                quartersDropped += quartersWon;
                console.log(quartersDropped);
            }
            else {
                if (quartersDropped > 0) {
                    console.log(quartersDropped);
                    console.log('You lose.');
                    quartersDropped--;
                    if (quartersDropped === 0) {
                        console.log("Wasted...");
                        return 0;
                    }
                }
            }
        }
    }
}