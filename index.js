patients = [];

const getAllPatients = async () => {
    try {
        let res = await fetch('http://localhost:8080/api/pacientes', {
            mode: 'no-cors'
        })
        console.log(res);
        let data = await res.json();
        return data

    } catch (error) {
        console.log('Hubo un error al fetchear los datos. Revisar conexión a BD', error);
        return
    }
}

getAllPatients().then((data) => {
    console.log('data: ', data)
})

const data = [{ Name: 'Sydney', Day: 'Monday', Time: '10:00AM' }, { Name: 'New York', Day: 'Monday', Time: '11:00AM' }];
const tableData = data.map(value => {
    return (
        `<tr>
        <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">${value.Name}</td>
        <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">${value.Day}</td>
        <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">${value.Time}</td>
    </tr>`
    );
}).join('');
const tableBody = document.querySelector("#tableBody");
tableBody.innerHTML = tableData;