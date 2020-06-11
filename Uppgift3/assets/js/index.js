fetch('https://stryk.herokuapp.com/tipset', {method : 'GET'}).then(Response => Response.json()).then(data => render(data,document.getElementById("table")));
render = function(data, table) {
    for(let i = 0; i < data.results.length; i++){
        table.insertRow(i+1);
        let outcome = "";
        switch(data.results[i].outcome){
            case "1":
                outcome = '</td><span class="checkmark"><div class="stem"></div><div class="kick"></div></span><td></td><td></td><td>';
                break;
            case "2":
                outcome = '</td><td></td><td></td><span class="checkmark"><div class="stem"></div><div class="kick"></div></span><td>';
                break;
            default:
                outcome = '</td><td></td><span class="checkmark"><div class="stem"></div><div class="kick"></div></span><td></td><td>';
                break;
        }
        table.rows[i+1].innerHTML = '<td>' + (i+1) + '</td><td>' + data.results[i].teams[1].name + ' -VS- ' + data.results[i].teams[2].name + '</td>' + outcome;
    }
}