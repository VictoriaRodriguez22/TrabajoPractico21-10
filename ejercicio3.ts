class Radio{
    protected volumen : number;
    protected frecuencia :  number;
    protected estaprendido : boolean;

    public constructor (volumen: number, frecuencia: number, prendido: boolean){
        this.volumen = volumen;
        this.frecuencia = frecuencia;
        this.estaprendido = true;
    }

    public subirVolumen(){
        this.volumen = this.volumen +1;
    }

    public bajarVolumen (){
        this.volumen = this.volumen -1;
    }

    public prenderRadio (){
        this.estaprendido = true;
        console.log( 'la radio esta prendida')

    }

    public apagarRadio (){
        this.estaprendido = false;
    }

    public setFrecuencia (frecuencia: number){
        this.frecuencia = frecuencia;
        console.log ('la frecuencia es ' + this.frecuencia)
    }

    public getFrecuencia (){
        return "esta en el frecuencia " +  this.frecuencia
    }

}

let radio1: Radio = new Radio (50, 101.5, true);



class SmartRadio extends Radio{
   private Internet: boolean;


   public constructor (volumen: number, frecuencia: number, estaprendido: boolean){
    super(volumen, frecuencia, estaprendido);
    this.Internet = true;
   }


   }

let radio2 : SmartRadio = new SmartRadio (25, 40.2, true);

console.log (radio1);
console.log(radio2);

radio1.subirVolumen();