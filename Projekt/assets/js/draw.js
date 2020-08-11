const header = '<th>KL</th><th>Temp</th><th>Vind Riktning</th><th>Vind Hastighet</th><th>Himmel</th>';

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

export function draw(data, table){
    table.insertRow(0);
    table.rows[0].innerHTML = header;

    for(let i = 0; i < 3; i++){
        console.log(data.timeSeries[i]);
        table.insertRow(i+1);
        table.rows[i+1].innerHTML = formatRow(
            data.timeSeries[i*3].validTime.substr(11,2),
            data.timeSeries[i*3].parameters[1].values[0],
            data.timeSeries[i*3].parameters[3].values[0],
            data.timeSeries[i*3].parameters[4].values[0],
            getSky(data.timeSeries[i*3].parameters[7].values[0]));
    }
}