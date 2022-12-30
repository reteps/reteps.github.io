function changeoldgradedisplay() {
    if (document.getElementById('radio_old_grade').checked) {
        document.getElementById('old_grade_input').style.display = 'block';
    } else {
        document.getElementById('old_grade_input').style.display = 'none';
    }
}
function get_average(items) {
    var sum = 0;
    var len = items.length;
    for (var i = 0; i < len; i++) {
        sum += parseFloat(items[i]);
    }
    return sum/len;
}

function add_grades() {
    var formal_grades = document.getElementById('fog').value.split(',').filter(String);
    var pformal = .65
    var iformal = .35
    var is_hough = document.getElementById('hough').checked;
    if (is_hough) {
        pformal = .7
        iformal = .3
    }
    //http://stackoverflow.com/questions/281264/remove-empty-elements-from-an-array-in-javascript
    
    var informal_grades = document.getElementById('ing').value.split(',').filter(String);
    var previous_grade = (get_average(formal_grades) * pformal) + (get_average(informal_grades) * iformal);
    console.log(formal_grades)
    console.log(informal_grades)
    document.getElementById('previous_grade').innerHTML = 'Estimate of previous grade - ' + previous_grade.toFixed(2);
    
    var is_formal = document.getElementById('formal_radio').checked;
    
    if (is_formal) {
        new_grade = document.getElementById("new_grade_input").value;
        if (document.getElementById('radio_old_grade').checked) {
            old_grade = document.getElementById("old_grade_input").value;
            formal_grades[formal_grades.indexOf(old_grade)] = new_grade
        } else {
            formal_grades.push(new_grade);
        }
    } else {
        new_grade = document.getElementById("new_grade_input").value;
        if (document.getElementById('radio_old_grade').checked) {
            old_grade = document.getElementById("old_grade_input").value;
            informal_grades[informal_grades.indexOf(old_grade)] = new_grade
        } else {
            informal_grades.push(new_grade);
        }
    }
    
    var new_grade = (get_average(formal_grades) * pformal) + (get_average(informal_grades) * iformal);
    document.getElementById('new_grade').innerHTML = 'Estimate of new grade - ' + new_grade.toFixed(2);
}
            
        
