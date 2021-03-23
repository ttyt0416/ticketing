module.exports = {
    webpackDevMiddleware: config => {
        config.watchOptions.poll = 300;
        return config;
    }
};

//adding config file for nextjs to detect 
//file changes better when put it in docker container