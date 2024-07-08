export const Tareas = [
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



document.querySelectorAll("input[type='checkbox']").forEach(function (element) {
    const id = element.dataset.id 
    const inpuclass = `.mySwitch${id}`
    
    document.querySelector(inpuclass).addEventListener('change', function (event) {
    I
        const checked = event.target.checked
        const product = productos.find((producto) => producto.id == id)
        product.disponible = checked
        renderData (tableBody, productos)
    })
})