function getAdmins(map){
    let admins = [];
    for ([key, value] of map) {
        if(value === 'Admin'){
            admins.push(key);
        }
    }
    return admins
}

const usuarios = new Map();

usuarios.set('Amanda', 'Admin');
usuarios.set('Max', 'Admin');
usuarios.set('Camilla', 'User');
usuarios.set('Thiago', 'User"')


console.log(getAdmins(usuarios))


const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];
function valoresUnicos(array){
    const mySet = new Set(array);

    return [...mySet]
}

console.log(valoresUnicos(meuArray))