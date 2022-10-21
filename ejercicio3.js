var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Radio = /** @class */ (function () {
    function Radio(volumen, frecuencia, prendido) {
        this.volumen = volumen;
        this.frecuencia = frecuencia;
        this.estaprendido = true;
    }
    Radio.prototype.subirVolumen = function () {
        this.volumen = this.volumen + 1;
    };
    Radio.prototype.bajarVolumen = function () {
        this.volumen = this.volumen - 1;
    };
    Radio.prototype.prenderRadio = function () {
        this.estaprendido = true;
        console.log('la radio esta prendida');
    };
    Radio.prototype.apagarRadio = function () {
        this.estaprendido = false;
    };
    Radio.prototype.setFrecuencia = function (frecuencia) {
        this.frecuencia = frecuencia;
        console.log('la frecuencia es ' + this.frecuencia);
    };
    Radio.prototype.getFrecuencia = function () {
        return "esta en el frecuencia " + this.frecuencia;
    };
    return Radio;
}());
var radio1 = new Radio(50, 101.5, true);
var SmartRadio = /** @class */ (function (_super) {
    __extends(SmartRadio, _super);
    function SmartRadio(volumen, frecuencia, estaprendido) {
        var _this = _super.call(this, volumen, frecuencia, estaprendido) || this;
        _this.Internet = true;
        return _this;
    }
    return SmartRadio;
}(Radio));
var radio2 = new SmartRadio(25, 40.2, true);
console.log(radio1);
console.log(radio2);
radio1.subirVolumen();
