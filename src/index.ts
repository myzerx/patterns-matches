const list = [
    'abc defg hijk',
    'ajg lsk lsir iirop',
    'ksk iidl ksjfl',
    'dksi defg adk',
    'kskfl',
    'defg kslf iidjg',
    'defgkkdd irop',
    'iris llsd hfh',
    'dksi siqsd defg',
    'kkksl gjdefg',
    'defg',
    'lssa defg bvz dl'
];

const patterns = [
    'defg',
    '*defg',
    'defg*',
    '*defg*',
    '*defg*dl'
];

interface FilteredResults {
    [pattern: string]: string[];
}

function filterList(list: string[], patterns: string[]): FilteredResults {
    const filteredResults: FilteredResults = {};
    for (let pattern of patterns) {         
        const regex = new RegExp('^' + pattern.replace(/\*/g, '.+') + '$');
        filteredResults[pattern] = list.filter(item => regex.test(item));
    }
    return filteredResults;
}

const result = filterList(list, patterns);
const objResult = Object.entries(result).map(([key, value]) => ({[key]: value}));
console.log(objResult);
