# yandex-geocoder
Yandex geocoder tool

[![Code Style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)
[![NPM Version](https://img.shields.io/npm/v/yandex-geocoder.svg)](https://www.npmjs.com/package/vuex-storage-sync)
[![Dependencies](https://david-dm.org/eduardnikolenko/yandex-geocoder.svg)](https://david-dm.org/eduardnikolenko/vuex-storage-sync)
[![Dev Dependencies](https://david-dm.org/eduardnikolenko/yandex-geocoder/dev-status.svg)](https://david-dm.org/eduardnikolenko/vuex-storage-sync/?type=dev)
[![Peer Dependencies](https://david-dm.org/eduardnikolenko/yandex-geocoder/peer-status.svg)](https://david-dm.org/eduardnikolenko/vuex-storage-sync?type=peer)

## Installation

```bash
$ npm install yandex-geocoder
```

## Usage

```js
const yandexGeocoder = require('yandex-geocoder')
const geocoder = new yandexGeocoder({ apiKey: 'YOUR_API_KEY' })

geocoder.resolve('Москва, Большая Академическая улица, 24к1').then(result => {
  /**
   * {
   *   address: 'Большая Академическая улица, 24к1',
   *   position: [55.823955, 37.529403]
   * }
   */
  console.dir(result)
})

```

## License

MIT © [Eduard Nikolenko](https://github.com/eduardnikolenko)
