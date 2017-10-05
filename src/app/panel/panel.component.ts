import { Component, OnInit } from '@angular/core';
import {Renderer} from '@angular/core';


@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

	imagesPath: string = './assets/images'
	panelItems: Array<any> = [
	{
		mainImage: this.imagesPath + '/edit.png',
		labelText: 'Edit',
		routerLink: 'edit'
	},
	{
		mainImage: this.imagesPath + '/create.png',
		labelText: 'Create',
		routerLink: 'create'
	},
	{
		mainImage: this.imagesPath + '/settings.png',
		labelText: 'Settings',
		routerLink: 'settings'
	},
	{
		mainImage: this.imagesPath + '/logout.png',
		labelText: 'Logout',
		routerLink: 'logout'
	},
	]
	activeElement = window.location.href.split('/')[4]

  constructor(private renderer: Renderer) { }

  ngOnInit() {
  }

  myMethod(newElement: any) : void {
  	this.activeElement = newElement.labelText.toLowerCase();
  }

}
