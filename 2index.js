let array = [
  {
    id: 1,
    nombre: "luis ",
    relacion: 0,
  },
  {
    id: 2,
    nombre: "alf ",
    relacion: 1,
  },
  {
    id: 3,
    nombre: "de la ",
    relacion: 1,
  },
  {
    id: 4,
    nombre: "ossa",
    relacion: 3,
  },
  {
    id: 4345,
    nombre: "redo",
    relacion: 2
  },
];


let newArray = []

for(let item of array){
  if (item.id == 4) {
    newArray.push({
      ...item,
      children:[]
    });
  }
}




let prueba = []

for (let item of array) {

  for (let jitem of array) {

    if (jitem.relacion == item.id) {
      // console.log(`jelement ${jelement.relacion} es igual a element ${element.id}`)
      prueba.push(
        {
          ...jitem,
        }
      ) 
    }
  }
}


for (let j = 0; j < array.length; j++) {
  const e = array[j];
  //console.log(e)
  for (let i = 0; i < prueba.length; i++) {
    const otro = prueba[i];
    //console.log(otro)

    if (otro.relacion == e.id) {
      console.log(otro)
      array.push({
        ...otro
      })
    }
    
  }
  
}

console.log(array)

