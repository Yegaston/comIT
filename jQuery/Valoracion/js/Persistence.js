export default class Persistence {
    constructor() {
        // this.starAcum = starAcum;
        // this.cantVots = cantVots;
    };

    set(starAcum, cantVots) {
        await this.get();
        const prom = starAcum / cantVots;
        console.log(prom)
        localStorage.removeItem('prom');
        localStorage.removeItem('starAcum');
        localStorage.removeItem('cantVots');
        localStorage.setItem('starAcum', starAcum.toString())
        localStorage.setItem('cantVots', cantVots.toString())
        localStorage.setItem('prom', prom.toString())
    }

    get(starAcum, cantVots) {
        starAcum = parseInt(localStorage.getItem('starAcum'));
        cantVots = parseInt(localStorage.getItem('cantVots'));
        console.log(localStorage.getItem('prom'))
        console.log(starAcum)
        console.log(cantVots)
    }

}

