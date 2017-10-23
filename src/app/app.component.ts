import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items = ["Manzanas", "Tomates", "Plátanos"];
  newItem = "";

  pushItem = function(){
    if (this.newItem != "") {
      this.items.push(this.newItem);
      this.newItem = "";
    }
  }
}
