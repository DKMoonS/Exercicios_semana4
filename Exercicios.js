// função que cumprimenta
function cumprimentar (name) {
    return `Olá, ${name}!`;
}

console.log(cumprimentar('Felipe')); // print

//função que calcula a idade em dias
function idade(ano){
    const dias = ano * 365;
    return dias;
}

console.log(idade(23)); // print

// função que calcula salário
const x = (tempo, valor) => console.log (`Salário igual a R$`, tempo*valor*30); // arrow
x(4, 10);

// function pra converter o numero do mes em string
function mes (x) {
    const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho',
'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
    return console.log(meses[x]);
}

mes (0);

//comparacao entre dois numeros
function comparacao (x , y) {
    if (x > y)
        return true;
    else return false;
}

const k = comparacao(1 , 8);
console.log(k);
typeof(k);

// função que retorna o inverso
function inverso (k) {
    if (typeof k === "boolean") // verifica se eh bool
    {
        if (k === true)
             console.log(false);
        else  console.log(true);
    }
    else if (typeof k === "number") // verifica se eh number
    {
        const x = k * -1;
         console.log (x);
    } else console.log ('Tipo bool ou numero esperados, mas o parametro eh do tipo', typeof k);
}
inverso(12);
inverso(true);
inverso('maraca');

// funcao inclusiva
function between (a, b , c, d = false) {
    if (d == false)
    {
        if (a > b && a < c)
            return true;
        else return false;
    } 
    else 
    {
        if (a>= b && a<= c)
            return true;
        else return false;
    }
}

console.log(between(10, 10, 90, true));

// funçao que multiplica
function multi (x, y) {
    f = 0;
    for (i = 0; i < x; i++)
        f = f + y;
    return f;
}

console.log(multi(3,4));

// funcao array
function array (x, y) {
    const vet = [];
    for (i = 0; i < y; i++) 
        vet[i] = x;
    return vet;
}

console.log(array('ai', 5));

//funcao +
function mais(x) { 
    return "+".repeat(x);
}

console.log(mais(3));

// funcao que retorna o último elemento
function last(v) {
    const a = [];
    a[0] = v[0];
    a[1] = v[v.length - 1];
    return a;
}

console.log(last(['nao', 'sim', 'talvez']));

// funcao que copia o objeto sem uma propriedade
function remove(x, prop){
    const copia = {...x};
    delete copia[prop];
    return copia;
}

console.log(remove({a: 2,G: 3,c: 4,d: 'seila'}, "G"));

// funcao que volta só numeros
function removeStrings(vetor) {
    const num = [];
    for (i=0;i< vetor.length;i++)
    {
        if (typeof vetor[i] === "number")
            num.push(vetor[i]);   
    }
    return num;   
}

console.log(removeStrings([4, 'batata', 'teste', 5, 6]));
// funcao que retorna o valor de cada atributo
function valor(a){
   return Object.entries(a);
}

console.log(valor({Nome:"Felipe", Idade: 23}));
// funcao dos pares
function pares(x) {
    const result = [];
    for (i = 0; i<x.length;i++)
    {
        if (x[i] % 2 === 0)
            if ((i+1)%2 === 0)
                result.push(x[i]);
    }
    return result;
}

console.log(pares([1, 2, 4, 6, 5, 7, 10]));

// funcao soma 
function somaTudo (x){
    let resultado = 0;
    for(i=0;i<x.length;i++)
        resultado = resultado + x[i];
    return resultado;
}

console.log(somaTudo([1, 2, 3, 4, 5, 5]))

// funcao soma despesas
function somaDespesas (produto) {
    let price = 0;
    for (i=0; i<produto.length; i++)
        price = price + produto[i].preco;
    return price;
}   

console.log(somaDespesas([
    {nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99},
    {nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90}
    ]));

// funcao media
function media(x) {
    let result = 0;
    for (i = 0; i < x.length; i++)
    {
        result += x[i];
    }
    result = result/x.length;
    return result;
}   

console.log(media([1, 4, 5 , 6]))

// funcao menor numero do array
function menor(x) {
    let resultado = x[0];
    for (i=1; i<x.length; i++)
        if (resultado > x[i])
            resultado = x[i];
    return resultado;
}  

console.log (menor([1, -30, 40, 60, -90]));

// funcao contadora de palavars 
function contador(x){
    const i = x.split(" ");
    return i.length;

}

console.log(contador("sou um macaco albino"));

// funcao que verifica a qtde de um caractere em especifico -- resolução com charAt
function verificador(c, x) {
    const i = x.split('');
    let contador = 0;
    for (k=0; k<i.length; k++)
        if (i[k] === c)
            contador += 1;
    return contador;
}

console.log(verificador("r", "A sorte favoRece os audazes"));

// funcao que filtra as palavras
function filtro (palavra, array) {
    let resultado = [];
    for(i=0;i<array.length;i++)
        if (array[i].includes(palavra))
            resultado.push(array[i]);
    return resultado;
}

console.log(filtro("bata", ["batata", "batinha", "batatao", "pai"]));

// função que remove vogais
function removerVogais(string) {
    const vogais = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"]
    vogais.forEach( vogal => string = string.replace(vogal, '') )
    return string
    }
    
    
console.log(removerVogais("seila"))

// função que filtra o numero de digitos
function filtra (array, n) {
    let resultado = [];
    let aux = 0;
    for (i=0;i<array.length;i++)
    {
        aux = String(array[i]).length;
        if (aux == n)
            resultado.push(array[i]);
    }
    return resultado;
}

console.log(filtra([44, 55, 100, 1000, 9, 2, 99999], 3));

// função que retorna o segundo maior numero do array 
function segundo(array) {
    let copia = array;
    let posicao = 0;
    let aux = array[0];

    for (i=1;i<array.length;i++)
    {
        if (array[i] > aux)
        {
            aux = array[i];
            posicao = i;
        }
    }
    copia.splice(posicao, 1);
    aux = array[0];
    for (i=1;i<array.length;i++)
    {
        if (array[i] > aux)
        {
            aux = array[i];
        }
    }
    return aux;

}

console.log(segundo([3, 4, 6, 9, 24, 15]));


