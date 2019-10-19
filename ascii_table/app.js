var app = new Vue({
    el: '#app',
    data: {
        output: "Output - Click button 'generate'",
        rowsCount: 1, 
        colsCount: 1,
        rows: [
            {
                cols:[{
                    text:""
                }]
            }
        ]
    },
    methods: {
        addRow: function () {
            var colArr = [];
            for(var i = 0; i < this.colsCount; i++) {
                colArr.push({text:""});
            }
            
            this.rows.push({cols:colArr});
            this.rowsCount +=1;
        },
        addCol: function() {
            for(var i = 0; i < this.rows.length; i++) {
                this.rows[i].cols.push({text:""});
            }
            this.colsCount +=1;
        },
        gen: function() {
            console.log("> generate");
            this.output = "";
            var seperatorLine ="";
            var x = getLongestRow(this.rows);
            for(var y = 0; y < x; y++) {
                seperatorLine += "-"
            }
            seperatorLine += "\n\r";
            this.output += seperatorLine;
            for(var i = 0; i < this.rows.length; i++) {
                this.output += "| "
                
                for(var j = 0; j < this.rows[i].cols.length; j++) {
                    var colText = this.rows[i].cols[j].text;
                    if(colText.length < colSizes[j]) {
                        for(var x = colText.length; x < colSizes[j]; x++) {
                            colText += " ";
                        }
                    }
                    this.output += colText + " | "; // TODO add whitespaces
                }
                this.output += "\n\r"; // TODO add whitespaces
                this.output += seperatorLine;
            }
        }
    }
});

// TODO optimize
var colSizes = [];
    
function getLongestRow(rows) {
    var longest = 0;
    // var longetstRow; // maybe an interesting logging info
    
    // iterate through rows
    for(var i = 0; i < rows.length; i++) {
        // initiate the minimum row length 
        var rowLength = (rows[i].cols.length - 1) * 3 + 4;
        //iterate through cols of the row and check the input length
        for(var j = 0; j < rows[i].cols.length; j++) {
            var len = rows[i].cols[j].text.length;            
            rowLength += len;            
            
            // set the col sizes
            if(colSizes[j] === undefined || colSizes[j] < len) {
                colSizes[j] = len;
            }
        }
        // if the row length is longer than the cached value, 
        // set the new longest value
        if(rowLength > longest) {
            longest = rowLength;
        }
    }
    return longest;
}
