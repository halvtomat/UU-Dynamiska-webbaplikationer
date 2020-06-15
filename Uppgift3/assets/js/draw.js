const emptyCell = '<td></td>';
const checkmark = '<span class="checkmark"><div class="stem"></div><div class="kick"></div></span>';

function formatOutcome(outcome) {
    switch(outcome){
        case "1":
            return checkmark;
        case "2":
            return emptyCell + emptyCell + checkmark;
        default:
            return emptyCell + checkmark;
    }
}

function formatRow(i ,data, outcome) {
    return '<td>' + (i+1) + '</td><td><a href=' + data.teams[1].homepage + '>' + data.teams[1].name + '</a> -VS- <a href=' + data.teams[2].homepage + '>' + data.teams[2].name + '</a></td>' + outcome;
}

export function draw(data, table) {
    for(let i = 0; i < data.length; i++){
        table.insertRow(i+1);
        table.rows[i+1].innerHTML = formatRow(i ,data[i], formatOutcome(data[i].outcome));
    }
}