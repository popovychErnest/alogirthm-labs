


class Hash  {
    constructor(V) {
        this.table = new Array(V);
        this.slots = V;
        for (let i = 0; i < this.table.length; i++) {
            this.table[i] = [];
        }
    }
    addToHash(key, vаlue) {
        const index = this.hashFunction(key);
        for (let para of this.table[index]) {
            if (para[0] === key) {
                para[1] = vаlue;
                return;
            }
        }
        this.table[index].push([key, vаlue]);
    }
    getFromCache (key) {
        const index = this.hashFunction(key);
        for (let para of this.table[index]) {
            if(para[0] === key) {
                return para[1];
            }
        }
        return undefined;
    }
    hashFunction(x) {
        let hash = 0;
        for (let i = 0; i < x.length; i++) {
            hash = (hash * 31 + x.charCodeAt(i)) % this.slots;
        }
        return hash;
    }

    deleteFromHash(key) {
        const index = this.hashFunction(key); 
        const bucket = this.table[index];
        
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket.splice(i, 1);
                return;
            }
        }
    }
}

function APICall(vаlues) {
    const randomIndex = Math.floor(Math.random() * vаlues.length);
    return vаlues[randomIndex];
}

const task8 = () =>  {
    
    const URLKeys = [
         "https://example.com:443/pauifgjkfdgoidj/to/res",
         "https://shop.example/products?category=shoes&sort=price_as",
         "https://docs.com/installation#step-3-lin",
         "https://api.travelnow/flights/search?from=NYCto=PAR&date=2025-07-15",
         "https://api.om=NYC&to=PAR&date=2025-07-15",
         "https://api.travelnow/flights/search?fPAR&date=2025-07-15",
         "https://api.travelnow/flights/search?&to=PAR&date=2025-07-15",
         "https://api.travelnow/flights/sea&to=PAR&date=2025-07-15",
         "https://api.travelnow/flNYC&to=PAR&date=2025-07-15",
         "https://api.travelnow/flights/search?from=NYC&to=PAR&date=2025-07-15",
         "https://api.travelnow&date=2025-07-15",

         "https://api.travelnow&date=2025-07-15",
         "https://api.travelnow/flights/search?fPAR&date=2025-07-15",
         "https://api.travelnow/flights/sea&to=PAR&date=2025-07-15",
         "https://api.travelnow/flights/search?from=NYCto=PAR&date=2025-07-15",
         "https://api.travelnow/flNYC&to=PAR&date=2025-07-15"

    ];
    const vаlues = ["200 OK","404 NOT FOUND","500 INTERNAL SERVER ERROR","301 MOVED PERMANENTLY"];

    const hash = new Hash(URLKeys.length);

    for (let url of URLKeys) {
        let cached = hash.getFromCache(url);
        if (cached) {
            console.log(`\nCached: ${url} => ${cached}`);
        }
        else {
            const responce = APICall(vаlues);
            hash.addToHash(url, responce);
            console.log(`API Call: ${url} => ${responce}`);
        }
    }
} 
task8();



