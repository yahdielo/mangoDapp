# Mango Defi

Mango defi is a telegram mini app intender to facilitate user to swap token via telegram chat.
this is the next generation of telegram bots, for swapping cryptos as in non custodial, and user control their funds at all times.


**create a enpoint for the app with local host
    ngrok http http://localhost:3000
docs:     https://ngrok.com/docs/getting-started/

# tech satck and libs
** React, Axios, Ethers, thirdWeb**
Notice using *@thirdWeb-react/dev* for the contract interactions.
*ethers* to easily convert hex values into human readable, also to format the values for sm interaction


# Bugs fixed and docs that help
fixing Webpack 5 Breaking Changes "process/browser":
    https://stackoverflow.com/questions/72410912/webpack-5-breaking-chaginges-process-browser

Resolve polly fills webpack5< error
        https://stackoverflow.com/questions/67348426/how-fix-breaking-change-webpack-5-used-to-include-polyfills-for-node-js-core

command:     npm install buffer util stream-browserify assert stream-http url https-browserify os-browserify
Reacts missing queryClient error fix
- dow grading stan stack version to 4

    https://github.com/thirdweb-dev/dashboard/issues/2084
    https://stackoverflow.com/questions/65590195/error-no-queryclient-set-use-queryclientprovider-to-set-one


    # rract v4 docs

    https://portal.thirdweb.com/react/v4/components/ConnectWallet

    examples 

    https://github.com/thirdweb-dev/react/blob/main/apps/example/pages/index.tsx

disable cors in bravr browser:
    open -n -a /Applications/Brave\ Browser.app/Contents/MacOS/Brave\ Browser --args --user-data-dir="/tmp/brave_dev_sess_1" --disable-web-security

# currenlt problems

the thirdweb components make calls, to third web rpc and the calls are being blocked

Access to fetch at 'https://8453.rpc.thirdweb.com/' from origin 'http://localhost:3000' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
