import { getData } from "../src/loaders/territory/territory";

const isoCodes = ["af", "ao", "al", "ae", "ar", "am", "aq", "tf", "au", "at", "az", "bi", "be", "bj", "bf", "bd", "bg", "bs", "ba", "by", "bz", "bo", "br", "bn", "bt", "bw", "cf", "ca", "ch", "cl", "cn", "ci", "cm", "cd", "cg", "co", "cr", "cu", "cy", "cz", "de", "dj", "dk", "do", "dz", "ec", "eg", "er", "es", "ee", "et", "fi", "fj", "fk", "fr", "ga", "gb", "ge", "gh", "gn", "gm", "gw", "gr", "gl", "gy", "hn", "hr", "ht", "hu", "id", "in", "ie", "ir", "iq", "is", "il", "it", "jm", "jo", "jp", "kz", "ke", "kg", "kh", "kr", "xk", "kw", "la", "lb", "lr", "ly", "lk", "ls", "lt", "lu", "lv", "ma", "md", "mg", "mx", "mk", "ml", "mm", "me", "mn", "mz", "mr", "mw", "my", "na", "nc", "ne", "ng", "ni", "nl", "no", "np", "nz", "om", "pk", "pa", "pe", "ph", "pg", "pl", "pr", "kp", "pt", "py", "ps", "qa", "ro", "ru", "rw", "eh", "sa", "sd", "ss", "sn", "sb", "sl", "sv", "so", "rs", "sr", "sk", "si", "se", "sz", "sy", "td", "tg", "th", "tj", "tm", "tl", "tt", "tn", "tr", "tw", "tz", "ug", "ua", "uy", "us", "uz", "ve", "vn", "vu", "ye", "za", "zm", "zw"];

test('territories structure', async () => {
  const territories = await getData();
  const territoryFields = ['contribute_url'];
  expect(Object.keys(territories)).toEqual(expect.arrayContaining(isoCodes));
  isoCodes.forEach((iso) => {
    expect(Object.keys(territories[iso])).toEqual(expect.arrayContaining(territoryFields));
  })
})