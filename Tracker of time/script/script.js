var app = new Vue({
    el: '#app',
    data: {
        started: false,
        times:[],
        current: {}
    },
    methods: {
        reverseMessage: function () {
            if(this.started) {
                var now = new Date();
                var lo = now.getTime();
                this.started  = false;
                this.current.end = now.getTime(); //now.getHours() + ":" + getMinutes(now.getMinutes());
                
                var start = this.current.start;
                var end = this.current.end ;//+ (60*118*1000);// min eine stunde
                var zwischenZeit = Math.floor((end-start)/1000);
                localStorage.setItem("started", "false");
                
                if(zwischenZeit < 60) {
                    alert("weniger als eine minute ;)");
                } else {
                    var minutes = Math.floor(zwischenZeit / 60);
                    if(minutes < 60) {
                        alert("weniger als eine stunde");
                    } else {
                        this.current.time = Math.floor(minutes/60) + ":" + (minutes%60);
                        this.current.perc = Math.floor(minutes/60) + "," + Math.round(100/60*(minutes%60));
                    }
                }
                this.current.startReadable = new Date(this.current.start).getHours()+":"+ new Date(this.current.start).getMinutes();
                this.current.endReadable = new Date(this.current.end).getHours()+":"+ new Date(this.current.end).getMinutes();;                
                this.times.push(this.current);
                
                 localStorage.setItem("table", JSON.stringify(this.times));                             
            } else {
                var now = new Date();
                var lo = now.getTime();
                this.started  = true;
                this.current = {
                    date:now.getDay()+"."+now.getMonth()+"."+now.getFullYear(),
                    start:now.getTime(),//now.getHours() + ":"+getMinutes(now.getMinutes()),
                    startReadable:"startReadable",
                    startReadableTmp:"startReadable",
                    end:"",
                    endReadable:"endReadable",
                    endReadableTmp:"endReadable",
                    editable:true,
                    perc:"",
                    time:""
                }
                
                localStorage.setItem("startTime", now.getHours() + ":"+getMinutes(now.getMinutes()));
                localStorage.setItem("started", "true");                                                                  
            }
        },
        edit : function(todo) {
            if(todo.editable === false) {
                //end edit
                todo.editable = true;
                if(todo.startReadableTmp === todo.startReadable) {
                    console.log("start date has NOT changed");
                } else {
                    console.log("start date HAS changed");
                }
                
                if(todo.endReadableTmp === todo.endReadable) {
                    console.log("end das has NOT changed")
                } else {
                    console.log("end das HAS changed");
                }
                
            } else {
                //start edit
                todo.editable = false;
                todo.startReadableTmp = todo.startReadable;
                todo.endReadableTmp = todo.endReadable;
            }
        }
    }
    
});

function getMinutes(minutes) {
    return (minutes<10?'0':'') + minutes;
}



/* Some functions on startup */
function init() {
    if (typeof(Storage) !== "undefined") {
        //TODO
    } else {
      alert("app wont work, sorry :(");
    }

    var started = localStorage.getItem("started");
    if(started == "true") {
        app.started = true;
    }

    var localStorageData = JSON.parse(localStorage.getItem("table"));
    if(localStorageData !== null) {
        app.times =  localStorageData;
    }
}

init();