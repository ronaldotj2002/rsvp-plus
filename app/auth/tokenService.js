import nookies from 'nookies';

const TOKEN_KEY = 'TOKEN_KEY'

const ONE_SECOND = 1;
const ONE_MINUTE = ONE_SECOND * 60;
const ONE_HOUR =  ONE_MINUTE * 60;
const ONE_DAY = ONE_HOUR * 24;
const ONE_YEAR = ONE_DAY * 365;

export const tokenService = {
    save(accessToken, ctx = null) {
        globalThis?.localStorage?.setItem(TOKEN_KEY, accessToken);
        globalThis?.sessionStorage?.setItem(TOKEN_KEY, accessToken);
        nookies.set(ctx, TOKEN_KEY, accessToken, {
            maxAge: ONE_DAY,
            path: '/'
        });
    },
    get(ctx = null) {
        const cookies = nookies.get(ctx);
        return cookies[TOKEN_KEY]
        // return localStorage?.getItem(TOKEN_KEY);
        // return sessionStorage.getItem(TOKEN_KEY)
    },
    drlete() {
        globalThis?.localStorage?.removeItem(TOKEN_KEY);
        globalThis?.sessionStorage?.removeItem(TOKEN_KEY);
        // nookies.destroy(ctx, TOKEN_KEY);
    }
}