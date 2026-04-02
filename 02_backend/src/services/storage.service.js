// Due to ame janinu abe imagekit.io pore alaga bhi use koripariba so...

const {ImageKit} = require("@imagekit/nodejs")


const imageKit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY, // This is the default and can be omitted
});



async function uploadFile(buffer){
  const result = await imageKit.files.upload({
    file: buffer.toString("base64"),
    fileName : "image.jpg",
  })
//   {
//   fileId: '69cacbc95c7cd75eb841ec34',
//   name: 'image_Klydkhp0h.jpg',
//   size: 3384334,
//   versionInfo: { id: '69cacbc95c7cd75eb841ec34', name: 'Version 1' },
//   filePath: '/image_Klydkhp0h.jpg',
//   url: 'https://ik.imagekit.io/ctladstti/image_Klydkhp0h.jpg',
//   fileType: 'image',
//   height: 2448,
//   width: 3264,
//   orientation: 1,
//   thumbnailUrl: 'https://ik.imagekit.io/ctladstti/tr:n-ik_ml_thumbnail/image_Klydkhp0h.jpg',   
//   AITags: null,
//   description: null
// }
  return result;
}

module.exports = uploadFile
