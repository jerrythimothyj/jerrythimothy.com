$(document).ready(function () {

    "use strict"; // Start of use strict

    // notification
    setTimeout(function () {
        toastr.options = {
            closeButton: true,
            progressBar: true,
            showMethod: 'slideDown',
            timeOut: 4000
            // positionClass: "toast-top-left"
        };
        // toastr.success("", "Welcome to Jerry Thimothy's website");

    }, 1300);

    //counter
    $('.count-number').counterUp({
        delay: 10,
        time: 5000
    });

    //Chat list
    $('.chat_list').slimScroll({
        size: '3px',
        height: '296px',
        allowPageScroll: true,
        railVisible: true
    });

    // Message
    $('.message_inner').slimScroll({
        size: '3px',
        height: '351px',
        allowPageScroll: true,
        railVisible: true
        // position: 'left'
    });

    //Monthly calender
    $('.monthly_calender').slimScroll({
        size: '3px',
        height: '312px',
        allowPageScroll: true,
        railVisible: true
    });


    //emojionearea
    $(".emojionearea").emojioneArea({
        pickerPosition: "top",
        tonesStyle: "radio"
    });

    //monthly calender
    $('#m_calendar').monthly({
        mode: 'event',
        //jsonUrl: 'events.json',
        //dataType: 'json'
        xmlUrl: 'events.xml'
    });

    //Sparklines Charts
    $('.sparkline1').sparkline([4, 6, 7, 7, 4, 3, 2, 4, 6, 7, 4, 6, 7, 7, 4, 3, 2, 4, 6, 7, 7, 4, 3, 1, 5, 7, 6, 6, 5, 5, 4, 4, 3, 3, 4, 4, 5, 6, 7, 2, 3, 4], {
        type: 'bar',
        barColor: '#fff',
        height: '40',
        barWidth: '3',
        barSpacing: 2
    });

    $(".sparkline2").sparkline([4, 6, 7, 7, 4, 3, 2, 1, 4, 4, 5, 6, 3, 4, 5, 8, 7, 6, 9, 3, 2, 4, 1, 5, 6, 4, 3, 7, 6, 8, 3, 2, 6], {
        type: 'discrete',
        lineColor: '#fff',
        width: '200',
        height: '40'
    });

    $(".sparkline3").sparkline([5, 6, 7, 2, 0, -4, -2, -3, -4, 4, 5, 6, 3, 2, 4, -6, -5, -4, 6, 5, 4, 3, 4, -3, -5, -4, 5, 4, 3, 6, -2, -3, -4, -5, 5, 6, 3, 4, 5], {
        type: 'bar',
        barColor: '#fff',
        negBarColor: '#c6c6c6',
        width: '200',
        height: '40'
    });

    $(".sparkline4").sparkline([10, 34, 13, 33, 35, 24, 32, 24, 52, 35], {
        type: 'line',
        height: '40',
        width: '100%',
        lineColor: '#fff',
        fillColor: 'rgba(255,255,255,0.1)'
    });

    $(".sparkline5").sparkline([32, 15, 22, 46, 33, 86, 54, 73, 53, 12, 53, 23, 65, 23, 63, 53, 42, 34, 56, 76, 15], {
        type: 'line',
        lineColor: '#558B2F',
        fillColor: '#558B2F',
        width: '100',
        height: '20'
    });

    $(".sparkline6").sparkline([4, 6, 7, 7, 4, 3, 2, 1, 4, 4, 5, 6, 3, 4, 5, 8, 7, 6, 9, 3, 2, 4, 1, 5, 6, 4, 3, 7], {
        type: 'discrete',
        lineColor: '#558B2F',
        width: '100',
        height: '20'
    });

    $(".sparkline7").sparkline([5, 6, 7, 2, 0, -4, -2, 4, 5, 6, 3, 2, 4, -6, -5, -4, 6, 5, 4, 3], {
        type: 'bar',
        barColor: '#558B2F',
        negBarColor: '#c6c6c6',
        width: '100',
        height: '20'
    });

    //amchart
    var chart = AmCharts.makeChart("chartdiv", {
        "type": "serial",
        "theme": "light",
        "dataDateFormat": "YYYY-MM-DD",
        "precision": 2,
        "valueAxes": [{
            "id": "v1",
            "title": "Sales",
            "position": "left",
            "autoGridCount": false,
            "labelFunction": function (value) {
                return "$" + Math.round(value) + "M";
            }
        }, {
            "id": "v2",
            "title": "Market Days",
            "gridAlpha": 0,
            "position": "right",
            "autoGridCount": false
        }],
        "graphs": [{
            "id": "g3",
            "valueAxis": "v1",
            "lineColor": "#e1ede9",
            "fillColors": "#e1ede9",
            "fillAlphas": 1,
            "type": "column",
            "title": "Actual Sales",
            "valueField": "sales2",
            "clustered": false,
            "columnWidth": 0.5,
            "legendValueText": "$[[value]]M",
            "balloonText": "[[title]]<br /><b style='font-size: 130%'>$[[value]]M</b>"
        }, {
            "id": "g4",
            "valueAxis": "v1",
            "lineColor": "#558B2F",
            "fillColors": "#558B2F",
            "fillAlphas": 1,
            "type": "column",
            "title": "Target Sales",
            "valueField": "sales1",
            "clustered": false,
            "columnWidth": 0.3,
            "legendValueText": "$[[value]]M",
            "balloonText": "[[title]]<br /><b style='font-size: 130%'>$[[value]]M</b>"
        }, {
            "id": "g1",
            "valueAxis": "v2",
            "bullet": "round",
            "bulletBorderAlpha": 1,
            "bulletColor": "#FFFFFF",
            "bulletSize": 5,
            "hideBulletsCount": 50,
            "lineThickness": 2,
            "lineColor": "#20acd4",
            "type": "smoothedLine",
            "title": "Market Days",
            "useLineColorForBulletBorder": true,
            "valueField": "market1",
            "balloonText": "[[title]]<br /><b style='font-size: 130%'>[[value]]</b>"
        }, {
            "id": "g2",
            "valueAxis": "v2",
            "bullet": "round",
            "bulletBorderAlpha": 1,
            "bulletColor": "#FFFFFF",
            "bulletSize": 5,
            "hideBulletsCount": 50,
            "lineThickness": 2,
            "lineColor": "#E5343D",
            "type": "smoothedLine",
            "dashLength": 5,
            "title": "Market Days ALL",
            "useLineColorForBulletBorder": true,
            "valueField": "market2",
            "balloonText": "[[title]]<br /><b style='font-size: 130%'>[[value]]</b>"
        }],
        "chartScrollbar": {
            "graph": "g1",
            "oppositeAxis": false,
            "offset": 30,
            "scrollbarHeight": 50,
            "backgroundAlpha": 0,
            "selectedBackgroundAlpha": 0.9,
            "selectedBackgroundColor": "#ffffff",
            "graphFillAlpha": 0,
            "graphLineAlpha": 0.5,
            "selectedGraphFillAlpha": 0,
            "selectedGraphLineAlpha": 1,
            "autoGridCount": true,
            "color": "#AAAAAA"
        },
        "chartCursor": {
            "pan": true,
            "valueLineEnabled": true,
            "valueLineBalloonEnabled": true,
            "cursorAlpha": 0,
            "valueLineAlpha": 0.2
        },
        "categoryField": "date",
        "categoryAxis": {
            "parseDates": true,
            "dashLength": 1,
            "minorGridEnabled": true
        },
        "legend": {
            "useGraphSettings": true,
            "position": "top"
        },
        "balloon": {
            "borderThickness": 1,
            "shadowAlpha": 0
        },
        "export": {
            "enabled": true
        },
        "dataProvider": [{
            "date": "2013-01-16",
            "market1": 71,
            "market2": 75,
            "sales1": 5,
            "sales2": 8
        }, {
            "date": "2013-01-17",
            "market1": 74,
            "market2": 78,
            "sales1": 4,
            "sales2": 6
        }, {
            "date": "2013-01-18",
            "market1": 78,
            "market2": 88,
            "sales1": 5,
            "sales2": 2
        }, {
            "date": "2013-01-19",
            "market1": 85,
            "market2": 89,
            "sales1": 8,
            "sales2": 9
        }, {
            "date": "2013-01-20",
            "market1": 82,
            "market2": 89,
            "sales1": 9,
            "sales2": 6
        }, {
            "date": "2013-01-21",
            "market1": 83,
            "market2": 85,
            "sales1": 3,
            "sales2": 5
        }, {
            "date": "2013-01-22",
            "market1": 88,
            "market2": 92,
            "sales1": 5,
            "sales2": 7
        }, {
            "date": "2013-01-23",
            "market1": 85,
            "market2": 90,
            "sales1": 7,
            "sales2": 6
        }, {
            "date": "2013-01-24",
            "market1": 85,
            "market2": 91,
            "sales1": 9,
            "sales2": 5
        }, {
            "date": "2013-01-25",
            "market1": 80,
            "market2": 84,
            "sales1": 5,
            "sales2": 8
        }, {
            "date": "2013-01-26",
            "market1": 87,
            "market2": 92,
            "sales1": 4,
            "sales2": 8
        }, {
            "date": "2013-01-27",
            "market1": 84,
            "market2": 87,
            "sales1": 3,
            "sales2": 4
        }, {
            "date": "2013-01-28",
            "market1": 83,
            "market2": 88,
            "sales1": 5,
            "sales2": 7
        }, {
            "date": "2013-01-29",
            "market1": 84,
            "market2": 87,
            "sales1": 5,
            "sales2": 8
        }, {
            "date": "2013-01-30",
            "market1": 81,
            "market2": 85,
            "sales1": 4,
            "sales2": 7
        }]
    });

    var chartData = [{
        "date": "2017-01-01",
        "distance": 250,
        "townName": "Dhaka",
        "townName2": "Dhaka",
        "townSize": 25,
        "latitude": 40.71,
        "duration": 408
    }, {
        "date": "2017-01-02",
        "distance": 371,
        "townName": "Chittagong",
        "townSize": 14,
        "latitude": 38.89,
        "duration": 482
    }, {
        "date": "2017-01-03",
        "distance": 433,
        "townName": "Comilla",
        "townSize": 6,
        "latitude": 34.22,
        "duration": 562
    }, {
        "date": "2017-01-04",
        "distance": 345,
        "townName": "Jacksonville",
        "townSize": 7,
        "latitude": 30.35,
        "duration": 379
    }, {
        "date": "2017-01-05",
        "distance": 480,
        "townName": "Noakhali",
        "townName2": "Noakhali",
        "townSize": 10,
        "latitude": 25.83,
        "duration": 501
    }, {
        "date": "2017-01-06",
        "distance": 386,
        "townName": "Chadpur",
        "townSize": 7,
        "latitude": 30.46,
        "duration": 443
    }, {
        "date": "2017-01-07",
        "distance": 348,
        "townName": "Borishal",
        "townSize": 10,
        "latitude": 29.94,
        "duration": 405
    }, {
        "date": "2017-01-08",
        "distance": 238,
        "townName": "Feni",
        "townName2": "Feni",
        "townSize": 16,
        "latitude": 29.76,
        "duration": 309
    }, {
        "date": "2017-01-09",
        "distance": 218,
        "townName": "Dalas",
        "townSize": 17,
        "latitude": 32.8,
        "duration": 287
    }, {
        "date": "2017-01-10",
        "distance": 349,
        "townName": "Oklahoma City",
        "townSize": 11,
        "latitude": 35.49,
        "duration": 485
    }, {
        "date": "2017-01-11",
        "distance": 603,
        "townName": "Kansas City",
        "townSize": 10,
        "latitude": 39.1,
        "duration": 890
    }, {
        "date": "2017-01-12",
        "distance": 534,
        "townName": "Rangamati",
        "townName2": "Rangamati",
        "townSize": 18,
        "latitude": 39.74,
        "duration": 810
    }, {
        "date": "2017-01-13",
        "townName": "Salt Lake City",
        "townSize": 12,
        "distance": 425,
        "duration": 670,
        "latitude": 40.75,
        "alpha": 0.4
    }, {
        "date": "2017-01-14",
        "latitude": 36.1,
        "duration": 470,
        "townName": "Las Vegas",
        "townName2": "Las Vegas",
        "bulletClass": "lastBullet"
    }, {
        "date": "2017-01-15"
    }, {
        "date": "2017-01-16"
    }
    ];
    var chart = AmCharts.makeChart("chartdiv2", {
        "type": "serial",
        "theme": "light",

        "dataDateFormat": "YYYY-MM-DD",
        "dataProvider": chartData,

        "addClassNames": true,
        "startDuration": 1,
        //"color": "#FFFFFF",
        "marginLeft": 0,

        "categoryField": "date",
        "categoryAxis": {
            "parseDates": true,
            "minPeriod": "DD",
            "autoGridCount": false,
            "gridCount": 50,
            "gridAlpha": 0.1,
            "gridColor": "#FFFFFF",
            "axisColor": "#555555",
            "dateFormats": [{
                "period": 'DD',
                "format": 'DD'
            }, {
                "period": 'WW',
                "format": 'MMM DD'
            }, {
                "period": 'MM',
                "format": 'MMM'
            }, {
                "period": 'YYYY',
                "format": 'YYYY'
            }]
        },

        "valueAxes": [{
            "id": "a1",
            "title": "distance",
            "gridAlpha": 0,
            "axisAlpha": 0
        }, {
            "id": "a2",
            "position": "right",
            "gridAlpha": 0,
            "axisAlpha": 0,
            "labelsEnabled": false
        }, {
            "id": "a3",
            "title": "duration",
            "position": "right",
            "gridAlpha": 0,
            "axisAlpha": 0,
            "inside": true,
            "duration": "mm",
            "durationUnits": {
                "DD": "d. ",
                "hh": "h ",
                "mm": "min",
                "ss": ""
            }
        }],
        "graphs": [{
            "id": "g1",
            "valueField": "distance",
            "title": "distance",
            "type": "column",
            "fillAlphas": 0.9,
            "valueAxis": "a1",
            "balloonText": "[[value]] miles",
            "legendValueText": "[[value]] mi",
            "legendPeriodValueText": "total: [[value.sum]] mi",
            "lineColor": "#263238",
            "alphaField": "alpha"
        }, {
            "id": "g2",
            "valueField": "latitude",
            "classNameField": "bulletClass",
            "title": "latitude/city",
            "type": "line",
            "valueAxis": "a2",
            "lineColor": "#558B2F",
            "lineThickness": 1,
            "legendValueText": "[[value]]/[[description]]",
            "descriptionField": "townName",
            "bullet": "round",
            "bulletSizeField": "townSize",
            "bulletBorderColor": "#558B2F",
            "bulletBorderAlpha": 1,
            "bulletBorderThickness": 2,
            "bulletColor": "#558B2F",
            "labelText": "[[townName2]]",
            "labelPosition": "right",
            "balloonText": "latitude:[[value]]",
            "showBalloon": true,
            "animationPlayed": true
        }, {
            "id": "g3",
            "title": "duration",
            "valueField": "duration",
            "type": "line",
            "valueAxis": "a3",
            "lineColor": "#E5343D",
            "balloonText": "[[value]]",
            "lineThickness": 1,
            "legendValueText": "[[value]]",
            "bullet": "square",
            "bulletBorderColor": "#E5343D",
            "bulletBorderThickness": 1,
            "bulletBorderAlpha": 1,
            "dashLengthField": "dashLength",
            "animationPlayed": true
        }],

        "chartCursor": {
            "zoomable": false,
            "categoryBalloonDateFormat": "DD",
            "cursorAlpha": 0,
            "valueBalloonsEnabled": false
        },
        "legend": {
            "bulletType": "round",
            "equalWidths": false,
            "valueWidth": 120,
            "useGraphSettings": true
            //"color": "#FFFFFF"
        }
    });

    var chart = AmCharts.makeChart("chartPie", {
        "type": "pie",
        //                    "theme": "light",
        "addClassNames": true,
        "classNameField": "class",
        "dataProvider": [{
            "value": 4852,
            "class": "color1"
        }, {
            "value": 9899,
            "class": "color2"
        }, {
            "value": 7789,
            "class": "color3"
        }],
        "valueField": "value",
        "labelRadius": 5,

        "radius": "42%",
        "innerRadius": "60%",
        "labelText": "[[title]]",
        "export": {
            "enabled": true
        }
    });

});
