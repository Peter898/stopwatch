var time = 0;       //stores the time
var running = 0;    //Shows if the clock is running

function start()
{
    //Checks if the clock is not running
    if(running === 0)
    {
        running = 1;
        increment()
        document.getElementById("startPause").innerHTML = "Pause"
    }
    else
    {
        running = 0
        document.getElementById("startPause").innerHTML = "Resume"
    }

}

function reset(){
    //Sets the timer to 0 for a full reset
    running = 0
    time = 0
    document.getElementById("startPause").innerHTML = "Start"
    //Changes the timer to 00:00:00 so that we can do the click again
    document.getElementById("output").innerHTML = "00:00:00"
    
}

function increment(){
    if(running==1)
    {
        //We use setTimeout instead of setInterval because setInterval will keep running the clock
        setTimeout(function()
            {
                time++
                var mins = Math.floor(time/10/60)
                var secs = Math.floor(time/10)
                var tenths = time % 10
                
                //Adds the 0 at the end to make it look better 
                if(mins < 10)
                {
                    mins = "0" + mins
                }
                if(secs<10)
                {
                    secs = "0" + secs
                }

                document.getElementById("output").innerHTML = mins + ":" + secs + ":" + "0" + tenths
                increment()
            },100)
    }
    
}