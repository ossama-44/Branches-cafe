let Check = 0;


function insert(e) {
    e.preventDefault();
    let form_2 = document.getElementById('form_2');
    let data = document.getElementById('t_body');

    let tr = `<tr>
    <td>${form_2.elements[0].value}</td>
    <td>${form_2.elements[1].value}</td>
    <td>${form_2.elements[2].value}</td>
    <td>${form_2.elements[3].value}</td>
</tr>`;

data.innerHTML += tr;


    
}


function sumTotal(e) {
    let totalElement = document.getElementById('Check');
    let form_3 = document.getElementById('form_3');
    let inpt_1 = document.getElementById('inpt_1');
    let inpt_2 = document.getElementById('inpt_2');
    e.preventDefault();
    let data = document.getElementById('t_body');

    let tr = `<tr>
    <td>${form_3.elements[0].value}</td>
    <td>${form_3.elements[1].value}</td>
</tr>`;

data.innerHTML += tr;

Check+= Number(form_3.elements[1].value);

totalElement.innerHTML = ''+Check;


inpt_1.value = '';
inpt_2.value = '';
    
}