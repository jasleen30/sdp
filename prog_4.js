var table = document.getElementById("displayTable"); //give this ID to your table

var data = { "employees":
[
{
"first_name": "Amit",
"last_name": "Sharma",
"department": "SEO"
},
{
"first_name": "Vineet",
"last_name": "Kumar",
"department": "Accounts"
},
{
"first_name": "Ajay",
"last_name": "Thakur",
"department": "QA"
},
{
"first_name": "Chandra",
"last_name": "Sharma",
"department": "Designer"
}
]
}

for (var i = 0; i < data.employees.length; i++) {
            drawRow(data.employees[i]);
        }
    

    function drawRow(rowData) {
        
   var row = $('<tr><td>' + rowData.first_name+ '</td><td>' + rowData.last_name + '</td><td>' + rowData.department +
    '</td></tr>');
            $('#displayTable').append(row);
        }
       
    