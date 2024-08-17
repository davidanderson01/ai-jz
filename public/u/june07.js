const links = [
    {
        url: 'https://june07.com',
        title: 'June07 Blog',
        subtitle: 'Also the Homepage',
        favicon: 'https://june07.com/favicon.ico'
    },
    {
        url: 'https://june07.com/searchable-node-js-docs-plus-more',
        title: 'NiM Update',
        subtitle: 'Expanded Tools and Searchable Node.js Docs',
        favicon: 'https://june07.com/favicon.ico',
        group: 'posts'
    },
    {
        url: 'https://nim.june07.com',
        title: 'Node.js (V8) --inspector Manager',
        subtitle: 'NiM Homepage - The OG "UX Sugar" for DevTools',
        favicon: 'https://nim.june07.com/favicon.ico'
    },
    {
        url: "https://github.com/june07",
        title: "GitHub Account"
    },
    {
        url: 'https://www.npmjs.com/~667',
        title: "NPM Account"
    },
    {
        url: 'https://raw.githubusercontent.com/june07/ghost-content/main/2024/07/btc.address.webp',
        title: 'Bitcoin Wallet Address',
        subgroup: 'cryptocurrency'
    },
    {
        url: 'https://raw.githubusercontent.com/june07/ghost-content/main/2024/07/eth.address.webp',
        title: 'Ethereum Wallet Address',
        subgroup: 'cryptocurrency'
    },
    {
        url: 'https://raw.githubusercontent.com/june07/ghost-content/main/2024/07/near.address.webp',
        title: 'NEAR Wallet Address',
        subgroup: 'cryptocurrency'
    },
    {
        url: 'https://raw.githubusercontent.com/june07/ghost-content/main/2024/07/trx.address.webp',
        title: 'Tron Wallet Address',
        subgroup: 'cryptocurrency'
    },
    {
        url: 'https://policies.june07.com/',
        title: 'Single Click, Git Hosted, Policy Documents',
        favicon: 'https://policies.june07.com/logo-v3-512x512.png'
    },
    {
        url: 'https://clippings.june07.com/',
        title: 'Classified Ads Archival',
        favicon: 'https://clippings.june07.com/favicon.ico'
    },
    {
        url: 'https://ngrok-dns.june07.com/',
        title: 'Tunnel Redirect Service',
        subtitle: 'Free Static URL for ngrok, localtunnel',
        favicon: 'https://ngrok-dns.june07.com/icon-512x512-t.png
    },
    {
        url: 'https://asss.june07.com/',
        title: 'Remove Ass🕳️s from your Reviews',
    },
    {
        url: 'https://github.com/june07/mfa',
        title: 'MFA (Multi-Factor Authentication Assistant) Browser Extension',
        svg: 'https://raw.githubusercontent.com/june07/mfa/main/icon/logo.svg'
    }
]
const groups = [
    {
        name: 'posts',
        title: 'Recent June07 Blog Posts'
    }
]
const subgroups = [
    {
        name: 'cryptocurrency',
        title: 'Crypto Addresses'
    }
]
const rules = [
    {
        priority: 10,
        name: 'redirect',
        url: 'https://june07.com',
        timeout: 10
    },{
        priority: 10,
        name: 'redirect',
        url: 'https://june07.com/searchable-node-js-docs-plus-more',
        timeout: 10
    },{
        priority: 10,
        name: 'redirect',
        url: 'https://nim.june07.com',
        timeout: 10
    },{
        priority: 20,
        name: 'redirect',
        url: 'https://raw.githubusercontent.com/june07/ghost-content/main/2024/07/gene-wilder-picture-9-1200x675.webp',
        referrer: 'nim',
        timeout: 5
    }
]
export { links, groups, subgroups, rules }
