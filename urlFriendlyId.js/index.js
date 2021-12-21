
const urlFriendlyId = (stringsArray) => {
    let resultString = ''
    
    stringsArray.forEach((id,i) =>{
      if(i === stringsArray.length - 1){
        resultString += id
      }else{
        resultString += `${id},`
      }
    })
    return resultString
  }