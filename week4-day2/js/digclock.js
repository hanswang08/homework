           //Creat a time data function
           function currentTime() {
            //Declare variables
            var d = new Date(); //get current date
            var hr = d.getHours();//get current hours
            var min = d.getMinutes(); //get current minutes
            var sec = d.getSeconds(); //Get current seconds
            var ampm; //Declare empty variable to store AM or PM
            var utchr = d.getUTCHours(); //Get current Greenwich Mean Time
            var timeDiff; //to store time difference between GMT hour and Local hour
            var adjTimeDiff; // To store time difference converted to positive number
            var timeZone; // To store the 4 time zones(PT, MT, CT, ET)
        // Add 0 to single digits for seconds
        if (sec < 10) {
            sec = "0" + sec;
        }
        //Add 0 to single digits for minutes
        if (min < 10) {
            min = "0" + min;
        }
        // Determine AM or PM string
        if (hr == 12) {
            ampm = "PM"; //Set to pm
        } else if (hr > 12) {
            hr -= 12; //Deduct 12 from hours greater than 12 (military time)
            ampm = "PM"; //Set to PM
        } else {
            ampm = "AM";
        }

        timeDiff = utchr - hr;

        if (timeDiff < 0) {
            adjTimeDiff = timeDiff * -1
        } else {
            adjTimeDiff = timeDiff
        }

        if (adjTimeDiff == 8) {
            timeZone = "PT";
        } else if (adjTimeDiff == 7 ) {
            timeZone = "MT";
        } else if (adjTimeDiff == 6) {
            timeZone = "CT";
        } else if (adjTimeDiff == 5 ) {
            timeZone = "ET";
        } else { timeZone = "Out of Country "
        }
        
        // Assemble time format to display
        var time = hr + ":" + min + ":" + sec + " " + ampm + " " + timeZone;
        // Display current local time and time zone on HtML elements
        document.getElementById("clock").innerText = time; //Adding Time
        }
        // Run time data function every 1 second
        setInterval(currentTime, 1000) // setting timer
        currentTime();