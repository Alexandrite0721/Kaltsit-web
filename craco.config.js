const path = require("path");
const CracolessPlugin = require("craco-less");

const resolve = (dir) => path.resolve(__dirname, dir);

module.exports = {
   plugins: [
      {
         plugin: CracolessPlugin
         //  options: {
         //     lessLoaderOptions: {
         //        lessOptions: {
         //           javascriptEnabled: true
         //        }
         //     }
         //  }
      }
   ],
   webpack: {
      alias: {
         "@": path.resolve("src")
      }
   }
};
