import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formTest',
  templateUrl: './formTest.component.html',
  styleUrls: ['./formTest.component.scss'],
})
export class FormTestComponent implements OnInit {
  BranchId = '2';

  constructor() {}

  ngOnInit() {}

  RegisterStudent(studentForm: NgForm): void {
    console.log(studentForm.value);
  }

  Branches: any[] = [
    { id: 1, name: 'CSE' },
    { id: 2, name: 'ETC' },
    { id: 3, name: 'Mechanical' },
    { id: 4, name: 'Electrical' },
  ];
}
