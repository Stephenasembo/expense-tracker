export default function clientSideValidation(obj) {
  const inputArr = Object.keys(obj);
  for (let i = 0; i < inputArr.length; i += 1) {
    if (inputArr[i] !== 'description' || inputArr[i] !== 'confirmBtn'
      || inputArr[i] !== 'closeBtn') {
      const input = obj[inputArr[i]];
      if (input.validity.valueMissing === false) {
        console.log('no value provided');
      }
    }
  }
}
