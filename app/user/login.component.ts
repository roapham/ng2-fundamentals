import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

    login(formValues) {
        console.log(formValues);
    }
}