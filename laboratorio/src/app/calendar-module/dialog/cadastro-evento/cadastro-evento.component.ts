import { Component, inject } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { AlertService } from 'src/app/shared-module/services/alert.service';
import { Reminder } from '../../model/Reminder';



@Component({
  selector: 'app-cadastro-evento',
  templateUrl: './cadastro-evento.component.html',
  styleUrls: ['./cadastro-evento.component.scss']
})
export class CadastroEventoComponent {

  private formBuilder = inject(NonNullableFormBuilder);
  private alertService = inject(AlertService);
  protected form = this.buildForm();

  protected reminder:Reminder[] = [];
  protected colors: String[] = ['A Fazer', 'Fazendo', 'Pendente', 'Concluido'];

  constructor(){}

   private buildForm() {
    return this.formBuilder.group({    
      idReminder:[null],
      titulo: ['', [Validators.required, Validators.minLength(3)]],
      descricao: ['', [Validators.required, Validators.minLength(14)]],
      dataEvento: [new Date(), [Validators.required]],
      categoria: ['', [Validators.required]],
    });
  }

  private fillEventForms(reminder: Reminder) {
    //PREENCHE OS CAMPOS DO CADASTRO DE EVENTOS
    this.form.patchValue({
      titulo: reminder.titulo,
      descricao: reminder.descricao,
      dataEvento: reminder.dataEvento,
      categoria: reminder.categoria,
    });
  }


  onSubmit(){
    this.alertService.onSucess(
      'Sucesso', 
      'Seu novo evento foi cadastrado!'
    )
  }
}
