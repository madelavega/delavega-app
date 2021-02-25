const loadEnvFile = (path, mode) => require(['.', mode, path].join('/'));

module.exports = (mode) => ({
    endpoints :  loadEnvFile('services', mode)
});
