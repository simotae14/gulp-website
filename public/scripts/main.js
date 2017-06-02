class Persona {
    constructor(nome) {
        this.nome = nome;
    }
    hello() {
        if(typeof this.nome === 'string') {
            return 'Hello, I am ' + this.nome + '!';
        } else {
            return 'Hello!';
        }
    }
}

var persona = new Persona('Tae');
var greetHTML = templates['greeting']({
    message: persona.hello()
});


document.write(greetHTML);