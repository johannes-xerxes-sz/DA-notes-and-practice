// doesnt work in all cases (decimals => needs to be fixed)
var sortOnFloat = function() {
  let nums = [];
  for (let i = 0; i < 100; i++) {
    nums.push(String(Math.floor(Math.random() * 1000) / 1000 + Math.floor(Math.random() * 1000)));
  }
  nums.sort(function(a, b) {
    return a.split('.')[1] - b.split('.')[1]
  });
  return nums;
}

sortOnFloat()

// e.g.
// ["335.003", "396.5", "130.9", "786.14", "989.31", "711.34", "100.35", "30.041", "675.41", "596.45", "350.052",
//  "373.062", "560.78", "332.083", "831.083", "519.91", "657.99", "965.121", "295.131", "909.154", "159.161", "325.169",
//  "116.186", "780.188", "537.196", "925.199", "595.228", "154.229", "443.245", "688.259", "387.272", "895.273", "743.295",
//  "48.302", "265.307", "400.325", "583.368", "455.388", "872.389", "398.398", "101.412", "772.419", "538.424", "130.436",
//  "709.444", "797.462", "676.464", "703.476", "482.476", "877.488", "257.502", "308.503", "370.506", "941.507", "944.514",
//  "631.529", "80.567", "745.596", "109.624", "674.667", "335.667", "228.672", "935.679", "667.685", "563.698", "57.703",
//  "898.707", "976.719", "950.726", "698.727", "886.728", "287.742", "97.749", "867.754", "443.757", "157.759", "606.794",
//  "295.795", "49.802", "888.813", "927.817", "152.824", "82.861", "207.878", "169.891", "386.894", "72.905", "931.909",
//  "98.914", "538.917", "458.917", "424.919", "494.926", "348.932", "947.947", "427.951", "444.958", "25.979", "417.993",
//  "505.997"]