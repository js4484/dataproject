const Object = require("../models/Object");
const axios = require('axios');
const keys = require('../../config/keys');
// const seeds = require('./seeds');
// const { planetImg, starImg, shipImg, suitImg, foodImg } = seeds;


const getObjects = {
  method: "GET",
  url:
    "https://collectionapi.metmuseum.org/public/collection/v1/objects",
}


async function asyncForEach(array, callback) {
  for (let index = 56; index < array.length; index++) {
    await callback(array[index], index, array);
  }
};

async function seedObjects() {
  let objects;
  // await axios(getObjects).then(res => {
  //   objects = res.data.objectIDs.slice(3456, 3560);
  // })
  // await asyncForEach(objects, async (object) => {
    let i = 449946;
    while (i < 650000) {
      try {
        await axios({ method: "GET", url: `https://collectionapi.metmuseum.org/public/collection/v1/objects/${i}` })
          .then(res => {

            if (!res.data.isPublicDomain) {
              console.log(`${i} - private object`);
              i += 1;
            } else if (res.data.primaryImage.length < 2) {
              console.log(`${i} - no pics`);
              i += 1;
            } else {
              const returnObj = {};

              const aNum = res.data.accessionNumber;

              const aYear = aNum.split(".")[0];

              // let aYearArr2 = [];
              
              // aYearArr.forEach((ele) => {
              //   const alpha = "qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM";
              //   if (!alpha.includes(ele[0])) {
              //     aYearArr2.push(ele);
              //     console.log(`new year added - ${aYear}`)
              //   }
              // })

              // let aYear = aYearArr2[0];

                    // let aYear;

                    // let j = 0;
                    // const alpha =
                    //   "qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM";
                    // while (j < aYearArr.length) {
                    //   if (!alpha.includes(ele)) {
                    //      aYear = ele;
                    //      console.log(`new year added - ${aYear}`)
                    //      break;
                    //    }
                    //   i += 1;
                    // }

                     if (aYear.length < 4) {
                       returnObj.accessionYear = parseInt(aYear) + 1900;
                     } else {
                       returnObj.accessionYear = parseInt(aYear);
                     }

                     if (returnObj.accessionYear) 
                     returnObj.objectID = res.data.objectID;
                     returnObj.isHighlight = res.data.isHighlight;

                     returnObj.primaryImage = res.data.primaryImage;
                     returnObj.primaryImageSmall = res.data.primaryImageSmall;
                     returnObj.department = res.data.department;
                     returnObj.objectName = res.data.objectName;
                     returnObj.title = res.data.title;
                     returnObj.additionalImages = res.data.additionalImages;
                     returnObj.artistDisplayName = res.data.artistDisplayName;
                     returnObj.medium = res.data.medium;
                     returnObj.artistNationality = res.data.artistNationality;
                     returnObj.objectBeginDate = res.data.objectBeginDate;
                     returnObj.objectEndDate = res.data.objectEndDate;

                     const tosave = new Object(returnObj).save().then(() => {
                       console.log(`${res.data.objectID} - object saved`);
                     });
                     i += 199;
                   }
        })
      }
      catch {
        console.log(`${i} - no object`);
        i += 1
      }
    }
  // })
}



module.exports = {
  seedObjects
}