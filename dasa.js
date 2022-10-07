let hesap = (yariCap) => {
  sonuc=  Math.PI* (yariCap ** 2)
    console.log(`Yarıçapı ${yariCap} olan dairenin alanı: ${hesap(sonuc)}`)
}
const arguman = process.argv.slice(2)[0]
hesap(arguman)



