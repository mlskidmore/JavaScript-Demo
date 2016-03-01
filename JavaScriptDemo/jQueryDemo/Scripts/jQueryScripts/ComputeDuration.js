var duration1, duration2;
var selectedVal00, selectedVal01;
var start1, end1;
var start2, end2;

function UpdateCell00()
{
    var elem00 = document.getElementById("cell00");
    selectedVal00 = elem00.options[elem00.selectedIndex].value;
    //alert("00: " + selectedVal00);    

    switch (selectedVal00)
    {
        case "00:00":
            start1 = 0;
            break;

        case "00:15":
            start1 = 15;
            break;
        case "00:30":
            start1 = 30;
            break;
        case "00:45":
            start1 = 45;
            break;
        case "01:00":
            start1 = 60;
            break;
    }
}

function UpdateCell01()
{
    var elem01 = document.getElementById("cell01");
    selectedVal01 = elem01.options[elem01.selectedIndex].value;
    //alert("01: " + selectedVal01);

    switch (selectedVal01)
    {
        case "00:00":
            end1 = 0;
            break;
        case "00:15":
            end1 = 15;
            break;
        case "00:30":
            end1 = 30;
            break;
        case "00:45":
            end1 = 45;
            break;
        case "01:00":
            end1 = 60;
            break;
    }

    computeDuration1();
}

function UpdateCell10()
{
    var elem10 = document.getElementById("cell10");
    var selectedVal10 = elem10.options[elem10.selectedIndex].value;
    //alert("10: " + selectedVal10);

    switch (selectedVal10)
    {
        case "00:00":
            start2 = 0;
            break;
        case "00:15":
            start2 = 15;
            break;
        case "00:30":
            start2 = 30;
            break;
        case "00:45":
            start2 = 45;
            break;
        case "01:00":
            start2 = 60;
            break;
    }
}

function UpdateCell11()
{
    var elem11 = document.getElementById("cell11");
    var selectedVal11 = elem11.options[elem11.selectedIndex].value;
    //alert("11: " + selectedVal11);

    switch (selectedVal11)
    {
        case "00:00":
            end2 = 0;
            break;
        case "00:15":
            end2 = 15;
            break;
        case "00:30":
            end2 = 30;
            break;
        case "00:45":
            end2 = 45;
            break;
        case "01:00":
            end2 = 60;
            break;
    }

    computeDuration2();
}

function computeDuration1()
{
    duration1 = end1 - start1;
    document.getElementById("Duration1").innerHTML = duration1;
}
function computeDuration2()
{
    duration2 = end2 - start2;
    document.getElementById("Duration2").innerHTML = duration2;
}