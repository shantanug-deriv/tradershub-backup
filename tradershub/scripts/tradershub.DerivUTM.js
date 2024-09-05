const isBrowser = () => typeof window !== 'undefined'
var CookieStorage = function(cookie_name, cookie_domain = '') {
    const hostname = isBrowser() && window.location.hostname
    const is_deriv_com = String(hostname).includes('deriv.com')

    this.initialized = false
    this.cookie_name = cookie_name
    if (is_deriv_com) {
        this.domain = 'deriv.com'
    } else {
        this.domain = cookie_domain ?? String(hostname)
    }
    this.path = '/'
    this.same_site = 'none'
    this.is_secure = true
    this.expires = new Date('Thu, 1 Jan 2037 12:00:00 GMT')
    this.value = {}
}

CookieStorage.prototype = {
    initialize() {
        const cookie_value = Cookies.get(this.cookie_name)
        try {
            this.value = cookie_value ? JSON.parse(cookie_value) : {}
        } catch (e) {
            this.value = {}
        }
        this.initialized = true
    },
    write(val, expiry_date, is_secure, sameSite) {
        if (!this.initialized) this.initialize()
        this.value = val
        if (expiry_date) this.expires = expiry_date
        Cookies.set(this.cookie_name, this.value, {
            expires: this.expires,
            path: this.path,
            domain: this.domain,
            secure: !!is_secure,
            sameSite: sameSite || 'strict',
        })
    },
    get(key) {
        if (!this.initialized) this.initialize()
        return this.value[key]
    },
    set(key, val, options) {
        if (!this.initialized) this.initialize()
        this.value[key] = val
        Cookies.set(this.cookie_name, this.value, {
            expires: new Date(this.expires),
            path: this.path,
            domain: this.domain,
            secure: this.is_secure,
            sameSite: this.same_site,
            ...options,
        })
    },
    remove() {
        Cookies.remove(this.cookie_name, {
            path: this.path,
            domain: this.domain,
        })
    },
}


function loadScript(url, callback) {
    var script = document.createElement('script')
    script.onload = function() {
        if (callback) callback()
    }
    script.src = url
    document.head.appendChild(script)
}
// Usage to load the js-cookie script
loadScript('https://static.deriv.com/scripts/cookie.js')

function getDataObjFromCookies(cookies, fields) {
    var data = {}
    fields.forEach(function(elem) {
        if (cookies[elem] && cookies[elem].get(elem)) {
            data[elem] = cookies[elem].get(elem)
        }
    })
    return data
}

function getCookiesFields() {
    return [
        'date_first_contact',
        'signup_device',
        'gclid',
        'utm_source',
        'utm_ad_id',
        'utm_adgroup_id',
        'utm_adrollclk_id',
        'utm_campaign',
        'utm_campaign_id',
        'utm_content',
        'utm_fbcl_id',
        'utm_gl_client_id',
        'utm_medium',
        'utm_msclk_id',
        'utm_term',
    ]
}

function getCookiesObject(cookies) {
    var cookies_objects = {}
    cookies.forEach(function(cookie_name) {
        var cookie_object = new CookieStorage(
            cookie_name.includes('utm') ? 'utm_data' : cookie_name,
        )
        cookies_objects[cookie_name] = cookie_object
    })
    return cookies_objects
}

function getCookieValue(cookie_name) {
    var cookie_instance = Cookies.get('affiliate_tracking')
    return cookie_instance
}


// Function to dynamically load js-cookie
function loadJSCookie(callback) {
    function asign() {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i]
            for (var key in source) {
                target[key] = source[key]
            }
        }
        return target
    }

    function init() {
        var defaultAttributes = {
            path: '/'
        }
        var converter = {
            read: function(value) {
                if (value[0] === '"') {
                    value = value.slice(1, -1)
                }
                return value.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
            },
            write: function(value) {
                return encodeURIComponent(value).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent)
            }
        }

        function set(name, value, attributes) {
            if (typeof document === 'undefined') {
                return
            }

            attributes = assign({}, defaultAttributes, attributes)

            if (typeof attributes.expires === 'number') {
                attributes.expires = new Date(Date.now() + attributes.expires * 864e5)
            }
            if (attributes.expires) {
                attributes.expires = attributes.expires.toUTCString()
            }

            name = encodeURIComponent(name)
                .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
                .replace(/[()]/g, escape)

            var stringifiedAttributes = ''
            for (var attributeName in attributes) {
                if (!attributes[attributeName]) {
                    continue
                }

                stringifiedAttributes += '; ' + attributeName

                if (attributes[attributeName] === true) {
                    continue
                }

                stringifiedAttributes += '=' + attributes[attributeName].split(';')[0]
            }

            return (document.cookie = name + '=' + converter.write(value, name) + stringifiedAttributes)
        }

        function get(name) {
            if (typeof document === 'undefined' || (arguments.length && !name)) {
                return
            }

            var cookies = document.cookie ? document.cookie.split('; ') : []
            var jar = {}
            for (var i = 0; i < cookies.length; i++) {
                var parts = cookies[i].split('=')
                var value = parts.slice(1).join('=')

                try {
                    var found = decodeURIComponent(parts[0])
                    if (!(found in jar)) jar[found] = converter.read(value, found)
                    if (name === found) {
                        break
                    }
                } catch {
                    // Do nothing...
                }
            }

            return name ? jar[name] : jar
        }

        return Object.create({
            set,
            get,
            remove: function(name, attributes) {
                set(
                    name,
                    '',
                    assign({}, attributes, {
                        expires: -1
                    })
                )
            },
            withAttributes: function(attributes) {
                return init(this.converter, assign({}, this.attributes, attributes))
            },
            withConverter: function(converter) {
                return init(assign({}, this.converter, converter), this.attributes)
            }
        }, {
            attributes: {
                value: Object.freeze(defaultAttributes)
            },
            converter: {
                value: Object.freeze(converter)
            }
        })
    }

    globalThis.Cookies = init()

    if (callback) callback()

}

// Define your cookie storage and manipulation functions
function setupCookies() {
    var deriv_cookie_domain = 'deriv.com' // Modify as per your actual usage
    var CookieStorage = function(cookie_name, cookie_domain = '') {
        var hostname = window.location.hostname
        var is_deriv_com = hostname.includes('deriv.com')
        this.initialized = false
        this.cookie_name = cookie_name
        this.domain = is_deriv_com ? deriv_cookie_domain : cookie_domain || hostname
        this.path = '/'
        this.same_site = 'None'
        this.is_secure = true
        this.expires = new Date('Thu, 1 Jan 2037 12:00:00 GMT')
        this.value = {}
    }
    CookieStorage.prototype = {
        initialize: function() {
            var cookie_value = Cookies.get(this.cookie_name)
            try {
                this.value = cookie_value ? JSON.parse(cookie_value) : {}
            } catch (e) {
                this.value = {}
            }
            this.initialized = true
        },
        write: function(val, expiry_date, is_secure, sameSite) {
            if (!this.initialized) this.initialize()
            this.value = val
            this.expires = expiry_date || this.expires
            Cookies.set(this.cookie_name, JSON.stringify(this.value), {
                expires: this.expires,
                path: this.path,
                domain: this.domain,
                secure: is_secure !== undefined ? is_secure : this.is_secure,
                sameSite: sameSite || this.same_site,
            })
        },
        get: function(key) {
            if (!this.initialized) this.initialize()
            return this.value[key]
        },
        set: function(key, val, options) {
            if (!this.initialized) this.initialize()
            this.value[key] = val
            Cookies.set(this.cookie_name, JSON.stringify(this.value), {
                expires: this.expires,
                path: this.path,
                domain: this.domain,
                secure: options && options.secure !== undefined ? options.secure : this.is_secure,
                sameSite: (options && options.sameSite) || this.same_site,
                ...options,
            })
        },
        remove: function() {
            Cookies.remove(this.cookie_name, {
                path: this.path,
                domain: this.domain,
            })
        },
    }


    function getDataLink(data) {
        var data_link = ''
        Object.keys(data).forEach(function(elem) {
            data_link += '&' + elem + '=' + encodeURIComponent(data[elem])
        })
        return data_link
    }


    // Example usage:
    var exampleCookies = getCookiesObject(['utm_source', 'utm_campaign'])
    var dataObj = getDataObjFromCookies(exampleCookies, getCookiesFields())
    var dataLink = getDataLink(dataObj)
    var getCookie = getCookieValue('affiliate_tracking')
}
// Load js-cookie and setup cookies after it's loaded
loadJSCookie(setupCookies)