/**
 * support for motor
 */
//% weight=10 icon="\uf21c" color=#FF7210 block="Magibit Sensor"
namespace MagibitSensor {

    export enum LightSensorPins {
        P0 = AnalogPin.P0,
        P1 = AnalogPin.P1,
        P2 = AnalogPin.P2
    }

    export enum SensorPins {
        P0 = AnalogPin.P0,
        P1 = AnalogPin.P1,
        P2 = AnalogPin.P2,
        P13 = AnalogPin.P13,
        P16 = AnalogPin.P16
    }

    /**
     * read light sensor's lightness
     */
    //% blockId=magibit_sensor_light_sensor_read
    //% block="Light level read analog at |%pin|"
    //% weight=80
    export function lightSensorReadLightness(pin: LightSensorPins): number {
        switch (pin) {
            case LightSensorPins.P0:
                return pins.analogReadPin(AnalogPin.P0);
            case LightSensorPins.P1:
                return pins.analogReadPin(AnalogPin.P1);
            case LightSensorPins.P2:
                return pins.analogReadPin(AnalogPin.P2);
        }
    }


}