/**
 * support for motor
 */
//% weight=10 icon="\uf21c" color=#FF7210 block="Magibit Sensor"
namespace MagibitSensor {

    export enum LightSensorPins {
        P0,
        P1,
        P2
    }

    export enum SoundSensorPins {
        P0,
        P1,
        P2
    }

    export enum SoilSensorPins {
        P0,
        P1,
        P2
    }

    export enum InfraredSensorPins {
        P13,
        P16
    }

    export enum UltrasonicSensorPins {
        P13,
        P16
    }

    /**
     * read light sensor's value
     * @param pin sensor's active pin
     * @return number returns analog value from 0 to 1023
     */
    //% blockId=magibit_sensor_light_read
    //% block="Light level read analog at |%pin|"
    //% weight=80
    export function lightSensorReadValue(pin: LightSensorPins): number {
        switch (pin) {
            case LightSensorPins.P0:
                return pins.analogReadPin(AnalogPin.P0);
            case LightSensorPins.P1:
                return pins.analogReadPin(AnalogPin.P1);
            case LightSensorPins.P2:
                return pins.analogReadPin(AnalogPin.P2);
            default:
                return 0;
        }
    }

    /**
     * read sound sensor's value
     * @param pin sensor's active pin
     * @return number returns analog value from 0 to 1023
     */
    //% blockId=magibit_sensor_sound_read
    //% block="Amplitude of sound read analog at |%pin|"
    //% weight=80
    export function SoundSensorReadValue(pin: SoundSensorPins): number {
        switch (pin) {
            case SoundSensorPins.P0:
                return pins.analogReadPin(AnalogPin.P0);
            case SoundSensorPins.P1:
                return pins.analogReadPin(AnalogPin.P1);
            case SoundSensorPins.P2:
                return pins.analogReadPin(AnalogPin.P2);
            default:
                return 0;
        }
    }

    /**
     * read soil sensor's value
     * @param pin sensor's active pin
     * @return number returns analog value from 0 to 1023
     */
    //% blockId=magibit_sensor_soil_read
    //% block="Soil moisture read analog at |%pin|"
    //% weight=80
    export function SoilSensorReadValue(pin: SoilSensorPins): number {
        switch (pin) {
            case SoilSensorPins.P0:
                return pins.analogReadPin(AnalogPin.P0);
            case SoilSensorPins.P1:
                return pins.analogReadPin(AnalogPin.P1);
            case SoilSensorPins.P2:
                return pins.analogReadPin(AnalogPin.P2);
            default:
                return 0;
        }
    }

    /**
     * read infrared sensor's value
     * @param pin sensor's active pin
     * @return number returns digital value from 0 to 1
     */
    //% blockId=magibit_sensor_infrared_read
    //% block="infrared read digital at |%pin|"
    //% weight=80
    export function InfraredSensorReadValue(pin: InfraredSensorPins): number {
        switch (pin) {
            case InfraredSensorPins.P13:
                return pins.digitalReadPin(DigitalPin.P13);
            case InfraredSensorPins.P16:
                return pins.digitalReadPin(DigitalPin.P16);
            default:
                return 0;
        }
    }

    /**
     * read ultrasonic sensor's value (unit: cm)
     * @param pin sensor's active pin
     * @return number returns number value (unit: cm)
     */
    //% blockId=magibit_sensor_ultrasonic_read
    //% block="Ultrasonic sensor read distance(cm) at |%pin|"
    //% weight=80
    export function UltrasonicSensorReadValue(pin: UltrasonicSensorPins): number {
        switch (pin) {
            case UltrasonicSensorPins.P13:
                return 0;
            case UltrasonicSensorPins.P16:
                return 0;
            default:
                return 0;
        }
    }

    /**
     * read motor speed sensor's value
     * @param pin sensor's active pin
     * @return number returns digital value from 0 to 1
     */
    //% blockId=magibit_sensor_motor_speed_read
    //% block="Motor speed read digital at |%pin|"
    //% weight=80
    export function MotorSpeedSensorReadValue(pin: InfraredSensorPins): number {
        switch (pin) {
            case InfraredSensorPins.P13:
                return pins.digitalReadPin(DigitalPin.P13);
            case InfraredSensorPins.P16:
                return pins.digitalReadPin(DigitalPin.P16);
            default:
                return 0;
        }
    }




}