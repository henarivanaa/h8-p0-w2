const konversiMenit = number => {
    let menitCount = Math.floor(number/60)
    let detikCount = number%60
    if(detikCount < 10) {
    return `${menitCount}:0${detikCount}`
    } else {
      return `${menitCount}:${detikCount}`
    }
  }
  
  console.log(konversiMenit(293))