module.exports = function toReadable (number) {
    let ones = {
        0: '',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine'
    }
    let tenToTwenty = {
        0: 'ten',
        1: 'eleven',
        2: 'twelve',
        3: 'thirteen',
        4: 'fourteen',
        5: 'fifteen',
        6: 'sixteen',
        7: 'seventeen',
        8: 'eighteen',
        9: 'nineteen',
    }
    let tens = {
        0: '',
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety'
    }
    let hundreds = {
        1: 'one hundred',
        2: 'two hundred',
        3: 'three hundred',
        4: 'four hundred',
        5: 'five hundred',
        6: 'six hundred',
        7: 'seven hundred',
        8: 'eight hundred',
        9: 'nine hundred'
    }
    let result = ''
    if (number === 0) result += 'zero'
  else if (number.toString().length === 1) result += ones[number]
  else if (number.toString().length === 2 && number.toString()[0] == 1) result += tenToTwenty[+number.toString()[1]]
  else if (number.toString().length === 2) result += tens[+number.toString()[0]] + ' ' + ones[+number.toString()[1]]
  else if (number.toString().length === 3 && number.toString()[1] == 1) result += hundreds[+number.toString()[0]] + ' ' + tenToTwenty[+number.toString()[2]]
  else if (number.toString().length === 3 && number.toString()[1] == 0) result += hundreds[+number.toString()[0]] + ' ' + ones[+number.toString()[2]]
  else result += hundreds[+number.toString()[0]] + ' ' + tens[+number.toString()[1]] + ' ' + ones[+number.toString()[2]]
  return result.trim()
}
