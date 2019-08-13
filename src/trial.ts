const git = require('isomorphic-git')
const browserfs = require('browserfs');

browserfs.configure(
    { fs: "InMemory", options: {} },
    function (err: any) {
        if (err)
            return console.log(err);
        const fs = browserfs.BFSRequire("fs");
        git.plugins.set('fs', fs);
    }
);

export class Account {
    accountName : string;
    accountType : string;
    constructor(name : string, type : string){
        this.accountName = name;
        this.accountType = type;
        this.initGit();
        
    }
    async initGit(){
        await git.init({dir: '/'});
        console.log('done')
    }

    async newAccount(){
        console.log('commit')
        let sha = await git.commit({
            dir: '/',
            author: {
                name: '' + this.accountName,
                email: 'test@ontario.ca'
            },
            message: 'new ' +  this.accountType + ' account for ' + this.accountName
        })
        return sha;
        //return "new account created with name " + this.accountName + " of type " + this.accountType;
    }

    async getCommits() {
        console.log('log')
        let commits = await git.log({ dir: '/', depth: 5})
        commits = commits[0]
        let message = commits.message
        console.log(commits)

    }
}

var account = new Account("ministry", "Ministry");
account.newAccount();
account.getCommits();