var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://abigaelndegwa:Dev.Engineer@2024@cluster0.kb530wi.mongodb.net/darkroom?retryWrites=true&w=majority',
    development: 'mongodb+srv://abigaelndegwa:Dev.Engineer@2024@cluster0.kb530wi.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
    test: 'mongodb+srv://abigaelndegwa:Dev.Engineer@2024@cluster0.kb530wi.mongodb.net/darkroom-test?retryWrites=true&w=majority',
}
module.exports = config;
