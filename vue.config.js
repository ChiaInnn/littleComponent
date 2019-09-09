let path = require('path')
function resolve(dir) {
    return path.join(__dirname,dir)
}
module.exports = {
    devServer:{
        host:'localhost',
        port:'8090',
        https:false,
        hotOnly:false
    },
    chainWebpack:(config)=>{
        config.resolve.alias
            .set('@',resolve('src'))
    }
}
