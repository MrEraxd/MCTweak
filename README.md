# Requirements

Node.js: > 16.0.1  
Setup [API](https://github.com/MrEraxd/McTweak-API)  
Chrome browser: > 100

# Setting up dev enviroment

1. Perform `npm install`
2. Create SSL certificate for localhost place it in .cert folder, you can use: https://www.npmjs.com/package/mkcert. You can also disable `https` in `vite.config.ts`
3. Copy `.env.production` file and name it `.env.local`, change `VITE_MCTWEAK_DB_ADDRESS` with your local API address. You got this address creating API.
4. You start dev with `npm start`

# Creating production build

To create production build perform `npm build` command, then extract `dist` folder on production server.
