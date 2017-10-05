import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-router-screen',
  templateUrl: './router-screen.component.html',
  styleUrls: ['./router-screen.component.css']
})
export class RouterScreenComponent implements OnInit {

	actionType: string = window.location.href.split('/')[4]
	elements = [
	{
		title: "Client",
		path: "./assets/images/client.png",
		routerLink: `client`
	},
	{
		title: "Post",
		path: "./assets/images/post.png",
		routerLink: `post`
	}
	]
  constructor() { }

  ngOnInit() {
  }

}
