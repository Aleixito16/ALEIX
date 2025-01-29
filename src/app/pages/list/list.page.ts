import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
  standalone: false,
})
export class ListPage implements OnInit {

  usuarios!: Observable<any>;

  @ViewChild(IonList) ionList!: IonList;

  constructor( private dataService: DataService ) { }

  favorite(user: any) {
  this.ionList.closeSlidingItems();
  }

  share(user: any) {
    console.log('Share clicked:', user);
    this.ionList.closeSlidingItems();

  }

  delete (user: any) {
    console.log('User deleted:', user.name);
    this.ionList.closeSlidingItems();

  }

  ngOnInit() {

    this.usuarios = this.dataService.getUsuarios()


  }

}
