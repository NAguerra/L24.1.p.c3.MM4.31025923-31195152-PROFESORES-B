let profesoresCategoría = (profesores, categoría) => {
    let prof = []
    for (let i = 0; i < profesores.length; i++) {
        if (profesores[i].categoria == categoría) {
            prof.push(profesores[i]);
        }
    }
    return prof;
}

let porctprof = (profesores, categoría, sexo) => {
    let profdecat = profesoresCategoría(profesores, categoría);
    let filtroS = profdecat.filter(profesor => profesor.sexo == sexo).length;
    let porct =  (filtroS / profdecat.length) * 100;
    return porct.toFixed(2);
}

let profesores = [
    {categoria: 1, nombre: 'Javier', sexo: 'M'},
    {categoria: 1, nombre: 'Maria', sexo: 'F'},
    {categoria: 2, nombre: 'Ana', sexo: 'F'},
    {categoria: 2, nombre: 'Carlos', sexo: 'M'},
    {categoria: 3, nombre: 'Pedro', sexo: 'M'},
    {categoria: 3, nombre: 'Marta', sexo: 'F'},
    {categoria: 4, nombre: 'Lucia', sexo: 'F'},
    {categoria: 4, nombre: 'Ricardo', sexo: 'M'},
    {categoria: 5, nombre: 'Jorge', sexo: 'M'},
    {categoria: 5, nombre: 'Sofia', sexo: 'F'},
];

let salida = document.getElementById("salida");
let pctoM1 = porctprof(profesores, 1, 'M');
let pctoM2 = porctprof(profesores, 2, 'M');
let pctoM3 = porctprof(profesores, 3, 'M');
let pctoM4 = porctprof(profesores, 4, 'M');
let pctoM5 = porctprof(profesores, 5, 'M');
let pctoF1 = porctprof(profesores, 1, 'F');
let pctoF2 = porctprof(profesores, 2, 'F');
let pctoF3 = porctprof(profesores, 3, 'F');
let pctoF4 = porctprof(profesores, 4, 'F');
let pctoF5 = porctprof(profesores, 5, 'F');

salida.innerHTML = `Porcentaje de instructores: ${pctoM1}% <br>`
salida.innerHTML += `Porcentaje de instructoras: ${pctoF1}% <br>`
salida.innerHTML += `<br> Porcentaje de asistentes (M): ${pctoM2}% <br>`
salida.innerHTML += `Porcentaje de asistentes (F): ${pctoF2}% <br>`
salida.innerHTML += `<br> Porcentaje de agregados: ${pctoM3}% <br>`
salida.innerHTML += `Porcentaje de agregadas: ${pctoF3}% <br>`
salida.innerHTML += `<br> Porcentaje de asociados: ${pctoM4}% <br>`
salida.innerHTML += `Porcentaje de asociadas: ${pctoF4}% <br>`
salida.innerHTML += `<br> Porcentaje de titulares (M): ${pctoM5}% <br>`
salida.innerHTML += `Porcentaje de titulares (F): ${pctoF5}% <br>`