import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  public  showBanner: boolean = true ;
  public ocultar_mostrar(){
    this.showBanner = !this.showBanner;


  }
}
