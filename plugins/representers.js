const masks = {
  localDate(date) {
    if (!date) return null
    return date.replace(/(\d{4})-(\d{2})-(\d{2})/, '$3/$2/$1')
  },
}

export default function ({ store }, inject) {
  function getAssetsImage(path) {
    return path ? require(`@/assets/images/${path}`) : ''
  }
  function age(birthdate) {
    const today = new Date()
    const birthDate = new Date(birthdate)
    let age = today.getFullYear() - birthDate.getFullYear()
    const m = today.getMonth() - birthDate.getMonth()

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--
    }

    return age
  }

  function ddmmyyyy(d) {
    const date = new Date(d)
    return `${('0' + date.getDate()).slice(-2)}/${(
      '0' +
      (date.getMonth() + 1)
    ).slice(-2)}/${date.getFullYear()}`
  }

  inject('representers', {
    ddmmyyyy,
    age,
    getAssetsImage,
    masks,
  })
}
