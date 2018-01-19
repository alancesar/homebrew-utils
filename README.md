# Homebrew Utils

Homebrew utilities

## Features
- Measurement Units
- Calculators

## Measurement Units

### Units avaiable (default in bold):
- Mass
  - **Kilogram (kg)**
  - Gram (g)
  - Pounds (lbs)
  - Ounces (oz)
- Volume
  - **Liters (l)**
  - Mililiters (ml)
  - Gallons (gal)
- Temperature
  - **Celcius (ºC)**
  - Fahrenheit (ºF)
- Color
  - **SRM (srm)**
  - EBC (ebc)
  - Lovibond (l)
- Density
  - **Specific Gravity (sg)**
  - Brix (ºBx)

### Usage

```javascript
const { units } = require('homebrew-utils');
const { Mass } = units;

// default unit
const kg = new Mass(8);

// specific unit
const lbs = new Mass('17.637lbs');
const oz = Mass.ounces(282.192);
```
### Structure
```javascript
Mass {
  grams: {
    value: 8000,
    symbol: 'g',
  },
  kilograms: {
    value: 8,
    symbol: 'kg',
  },
  pounds: {
    value: 17.63698096,
    symbol: 'lbs',
  },
  ounces: {
    value: 282.192,
    symbol: 'oz',
  },
}
```

## Calculators

### Calculators available
- [ABV](#abv)
- [Color](#color)
- [Expected Gravity](#expectet-gravity)
- [IBU](#ibu)
- [Refractometer Correction](#refractometer-correction)
- [Volume CO2](#volume-co2)

### Usage
#### ABV
```javascript
const { calculators } = require('homebrew-utils');
const { abv } = calculators;

let abv = abv({
  og: new Density(1.042),
  fg: new Density(1.008),
});
```
#### Color
```javascript
const { units, calculators } = require('homebrew-utils');
const { Color, Mass, Volume } = units;
const { color } = calculators;

let color = color({
  inputs: [
    {
      quantity: new Mass('4kg'),
      color: new Color(5),
    },
  ],
  batchSize: new Volume('40l'),
});
```
#### Expected Gravity
```javascript
const { units, calculators } = require('homebrew-utils');
const { Mass, Volume } = units;
const { expectedGravity } = calculators;

let color = color({
  inputs: [
    {
      ppg: 37,
      quantity: new Mass('4kg'),
      mashable: true,
    },
  ],
  wortCollected: new Volume('64l'),
  batchSize: new Volume('40l'),
  efficiency: 0.75,
  attenuation: 0.72,
});
```
#### IBU
```javascript
const { units, calculators } = require('homebrew-utils');
const { Density, Volume, Mass } = units;
const { ibu } = calculators;

let color = color({
  inputs: [
    {
      ppg: 37,
      quantity: new Mass('4kg'),
      mashable: true,
    },
  ],
  og: new Density(1.063),
  wortCollected: new Volume('42l'),
  batchSize: new Volume('36l'),
});
```

#### Refractometer Correction
```javascript
const { units, calculators } = require('homebrew-utils');
const { Density } = units;
const { refractometer } = calculators;

let color = color({
  og: new Density('17.1bx'),
  fg: new Density('7.3bx'),
});
```

#### Volume CO2
```javascript
const { units, calculators } = require('homebrew-utils');
const { Temperature } = units;
const { volumeCo2 } = calculators;

let color = color({
  kgfcm2: 2,
  temperature: new Temperature(20),
});
```
