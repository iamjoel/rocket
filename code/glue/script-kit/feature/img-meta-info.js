// Name: img meta info

import "@johnlindquist/kit"

const imgPath = await selectFile()

const exif = await npm('exifr')
const res = await exif.parse(imgPath)

inspect(res)
