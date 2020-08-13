const tableHeader = '<th>KL</th><th>Temp (C)</th><th>Vind Riktning</th><th>Vind Hastighet (m/s)</th><th>Himmel</th>';

function formatRow(time, temp, windDir, windSpd, sky){
    return '<td>' + time + '</td><td>' + temp + '</td><td>' + windDir + '</td><td>' + windSpd + '</td><td>' + sky + '</td>';
}

function getSky(tcc){
    let sky = "nice";
    switch(tcc){
        case 0:
            sky = "klar himmel";
            break;
        case 1:
            sky = "nästan klar himmel";
            break;
        case 2:
            sky = "enstaka moln";
            break;
        case 3:
            sky = "ganska molnigt";
            break;
        case 4:
            sky = "molnigt";
            break;
        case 5:
            sky = "ganska mycket molnigt";
            break;
        case 6:
            sky = "mycket molnigt";
            break;
        case 7:
            sky = "extremt molnigt";
            break;
        case 8:
            sky = "extremt super mega molnigt";
            break;
        default:
            break;
    }
    return sky;
}

export function drawTable(data, table, today){
    let shift;
    today ? shift = 0 : shift = 24;

    table.insertRow(0);
    table.rows[0].innerHTML = tableHeader;
    for(let i = 0; i < 3; i++){
        let hourData = data.timeSeries[(i*3)+shift];
        table.insertRow(i+1);
        table.rows[i+1].innerHTML = formatRow(
            hourData.validTime.substr(11,2),
            hourData.parameters.find(e => e.name === 't').values[0],
            hourData.parameters.find(e => e.name === 'wd').values[0],
            hourData.parameters.find(e => e.name === 'ws').values[0],
            getSky(hourData.parameters.find(e => e.name === 'tcc_mean').values[0]));
    }
}