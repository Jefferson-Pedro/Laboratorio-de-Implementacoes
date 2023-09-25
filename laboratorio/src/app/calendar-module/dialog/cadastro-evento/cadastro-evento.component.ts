import { Component } from '@angular/core';
import { AlertService } from 'src/app/shared-module/services/alert.service';

@Component({
  selector: 'app-cadastro-evento',
  templateUrl: './cadastro-evento.component.html',
  styleUrls: ['./cadastro-evento.component.scss']
})
export class CadastroEventoComponent {

  constructor(private alert: AlertService){}

  onSubmit(){
    this.alert.onSucess(
      'Sucesso', 
      'Seu novo evento foi cadastrado!'
    )
  }

}
