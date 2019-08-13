import { Account } from "./account";
import { compileFunction } from "vm";
const git = require('isomorphic-git')



export class Ministry {
    schoolBoards: SchoolBoard[];
    account: Account;
    name : string

    constructor(name : string){
        this.name = name
        this.schoolBoards=[];
        this.account = new Account(this.name, "Ministry");
        let sha = this.account.newAccount();
        //let log = this.account.getCommits();
        console.log("New Ministry created");
        console.log(sha);
        //console.log(log);
        //console.log("^ log")

        // var browserfs = require('browserfs');

        // browserfs.configure(
        // { fs: "InMemory", options: {} },
        // function (err: any) {
        //     if (err)
        //         return console.log(err);
        //     const fs = browserfs.BFSRequire("fs");
        //     git.plugins.set('fs', fs);
        // });

        // git.init({ dir: '/' })
        // console.log('done')
    }
}

export class SchoolBoard {
    ministry: Ministry;
    schools : School[];
    account: Account;
    name : string

    constructor(minstry: Ministry, name : string){
        this.ministry = minstry;
        this.schools = [];
        this.name = name;
        this.account = new Account(this.name, "School Board");
        this.account.newAccount();
        console.log("New School Board created");

        var browserfs = require('browserfs');

        browserfs.configure(
        { fs: "InMemory", options: {} },
        function (err: any) {
            if (err)
                return console.log(err);
            const fs = browserfs.BFSRequire("fs");
            git.plugins.set('fs', fs);
        });

        git.init({ dir: '/' })
        console.log('done')
    }
}

export class School {
    schoolBoard: SchoolBoard;
    account: Account;
    name : string

    constructor(schoolBoard : SchoolBoard, name : string){
        this.schoolBoard = schoolBoard;
        this.name = name;
        this.account = new Account(this.name, "School Board");
        this.account.newAccount();
        console.log("New School created");

        var browserfs = require('browserfs');

        browserfs.configure(
        { fs: "InMemory", options: {} },
        function (err: any) {
            if (err)
                return console.log(err);
            const fs = browserfs.BFSRequire("fs");
            git.plugins.set('fs', fs);
        });

        git.init({ dir: '/' })
        console.log('done')
    }
}

export class Course {
    code: string;
    classes : Class[];

    constructor(code : string){
        this.code = code;
        this.classes = [];
        console.log("New Course created");
    }
}

export class Class {
    course: Course;
    students: Student[];
    teachers: Teacher[];

    constructor(course : Course){
        this.course = course;
        this.students = [];
        this.teachers = [];
        console.log("New class created");
    }
}

export class Person {
    publicKey: Uint8Array;
    name : string;
    account: Account;

    constructor(pb : Uint8Array, name : string, type : string){
        this.publicKey = pb;
        this.name = name;
        this.account = new Account(this.name, type);
        this.account.newAccount();

        var browserfs = require('browserfs');

        browserfs.configure(
        { fs: "InMemory", options: {} },
        function (err: any) {
            if (err)
                return console.log(err);
            const fs = browserfs.BFSRequire("fs");
            git.plugins.set('fs', fs);
        });

        git.init({ dir: '/' })
        console.log('done')
    }
}

export class Student extends Person {
    classes : Class[];
    school : School;

    constructor(pb : Uint8Array, name : string, school : School){
        super(pb, name, "Studnet");
        this.school = school;
        this.classes = [];
        console.log("New Student created");
    }

    registerForClass(newClass: Class): void {
        this.classes.push(newClass);
        newClass.students.push(this);
        let sha = git.commit({
            dir: '/',
            author: {
                name: '' + this.name,
                email: 'test@ontario.ca'
            },
            message: 'new ' +  "student" + ' account for ' + this.name
        })
        console.log(sha);
        //teacher = newClass.teachers;
    }
}

export class Parent extends Person {
    children : Student[];

    constructor(pb : Uint8Array, name : string){
        super(pb, name, "Parent");
        this.children = [];
        console.log("New Parent created");
    }
}

export class Teacher extends Person {
    school : School;
    classes : Class[];

    constructor(pb : Uint8Array, name : string, school : School){
        super(pb, name, "Teacher");
        this.school = school;
        this.classes = [];
        console.log("New 3rd Party created");
    }
}

export class thridParty {

    courses : Course[];
    teachers : Teacher[];
    students : Student[];

    constructor(){
        this.courses = [];
        this.teachers = [];
        this.students = []
    }
}
