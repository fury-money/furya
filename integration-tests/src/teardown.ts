import { execSync } from 'child_process';
import path from 'path';

module.exports = async () => {
    try {
        const pathToDataDir = path.join(__dirname, "/test-data");
        execSync("pkill rly")
        execSync("pkill furyad")
        execSync("pkill furyad")
        execSync(`rm -r ${pathToDataDir}`)
    }
    catch (e) {
        console.log(e)
    }
}