const axios = require('axios')

class YandexGeocoder {
  constructor ({ apiKey = '' }) {
    if (apiKey === '') {
      throw new Error('No apiKey specified')
    }

    this.apiKey = apiKey
  }

  async resolve (query) {
    try {
      const { data: { response = {} } = {} } = await axios(`https://geocode-maps.yandex.ru/1.x/?geocode=${encodeURIComponent(query)}&key=${this.apiKey}&kind=house&format=json&results=1`)

      const firstAddress = response.GeoObjectCollection.featureMember[0].GeoObject

      return {
        address: firstAddress.name,
        position: firstAddress.Point.pos.split(' ').reverse().map(_ => parseFloat(_))
      }
    } catch (error) {
      console.error(error)
    }
  }
}

module.exports = YandexGeocoder
