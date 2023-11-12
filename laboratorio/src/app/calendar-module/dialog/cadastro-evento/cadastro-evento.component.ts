import { Component, inject } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { AlertService } from 'src/app/shared-module/services/alert.service';
import { Reminder } from '../../model/Reminder';
import { CalendarService } from '../../services/calendar.service';
import { Profile } from '../../model/Profile';



@Component({
  selector: 'app-cadastro-evento',
  templateUrl: './cadastro-evento.component.html',
  styleUrls: ['./cadastro-evento.component.scss']
})
export class CadastroEventoComponent {

  private formBuilder = inject(NonNullableFormBuilder);
  private alertService = inject(AlertService);
  private calendarService = inject(CalendarService);
  protected form = this.buildForm();
  protected reminder:Reminder[] = [];

  constructor(){
    //this.form.valueChanges.subscribe(console.log);
  }

   private buildForm() {
    return this.formBuilder.group({    
      idReminder:[null],
      titulo: ['', [Validators.required, Validators.minLength(3)]],
      descricao: ['', [Validators.required, Validators.minLength(14)]],
      dataEvento: [new Date(), [Validators.required]],
      categoria: ['', [Validators.required]],
      idProfile:[null]
    });
  }

  private fillEventForms(reminder: Reminder) {    //PREENCHE OS CAMPOS DO CADASTRO DE EVENTOS
    this.form.patchValue({
      titulo: reminder.titulo,
      descricao: reminder.descricao,
      dataEvento: reminder.dataEvento,
      categoria: reminder.categoria,
    });
  }


 public onSubmit(){
   console.log(this.createReminderPayLoad());
    this.calendarService.post(this.createReminderPayLoad()).subscribe({
      next: (res) => {
        this.alertService.onSucess(
          'Sucesso', 
          'Seu novo evento foi cadastrado!'
        )
        window.location.reload();
      },
      error: (err) => {
        this.alertService.onError(
          'Ocorreu um erro para cadastrar o novo evento!'
        )
        console.log(err);
      },
    });
  }

  private createReminderPayLoad(){
    const form = this.form.getRawValue();
    const profile = {idProfile: 1,}
  
    return {
      idReminder: form.idReminder,
      titulo: form.titulo,
      descricao: form.descricao,
      dataEvento: form.dataEvento,
      categoria: form.categoria['color'],
      idProfile: profile as Profile
    };
  }
  
  

  protected categories = [
    {
      title: 'Não iniciado',
      color: '#808080',
      class: 'darkgrey-icon'
    },
    {
      title: 'Pendente',
      color: '#ffa500',
      class: 'orange-icon'
    },
    {
      title: 'Em andamento',
      color: '#0000ff',
      class: 'blue-icon'
    },
    {
      title: 'Concluído',
      color: '#008000',
      class: 'green-icon'
    },
  ];
}
