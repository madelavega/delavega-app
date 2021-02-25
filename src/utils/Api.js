//available HTTP methods
const methods = [ 'get', 'post', 'put', 'delete' ],

    /**
       * 
       * @param {string} url - template for url. Replaced properties must be wrapped into {}
       * @param {Object} urlParams - properties to replace into url template
       * @returns {string} url builded
       */
    resolveUrlTemplate = (url, urlParams) => {
        const re = /\{([^}]+)?\}/g;
        
        let match = re.exec(url);

        while(match) {
            url = url.replace(match[0], urlParams[match[1]]);
            re.lastIndex = 0;
            match = re.exec(url);
        }
        return url;
    },
    /**
       * HTTP Status errors explanation
       * @type {{'500': string, '401': string, '403': string, '404': string}}
       */
    httpErrors = {
        '500': 'There was an unexpected error. If problem persists, please, contact with the system administrator', 
        '404': 'It was impossible to find the data you requested for',
        '401': 'Sorry, you do not have permissions to that...',
        '403': 'Sorry, you do not have permissions to that...',
        //and so on...
    },

    /**
       * Format error to be shown
       *
       * @param {string} statusText
       * @param {number} status
       * @param {string} message
       * @param {string} url
       * @param {*} stackTrace
       * @returns {object} error parts (errorInfo and stackTrace)
       */
    formatError = ({ statusText, status, message, url, stackTrace }) => {
        return { 
            errorInfo : [ status ? `(${status}) - ${statusText}\n` : null, url, message ],
            stackTrace: stackTrace, 
        };
    },
    /**
 * Launch the request to the url.
 * TODO it could be defined as a redux middleware, passing the api into the action, allowing the exceptions management
 * were centralized into redux. Furthermore, the HTTP errors could be managed here too, wrapping into an object
 * the HTTP status, headers, error data into the response payload, etc. and then propagate it to Redux store throw the action
 * to show the error into a modal or whatever you want
 *
 * For the moment, it will display an alert with the basic http error data, because the Redux failure action from the saga
 * only should manage the specific tasks for the request/origin action (for example, send the failure action to remove a
 * loader spinner into a view, data cleaning...) but the common error treatment of the application must not be there.
 *
 *
 * @param url
 * @param cfg
 * @returns {Promise<unknown>}
 */
    // eslint-disable-next-line no-undef
    doFetch = (url, cfg) => new Promise((resolve, reject) => {
    // eslint-disable-next-line no-undef
        fetch(url, cfg).then(response => {
            if(response.ok) {
                response.json().then(json => {
                    resolve(json);
                }).catch(e => {
                    reject(formatError({ message: 'Malformed JSON', stackTrace: e, url: url }));
                });
            } else {
                reject(formatError({
                    status    : response.status,
                    statusText: response.statusText,
                    message   : httpErrors[response.status],
                    url,
                }));
            }
        //TODO format error
        }).catch(e => {
            reject(formatError({ message: e.message, stackTrace: e, url }));
        });
    }),

    /**
 * Object every method defined in methods, it will create a method with this name. To call them,
 * you must pass the target url to the AJAX request and the cfg config for the fetch method.
 *
 * To allow url parameters, the method accept the url as a template and a urlParams inside the cfg
 * configuration object. This urlParams must be an object with the values to replace the url template. For example:
 *
 * url /api/Users/{id}
 * cfg = {
 *     urlParameters : {
 *         id : 2
 *     }
 * }
 *
 * You can use this Api like this:
 * Api.get('api/{entity}/{id}/', {
 *     urlParams : {
 *         id : 2,
 *         entity : 'users'
 *     },
 *      ... rest of the fetch api config properties
 * });
 *
 * Api.delete('api/users/{id}', {
 *     urlParams : {
 *         id : 3
 *     },
 *     ... rest of the fetch api config properties
 * })
 */
    Api = methods.reduce((acc, method) => {
        return {
            ...acc,
            /**
         * Call to fetch method to do a request with a url template (/api/users/{urlParameter}) and the cfg object
         * for the fetch api. If the url is a template, the cfg object must contains a urlParams property, with
         * the properties to be replaced into the url template
         *
         * @param {string} url
         * @param {Object} cfg
         * @returns {Promise}
         */
            [method]: (url, cfg) => doFetch(resolveUrlTemplate(url, cfg?.urlParams ?? {}), {
                ...cfg,
                method: method.toUpperCase(),
            }),
        };
    }, {});

export default Api;
