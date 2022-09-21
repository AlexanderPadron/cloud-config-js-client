const axios = require('axios');
const cloudConfig = async ({service, profile = null, srv = null, usr = null, pwd = null, nameRepo, urlGit}) => {
    try {
        if(!service || !nameRepo || !urlGit) return {error: 'Not define min params'}
        let server = srv || 'https://cloud-config.venturesoftware.cl';
        server = `${server}/${service}`;
        if(profile) server = `${server}/${profile}`;
        usr && pwd ? server = `${server}/?usr=${usr}&pwd=${pwd}` : server = `${server}/?`;
        server = `${server}&name=${nameRepo}&repo=${urlGit}`;
        const res = await axios.get(server);
        if(res) return res.data
        return {error: 'Not conex cloud config'}   
    } catch (error) {
        console.log('error')
    }
}