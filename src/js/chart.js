google.charts.load('current', {'packages': ['geochart', 'corechart', 'line']});
google.charts.setOnLoadCallback(drawChart);
google.charts.setOnLoadCallback(drawChart_03);
google.charts.setOnLoadCallback(drawChart_04);

function drawChart() {

    var data = new google.visualization.DataTable();
    data.addColumn('date', 'Date');
    data.addColumn('number', '2018년 4월생');
    data.addColumn('number', '2018년 5월생');
    data.addColumn('number', '2018년 6월생');
    data.addColumn('number', '2018년 7월생');
    data.addColumn('number', '2018년 8월생');
    data.addColumn('number', '2018년 9월생');
    data.addColumn('number', '2018년 10월생');
    data.addColumn('number', '2018년 11월생');
    data.addColumn('number', '2018년 12월생');

    data.addRows([
        [new Date(2018, 3), 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [new Date(2018, 3), 80, 0, 0, 0, 0, 0, 0, 0, 0],
        [new Date(2018, 4), 100, 0, 0, 0, 0, 0, 0, 0, 0],
        [new Date(2018, 4), 100, 80, 0, 0, 0, 0, 0, 0, 0],
        [new Date(2018, 5), 100, 100, 0, 0, 0, 0, 0, 0, 0],
        [new Date(2018, 5), 100, 100, 80, 0, 0, 0, 0, 0, 0],
        [new Date(2018, 6), 100, 100, 100, 0, 0, 0, 0, 0, 0],
        [new Date(2018, 6), 100, 100, 100, 80, 0, 0, 0, 0, 0],
        [new Date(2018, 7), 100, 100, 100, 100, 0, 0, 0, 0, 0],
        [new Date(2018, 7), 100, 100, 100, 100, 80, 0, 0, 0, 0],
        [new Date(2018, 8), 100, 100, 100, 100, 100, 0, 0, 0, 0],
        [new Date(2018, 8), 100, 100, 100, 100, 100, 80, 0, 0, 0],
        [new Date(2018, 9), 100, 100, 100, 100, 100, 100, 0, 0, 0],
        [new Date(2018, 9), 100, 100, 100, 100, 100, 100, 80, 0, 0],
        [new Date(2018, 10), 100, 100, 100, 100, 100, 100, 100, 0, 0],
        [new Date(2018, 10), 100, 100, 100, 100, 100, 100, 100, 80, 0],
        [new Date(2018, 11), 100, 100, 100, 100, 100, 100, 100, 100, 0],
        [new Date(2018, 11), 100, 100, 100, 100, 100, 100, 100, 100, 80],
        [new Date(2019, 0), 100, 100, 100, 100, 100, 100, 100, 100, 100],
        [new Date(2019, 0), 100, 100, 100, 100, 100, 100, 100, 100, 100],
    ]);

    var options = {
        title: '생년월 코호트별 접종률',
        subtitle: '어린이 대상 백신',
        width: "100%",
        height: "100%",
        /*curveType: 'function',*/
        vAxis: {
            title: '접종률',
            minValue: 0,
            maxValue: 100
        },
        hAxis: {
            title: '조회기간',
            format: 'yyyy.MM',
            gridlines: {
                count: -1,
                units: {
                    days: {format: ['MMM dd']},
                    hours: {format: ['HH:mm', 'ha']},
                }
            },
            minorGridlines: {
                units: {
                    hours: {format: ['hh:mm:ss a', 'ha']},
                    minutes: {format: ['HH:mm a Z', ':mm']}
                }
            }
        },
        animation: {
            startup: true,
            duration: 1000,
            easing: 'out',
        },
    };

    var chart = new google.visualization.LineChart(document.getElementById('linechart_material'));

    chart.draw(data, options);
}




// 완전접종룔
function drawChart_03() {

    var data = new google.visualization.DataTable();
    data.addColumn('number', 'number');
    data.addColumn('number', '2014');
    data.addColumn('number', '2015');
    data.addColumn('number', '2016');
    data.addColumn('number', '2017');
    data.addColumn('number', '2018');
    data.addColumn('number', '2019');
    data.addColumn('number', '2020');

    data.addRows([
        [1, 300, 564, 816, 878, 547, 523, 645],
        [2, 234, 354, 658, 324, 684, 543, 847],
        [3, 645, 654, 124, 842, 697, 324, 565],
        [4, 456, 324, 561, 367, 165, 567, 658],
        [5, 684, 321, 678, 143, 354, 894, 135],
        [6, 357, 684, 327, 874, 234, 651, 387],
        [7, 843, 357, 165, 753, 486, 571, 694],
        [8, 234, 354, 658, 324, 684, 543, 847],
        [9, 645, 654, 124, 842, 697, 324, 565],
        [10, 456, 324, 561, 367, 165, 567, 658],
        [11, 684, 321, 678, 143, 354, 894, 135],
        [12, 357, 684, 327, 874, 234, 651, 387],
    ]);

    var options = {
        title: '월별 백신 접종 받은 사람 수',
        subtitle: '어린이 대상 백신',
        width: "100%",
        height: "100%",
        /*curveType: 'function',*/
        vAxis: {
            title: '접종 받은 사람 수',
            minValue: 0,
            maxValue: 100
        },
        hAxis: {
            title: '조회기간',
            width: '100%'
        },
        animation: {
            startup: true,
            duration: 1000,
            easing: 'out',
        },
    };

    var chart_03 = new google.visualization.ColumnChart(document.getElementById('chart_03'));

    chart_03.draw(data, options);
}

// 지역별 접종률
function drawChart_04() {
    var data = new google.visualization.DataTable();

    data.addColumn('string', 'Country');
    data.addColumn('number', 'Percentage');
    data.addColumn({type:'string', role:'tooltip'});

    data.addRows([[{v:'KR-11', f:'서울'},89,'Click to change background color']]);

    data.addRows([[{v:'KR-26', f:'Busan Gwang\'yeogsi'},90,'Click to change background color']]);

    data.addRows([[{v:'KR-27',f:'Daegu Gwang\'yeogsi'},95,'Click to change background color']]);

    data.addRows([[{v:'KR-30',f:'Daejeon Gwang\'yeogsi'},92,'Click to change background color']]);

    data.addRows([[{v:'KR-29',f:'Gwangju Gwang\'yeogs'},97,'Click to change background color']]);

    data.addRows([[{v:'KR-28',f:'Incheon Gwang\'yeogsi'},80,'Click to change background color']]);

    data.addRows([[{v:'KR-31',f:'Ulsan Gwang\'yeogsi'},86,'Click to change background color']]);

    data.addRows([[{v:'KR-43',f:'충청북도'},90,'Click to change background color']]);

    data.addRows([[{v:'KR-44',f:'충청남도'},88,'Click to change background color']]);

    data.addRows([[{v:'KR-42',f:'Gang\'weondo'},89,'Click to change background color']]);

    data.addRows([[{v:'KR-41',f:'경기도'},90,'고양시, 과천시, 광명시, 광주시, 구리시,\n' +
    '\n' +
    '군포시, 김포시, 남양주시, 동두천시, 부천시,\n' +
    '\n' +
    '성남시, 수원시, 시흥시, 안산시, 안성시,\n' +
    '\n' +
    '안양시, 양주시, 오산시, 용인시, 의왕시,\n' +
    '\n' +
    '의정부시, 이천시, 파주시, 평택시, 포천시,\n' +
    '\n' +
    '하남시, 화성시']]);

    data.addRows([[{v:'KR-47',f:'경상북도'},91,'Click to change background color']]);

    data.addRows([[{v:'KR-48',f:'경상남도'},99,'Click to change background color']]);

    data.addRows([[{v:'KR-49',f:'제주도'},93,'Click to change background color']]);

    data.addRows([[{v:'KR-45',f:'전라북도'},89,'Click to change background color']]);

    data.addRows([[{v:'KR-46',f:'전라남도'},80,'Click to change background color']]);

    var options = {
        title: '월별 백신 접종 받은 사람 수',
        subtitle: '어린이 대상 백신',
        width: "100%",
        height: "100%",
        backgroundColor: {fill:'#FFFFFF',stroke:'#FFFFFF' ,strokeWidth:0 },
        colorAxis:  {minValue: 70, maxValue: 100,  colors: ['#3182BD','#3182BD','#3182BD','#3182BD','#3182BD','#3182BD','#3182BD','#3182BD','#3182BD','#9ECAE1','#9ECAE1','#9ECAE1','#9ECAE1','#9ECAE1','#9ECAE1','#9ECAE1','#9ECAE1','#DEEBF7','#DEEBF7','#DEEBF7','#DEEBF7','#DEEBF7',]},
        legend: 'none',
        datalessRegionColor: '#f5f5f5',
        displayMode: 'regions',
        enableRegionInteractivity: 'true',
        resolution: 'provinces',
        sizeAxis: {minValue: 1, maxValue:1,minSize:10,  maxSize: 10},
        region:'KR', //country code
        keepAspectRatio: true,
        tooltip: {textStyle: {color: '#444444'}, trigger:'focus'}
    };

    var chart_04 = new google.visualization.GeoChart(document.getElementById('chart_04'));
    google.visualization.events.addListener(chart_04, 'select', function() {
        var selection = chart.getSelection();
        if (selection.length == 1) {
            var selectedRow = selection[0].row;
            var selectedRegion = data.getValue(selectedRow, 0);
            if(ivalue[selectedRegion] != '') {
                document.getElementsByTagName('body')[0].style.background=ivalue[selectedRegion];
            }
        }
    });
    chart_04.draw(data, options);
}
