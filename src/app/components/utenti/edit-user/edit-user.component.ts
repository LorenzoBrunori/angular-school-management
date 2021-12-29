import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/services/user.interface';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit{
  @Input() user: User;
  @Output() close = new EventEmitter<void>();

  userCopy: User;
  constructor() { }

  ngOnInit(): void {
    this.userCopy = Object.assign({},this.user);
  }

  onClose(){
    this.close.emit();
  }

  onSave(){
    this.user.nome = this.userCopy.nome;
    this.user.cognome = this.userCopy.cognome;
    this.user.email = this.userCopy.email;
    this.user.eta = this.userCopy.eta;
    this.user.sesso = this.userCopy.sesso;
    this.user.ruolo = this.userCopy.ruolo;
    this.user.numero_telefono = this.userCopy.numero_telefono;
    this.close.emit();
  }
}

