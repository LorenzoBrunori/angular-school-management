import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.css']
})
export class RegistrazioneComponent implements OnInit {

  @ViewChild('formObj', {static:false}) form:NgForm;



  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    
  }
}
