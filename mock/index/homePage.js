module.exports = function () {
  var faker = require("faker");
  faker.locale = "zh_CN";
  var _ = require("lodash");
  return {
    "home.list": _.times(20, function (n) {
      return {
        productId: n,
        image: faker.image.imageUrl(),
        productCode: faker.name.findName(),
        productName: faker.name.findName()
      }
    }),
    address: _.times(100, function (n) {
      return {
        id: faker.random.uuid(),
        city: faker.address.city(),
        county: faker.address.county()
      }
    })
  }
}