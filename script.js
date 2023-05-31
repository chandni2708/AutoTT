var addClick = document.getElementById('addClick');
var subjectInput = document.getElementById('subjectInput');
var addContent = document.getElementById('addContent');
var classInput = document.getElementById('classInput');
var Success = document.getElementById("lblsuccess");
var showSub = [];
var subjectRegex = /^[a-zA-Z]+$/;


addClick.addEventListener('click', () => {
    debugger
    var subjectValue = subjectInput.value;
    if (subjectValue !== "") {
        if (subjectRegex.test(subjectValue)) {
            if (showSub.length === 0 || showSub[showSub.length - 1] !== subjectValue) {
                showSub.push(subjectValue);
                addContent.textContent = showSub.join(", ");
                Success.innerHTML = "Subject Added Successfully";
                Success.style.display = "block";
                subjectInput.value = "";

                setTimeout(function () {
                    Success.style.display = "none";
                }, 1000);
            } else {
                Success.innerHTML = "Please enter a different subject";
                Success.style.display = "block";

                setTimeout(function () {
                    Success.style.display = "none";
                }, 1000);
            }
        }
         else {
            Success.innerHTML = "Please enter a valid subject (only characters)";
            Success.style.display = "block";
            subjectInput.value = "";

            setTimeout(function () {
                Success.style.display = "none";
            }, 1000);
        }
    }
    });

debugger;
function generateTT(showSub) {
    debugger;
    console.log("clickedddd")
    var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    // var periods = ['1st', '2nd', '3rd', '4th', '5th'];
    var periods = [
        '8:00 AM - 8:30 AM',
        '8:35 AM - 9:05 AM',
        '9:10 AM - 9:40 AM',
        '9:40 AM - 10:20 AM',
        '10:20 AM - 10:50 AM',
        '10:55 AM - 11:25 AM',
        '11:30 AM - 12:00 PM'
    ];
    //  var subjects = [
    // ['Maths', 'English', 'Science', 'History', 'Geography'],
    // ['Physics', 'Chemistry', 'Biology', 'Maths', 'English'],
    // ['English', 'History', 'Geography', 'Physics', 'Chemistry'],
    // ['Biology', 'Maths', 'English', 'Science', 'History'],
    // ['Chemistry', 'Biology', 'Maths', 'English', 'Science']
    // ];
    //debugger;;

    // var subjects = subjectInputValue.split(',');

    var subjects = showSub;
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
    debugger;
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
        } else {
            for (var k = 0; k < days.length; k++) {
                var newSubjects = subjects.toString().split(',');
             //convertef ['maths,science'] to 'maths,science' with to string and maded it to ['maths','science'] with the help of split;
                var randomIndex = Math.floor(Math.random() * newSubjects.length);
                var sub = newSubjects[randomIndex];

                var subTd = document.createElement("td");
                subTd.textContent = sub;
                bodyRow.appendChild(subTd);
            }
        }

        tbody.appendChild(bodyRow);
    }
    table.appendChild(tbody);


    //debugger;;
    var classInputValue = document.getElementById('classInput').value;
    if (classInputValue.trim() == null || classInputValue.trim() == " ") {
        return false;
    }
    else {
        var textContainer = document.getElementById('textContainer');
        textContainer.innerText = "Showing Time-Table For Class " + classInputValue;
        var timeTableContainer = document.getElementById('timeTableContainer');
        timeTableContainer.innerHTML = '';
        timeTableContainer.appendChild(table);
        

    }

}


var generateBtn = document.getElementById('generateBtn');
generateBtn.addEventListener('click', function () {
    if (classInput.value == "" || classInput.value == null && subjectInput.value == "" || subjectInput.value == null) {
        return false;
    }
    else {
        debugger;
        if (showSub.length !== 0) {
            generateTT(showSub);
        }
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
          showSub = [];
})

