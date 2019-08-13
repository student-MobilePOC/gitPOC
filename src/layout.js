"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var account_1 = require("./account");
var git = require('isomorphic-git');
var Ministry = /** @class */ (function () {
    function Ministry(name) {
        this.name = name;
        this.schoolBoards = [];
        this.account = new account_1.Account(this.name, "Ministry");
        var sha = this.account.newAccount();
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
    return Ministry;
}());
exports.Ministry = Ministry;
var SchoolBoard = /** @class */ (function () {
    function SchoolBoard(minstry, name) {
        this.ministry = minstry;
        this.schools = [];
        this.name = name;
        this.account = new account_1.Account(this.name, "School Board");
        this.account.newAccount();
        console.log("New School Board created");
        var browserfs = require('browserfs');
        browserfs.configure({ fs: "InMemory", options: {} }, function (err) {
            if (err)
                return console.log(err);
            var fs = browserfs.BFSRequire("fs");
            git.plugins.set('fs', fs);
        });
        git.init({ dir: '/' });
        console.log('done');
    }
    return SchoolBoard;
}());
exports.SchoolBoard = SchoolBoard;
var School = /** @class */ (function () {
    function School(schoolBoard, name) {
        this.schoolBoard = schoolBoard;
        this.name = name;
        this.account = new account_1.Account(this.name, "School Board");
        this.account.newAccount();
        console.log("New School created");
        var browserfs = require('browserfs');
        browserfs.configure({ fs: "InMemory", options: {} }, function (err) {
            if (err)
                return console.log(err);
            var fs = browserfs.BFSRequire("fs");
            git.plugins.set('fs', fs);
        });
        git.init({ dir: '/' });
        console.log('done');
    }
    return School;
}());
exports.School = School;
var Course = /** @class */ (function () {
    function Course(code) {
        this.code = code;
        this.classes = [];
        console.log("New Course created");
    }
    return Course;
}());
exports.Course = Course;
var Class = /** @class */ (function () {
    function Class(course) {
        this.course = course;
        this.students = [];
        this.teachers = [];
        console.log("New class created");
    }
    return Class;
}());
exports.Class = Class;
var Person = /** @class */ (function () {
    function Person(pb, name, type) {
        this.publicKey = pb;
        this.name = name;
        this.account = new account_1.Account(this.name, type);
        this.account.newAccount();
        var browserfs = require('browserfs');
        browserfs.configure({ fs: "InMemory", options: {} }, function (err) {
            if (err)
                return console.log(err);
            var fs = browserfs.BFSRequire("fs");
            git.plugins.set('fs', fs);
        });
        git.init({ dir: '/' });
        console.log('done');
    }
    return Person;
}());
exports.Person = Person;
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(pb, name, school) {
        var _this = _super.call(this, pb, name, "Studnet") || this;
        _this.school = school;
        _this.classes = [];
        console.log("New Student created");
        return _this;
    }
    Student.prototype.registerForClass = function (newClass) {
        this.classes.push(newClass);
        newClass.students.push(this);
        var sha = git.commit({
            dir: '/',
            author: {
                name: '' + this.name,
                email: 'test@ontario.ca'
            },
            message: 'new ' + "student" + ' account for ' + this.name
        });
        console.log(sha);
        //teacher = newClass.teachers;
    };
    return Student;
}(Person));
exports.Student = Student;
var Parent = /** @class */ (function (_super) {
    __extends(Parent, _super);
    function Parent(pb, name) {
        var _this = _super.call(this, pb, name, "Parent") || this;
        _this.children = [];
        console.log("New Parent created");
        return _this;
    }
    return Parent;
}(Person));
exports.Parent = Parent;
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(pb, name, school) {
        var _this = _super.call(this, pb, name, "Teacher") || this;
        _this.school = school;
        _this.classes = [];
        console.log("New 3rd Party created");
        return _this;
    }
    return Teacher;
}(Person));
exports.Teacher = Teacher;
var thridParty = /** @class */ (function () {
    function thridParty() {
        this.courses = [];
        this.teachers = [];
        this.students = [];
    }
    return thridParty;
}());
exports.thridParty = thridParty;
