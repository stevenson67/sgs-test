document.addEventListener('DOMContentLoaded', function() {
    const data = {
        'Город1': {
            'Цех1': ['Сотрудник1', 'Сотрудник2'],
            'Цех2': ['Сотрудник3', 'Сотрудник4']
        },
        'Город2': {
            'Цех3': ['Сотрудник5', 'Сотрудник6'],
            'Цех4': ['Сотрудник7', 'Сотрудник8']
        }
    };

    const citySelect = document.getElementById('city');
    const departmentSelect = document.getElementById('department');
    const employeeSelect = document.getElementById('employee');
    const brigadeSelect = document.getElementById('brigade');
    const shiftSelect = document.getElementById('shift');

    function updateDepartments() {
        const selectedCity = citySelect.value;
        departmentSelect.innerHTML = '<option value="">Выберите цех</option>';
        employeeSelect.innerHTML = '<option value="">Выберите сотрудника</option>';

        if (selectedCity) {
            for (let department in data[selectedCity]) {
                const option = document.createElement('option');
                option.value = department;
                option.text = department;
                departmentSelect.add(option);
            }
        }
    }

    function updateEmployees() {
        const selectedCity = citySelect.value;
        const selectedDepartment = departmentSelect.value;
        employeeSelect.innerHTML = '<option value="">Выберите сотрудника</option>';

        if (selectedCity && selectedDepartment) {
            const employees = data[selectedCity][selectedDepartment];
            employees.forEach(employee => {
                const option = document.createElement('option');
                option.value = employee;
                option.text = employee;
                employeeSelect.add(option);
            });
        }
    }

    citySelect.addEventListener('change', updateDepartments);
    departmentSelect.addEventListener('change', updateEmployees);

    document.getElementById('save').addEventListener('click', function() {
        const selectedData = {
            city: citySelect.value,
            department: departmentSelect.value,
            employee: employeeSelect.value,
            brigade: brigadeSelect.value,
            shift: shiftSelect.value
        };
        document.cookie = "formData=" + JSON.stringify(selectedData);
        alert("Данные сохранены в cookie.");
    });
});