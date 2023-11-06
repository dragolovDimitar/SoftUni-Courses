function companyUserss (arr){
    let companyEmployees = {};

    for (let comEmp of arr) {
        let [company, id] = comEmp.split(' -> ');

        if (company in companyEmployees) {
            if (!companyEmployees[company].includes(id)){
                companyEmployees[company].push(id);
            }
        } else {
            companyEmployees[company] = [id];
        }
    }

    let entries = Object.entries(companyEmployees).sort((a,b) => a[0].localeCompare(b[0]));
    for (let [name, ids] of entries){
        console.log(name);
        ids.forEach(id  => console.log(`-- ${id}`));
    }
}

companyUserss([ 'SoftUni -> AA12345', 'SoftUni -> BB12345', 'Microsoft -> CC12345', 'HP -> BB12345' ])