//import axios from 'axios';
const axios = require('axios').default;

const mintedCount = 4040;
const troveUrl = 'https://hfihu314z3.execute-api.us-east-1.amazonaws.com/collection/arb/bobots-genesis/';

async function main() {
    console.log(`starting refresh at ${troveUrl}`);

    for (let tokenId = 1; tokenId <= mintedCount; ++tokenId) {
        try {
            const response = await axios.get(`${troveUrl}${tokenId}/refresh`);
            console.log(`tokenId ${tokenId} refreshed with response ${response?.status} ${response?.statusText}`);
        }
        catch (error) {
            console.log(`tokenId ${tokenId} failed!`);
        }
    }

    console.log(`Finish refreshing ${mintedCount} tokenIds!`);
}

main()
    //.then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });