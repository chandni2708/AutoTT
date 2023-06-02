var addClick = document.getElementById('addClick');
var subjectInput = document.getElementById('subjectInput');
var addContent = document.getElementById('addContent');
var weightContent = document.getElementById('weightContent');
var classInput = document.getElementById('classInput');
var Success = document.getElementById("lblsuccess");
var showSub = [];
var showWeight = [];
var subjectRegex = /^[a-z]+$/i;
var weightageInput = document.getElementById('weightageInput');

addClick.addEventListener('click', () => {
    debugger;
    var subjectValue = subjectInput.value.trim().toLowerCase();
    var weightageValue = weightageInput.value;

    if (weightageValue == "" || weightageValue == 0 || weightageValue == null) {
        showError("Please choose a weightage.");
        return false;
    }
    if (subjectValue !== "") {
        if (subjectRegex.test(subjectValue)) {
            if (showSub.length === 0 || showSub[showSub.length - 1].toLowerCase() !== subjectValue || showWeight.length === 0) {
                showSub.push(subjectValue);
                showWeight.push(weightageValue + "%");
                addContent.textContent = "Selected Subjects : " + showSub.join(", ");
                weightContent.textContent = "Selected Subject Weightage : " + showWeight.join(",");
                Success.innerHTML = "Subject Added Successfully";
                Success.style.display = "block";
                subjectInput.value = "";
                weightageInput.value = 0;

                setTimeout(function () {
                    Success.style.display = "none";
                }, 1000);
            } else {
                showError("Please enter a different subject.");
                subjectInput.value = "";
            }
        } else {
            showError("Please enter a valid subject (only characters).");
            subjectInput.value = "";
        }
    } else {
        showError("Please enter a subject.");
    }
});

function showError(message) {
    Success.innerHTML = message;
    Success.style.display = "block";

    setTimeout(function () {
        Success.style.display = "none";
    }, 1000);
}

debugger;
function generateTT(showSub) {
    var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var periods = [
        '8:00 AM - 8:30 AM',
        '8:35 AM - 9:05 AM',
        '9:10 AM - 9:40 AM',
        '9:40 AM - 10:20 AM',
        '10:20 AM - 10:50 AM',
        '10:55 AM - 11:25 AM',
        '11:30 AM - 12:00 PM'
    ];


    var subjects = showSub;
    var weightages = showWeight.map(weight => parseInt(weight));
    var table = document.createElement('table');
    table.className = "w-auto table text-warning m-3 border border-dark";

    var thead = document.createElement('thead');
    var headerRow = document.createElement('tr');
    headerRow.className = "bg-warning text-dark p-2";

    var th = document.createElement('th');
    th.textContent = 'Time / Day';
    headerRow.appendChild(th);

    for (var i = 0; i < days.length; i++) {
        var dayTh = document.createElement('th');
        dayTh.textContent = days[i];
        headerRow.appendChild(dayTh);
    }

    thead.appendChild(headerRow);
    table.appendChild(thead);

    var tbody = document.createElement('tbody');

    for (var j = 0; j < periods.length; j++) {
        var bodyRow = document.createElement('tr');
        bodyRow.className = "p-3";
        var bodyTd = document.createElement('td');
        bodyTd.textContent = periods[j];
        bodyRow.appendChild(bodyTd);

        if (periods[j] === '9:40 AM - 10:20 AM') {
            bodyTd.className = "text-warning";
            var recessTd = document.createElement('td');
            recessTd.setAttribute('colspan', days.length.toString());
            recessTd.className = "text-warning fs-4 text-center";
            recessTd.textContent = 'Recess';
            bodyRow.appendChild(recessTd);

        }
        else {
            debugger;
            for (var k = 0; k < days.length; k++) {
                var newSubjects = [];
                for (var s = 0; s < subjects.length; s++) {
                    var tempSubject = subjects[s];
                    var subjectWeightage = weightages[s];
                    for (var w = 0; w < subjectWeightage; w++) {
                        newSubjects.push(tempSubject);
                    }
                }
                var randomIndex = Math.floor(Math.random() * newSubjects.length);
                var sub = newSubjects[randomIndex];
                var capitalizedSub = sub.charAt(0).toUpperCase() + sub.slice(1);

                var subTd = document.createElement("td");
                subTd.textContent = capitalizedSub;
                bodyRow.appendChild(subTd);

            }
        }

        tbody.appendChild(bodyRow);
    }
    table.appendChild(tbody);

    var classInputValue = document.getElementById('classInput').value;
    if (classInputValue.trim() == null || classInputValue.trim() == " ") {
        return false;
    } else {
        var textContainer = document.getElementById('textContainer');
        textContainer.innerText = "Showing Time-Table For Class " + classInputValue;

        var timeTableContainer = document.getElementById('timeTableContainer');
        timeTableContainer.innerHTML = '';
        timeTableContainer.appendChild(table);
    }
}

var generateBtn = document.getElementById('generateBtn');
generateBtn.addEventListener('click', function () {
    // if (classInput.value == "" || classInput.value == null && subjectInput.value == "" || subjectInput.value == null || weightageInput.value == 0 || weightageInput.value == null) {
    //   return false;
    // }
    // else {
    debugger;
    if (showSub.length !== 0 && showWeight !== 0) {
        generateTT(showSub);
    }

});



var clearBtn = document.getElementById('clearBtn');
clearBtn.addEventListener('click', () => {
    subjectInput.value = '';
    classInput.value = "";
    var timeTableContainer = document.getElementById('timeTableContainer');
    var textContainer = document.getElementById('textContainer');
    timeTableContainer.innerHTML = '';
    textContainer.innerText = '';
    addContent.textContent = '';
    weightContent.textContent = '';
    showSub = [];
    showWeight = [];
    weightageInput.value = 0;

})

