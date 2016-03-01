function ClearStartTimes()
{
    var element;

    element = document.getElementById("cell00");
    element.selectedIndex = 0;

    element = document.getElementById("cell10");
    element.selectedIndex = 0;

    element = document.getElementById("Duration1");
    element.innerHTML = "";
    element = document.getElementById("Duration2");
    element.innerHTML = "";
}

function ClearEndTimes() {
    var element;

    element = document.getElementById("cell01");
    element.selectedIndex = 0;

    element = document.getElementById("cell11");
    element.selectedIndex = 0;

    element = document.getElementById("Duration1");
    element.innerHTML = "";
    element = document.getElementById("Duration2");
    element.innerHTML = "";
}