var selectedItem = "--:--";
var minuteInterval = 15;
var multiplier = 60 / minuteInterval;
var timeArray = [24 * multiplier + 1];

timeArray[0] = selectedItem;

var hourPlaceholder;
var minutePlaceholder;
var arrayIndex = 0;

// Build an array to hold all Start Times
$(document).ready(function()
{
    for (var hour = 0; hour < 24; hour++)
    {
        if (hour < 10)
        {
            hourPlaceholder = "0" + hour + ":";
        }
        else
        {
            hourPlaceholder = hour + ":";
        }

        for (var minuteIndex = 0; minuteIndex < 60; minuteIndex += minuteInterval)
        {
            if (minuteIndex < 10)
            {
                minutePlaceholder = "0" + minuteIndex;
                timeArray[arrayIndex + 1] = hourPlaceholder + minutePlaceholder;
                arrayIndex++;
            }
            else
            {
                minutePlaceholder = minuteIndex;
                timeArray[arrayIndex + 1] = hourPlaceholder + minutePlaceholder;
                arrayIndex++;
            }
        }
    }

    // Populate each combo box with timeArray
    for (var row = 0; row <= 1; row++)
    {
        for (var col = 0; col <= 1; col++)
        {
            var cbox = document.getElementById('cell' + row + col);

            for (var k = 0; k < timeArray.length; k++)
            {
                var opt = timeArray[k];
                var elem = document.createElement('option');
                elem.textContent = opt;
                elem.value = opt;
                cbox.appendChild(elem);
            }
        }
    }
})