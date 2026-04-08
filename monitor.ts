interface Site {
    name: string;
    url: string;
}

const sites: Site[] = [
    {name: 'Google', url: 'https://www.google.com'},
    {name: 'GitHub', url: 'https://www.github.com'},
    {name: 'Offline Site', url: 'https://www.sitethat'},
];

async function checkSite(site: Site): Promise<void> {
    try {
        await fetch(site.url);
        console.log(`${site.name} is online`);
    } catch {
        console.log(`${site.name} is offline`);
    }
}

async function monitor(): Promise<void> {
    console.log('Checking sites...\n');

    for (const site of sites) {
        await checkSite(site);
    }

    console.log('\nMonitoring complete!');
}

monitor();