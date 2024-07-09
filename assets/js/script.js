const Tareas = [
    {
        id: 1,
        tarea: "Escribir",
        estado: true,
    },
    {
        id: 2,
        tarea: "Ordenar",
        estado: false,
    },
    {
        id: 3,
        tarea: "Subir",
        estado: true,
    }
]


const InputTareas = document.getElementById("InputIngresoTareas")/* INPUT */
const BtnAgregar = document.getElementById("IngresarTarea")/* BOTON AGREGAR */
const TareasT = document.getElementById("TotalTareas")/* CONTADOR TAREAS TOTALES */
const TareasRealizadas = document.getElementById("TareasRealizadas")/* CONTADOR TAREAS REALIZADAS */
const TareasPendientes = document.getElementById("TareasPendientes")/* CONTADOR TAREAS PENDIENTES */
const ListaTareas = document.getElementById("TablaLista")/* TABLA DE TAREAS */
const Estado = document.getElementsByClassName("checkbox")/* CHECKBOX ESTADO TAREAS */

/* FUNCIÓN BORRAR ELEMENTO DEL ARREGLO */
function Borrado(id){
    const BuscarTarea = Tareas.findIndex(tarea => tarea.id === id)
    if(BuscarTarea !== -1){
        Tareas.splice(BuscarTarea, 1)
        renderData(Tareas, ListaTareas);
    } else {
        console.log(`No se encontró la tarea con id ${id}.`);
    }
}

function Contadores(){
    const realizadas = Tareas.filter(tarea => tarea.estado === true).length
    const pendientes = Tareas.filter(tarea => tarea.estado === false).length
    TareasRealizadas.innerHTML = realizadas;
    TareasPendientes.innerHTML = pendientes;
}


function renderData(Tareas){
    let html = ""
    Tareas.forEach(function(tarea){
        html += `
            <tr>
                <td>${tarea.id}</td>
                <td>${tarea.tarea}</td>
                <td>
                <input ${tarea.estado ? `checked` : ``} onclick="CambioEstado(${tarea.id})" data-id="${tarea.id}" class="checkbox" type="checkbox" name="estado_${tarea.tarea}" id="checkbox_${tarea.tarea}">
                </td>
                <td><button onclick="Borrado(${tarea.id})">X</button></td>
            </tr>
        `
    })
    
    ListaTareas.innerHTML = html;
    TareasT.innerHTML = Tareas.length;
    Contadores();
}


let ids;
if (Tareas.length > 0) {
  ids = Tareas[Tareas.length - 1].id;
} else {
  ids = 0;
}

/* FUNCIÓN PARA CHECKBOXES */
function CambioEstado(tareaID){
    const tarea = Tareas.find((tarea) => tarea.id === tareaID);
    tarea.estado = !tarea.estado;
    renderData(Tareas);
    Contadores();
}


/* CREAR EVENTO EJECUTADO CON CLICK PARA TOMAR DATO Y AGREGARLO AL ARREGLO */
BtnAgregar.addEventListener("click", () => {
    ids += 1;
    const nuevaTarea = InputTareas.value;
    Tareas.push({id: ids, tarea: nuevaTarea, estado: false})
    InputTareas.value = ""

    renderData(Tareas, ListaTareas);
})


if(ListaTareas){
    renderData(Tareas, ListaTareas)
}