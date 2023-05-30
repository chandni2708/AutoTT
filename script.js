function generateTT() {
    var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var periods = ['1st', '2nd', '3rd', '4th', '5th'];

     var subjects = [
    ['Maths', 'English', 'Science', 'History', 'Geography'],
    ['Physics', 'Chemistry', 'Biology', 'Maths', 'English'],
    ['English', 'History', 'Geography', 'Physics', 'Chemistry'],
    ['Biology', 'Maths', 'English', 'Science', 'History'],
    ['Chemistry', 'Biology', 'Maths', 'English', 'Science']
    ];
    
    var table = document.createElement('table');
    table.className = "w-auto table text-warning m-3 border border-dark"
    var thead = document.createElement('thead');
    var headerRow = document.createElement('tr');
    headerRow.className = "bg-warning text-dark p-2"
    var th = document.createElement('th');
    th.textContent = 'Time / Day ';
    headerRow.appendChild(th);

    for (var i = 0; i < days.length; i++){
        var dayTh = document.createElement('th');
        dayTh.textContent = days[i];
        headerRow.appendChild(dayTh);
    }

    thead.appendChild(headerRow);
    table.appendChild(thead);

    var tbody = document.createElement('tbody');
 
    for (var j = 0; j < periods.length; j++){
        var bodyRow = document.createElement('tr');
        bodyRow.className="p-3"
        var bodyTd = document.createElement('td');
        bodyTd.textContent = periods[j];
        bodyRow.appendChild(bodyTd);

        for (var k = 0; k < days.length; k++){
            var randomIndex = Math.floor(Math.random() * subjects[j].length);
            var sub = subjects[j][randomIndex];

            var subTd = document.createElement("td");
            subTd.textContent = sub;
            bodyRow.appendChild(subTd);
        }
        tbody.appendChild(bodyRow);
    }
    table.appendChild(tbody);

    var timeTableContainer = document.getElementById('timeTableContainer');
    timeTableContainer.innerHTML = '';  
    timeTableContainer.appendChild(table);
}

var generateBtn = document.getElementById('generateBtn');
generateBtn.addEventListener('click', generateTT);