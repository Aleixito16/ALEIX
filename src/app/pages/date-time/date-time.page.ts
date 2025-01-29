import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
  standalone: false
})
export class DateTimePage implements OnInit {

  fechaNaci: Date = new Date();

  customYearValues= [2025,2020,2015,2010,2005,2000]

  /* customPickerOptions = {
    buttons: [
      {
        text: 'Hola',
        handler: () => {
          console.log('Hola clicked');
        }
      },
      {
        text: 'Mundo',
        handler: () => {
          console.log('Mundo clicked');
        }
      }
    ]
  } */

  handleCustomPicker(event: any) {
    console.log('Evento personalizado:', event.detail.value);
  }

  constructor() { }

  ngOnInit() {
  }

  cambioFecha( event: any ) {
    console.log( event );
    console.log( new Date(event.detail.value) );

  }

}
