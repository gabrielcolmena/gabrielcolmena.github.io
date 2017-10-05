import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

	postData = {
		title: "",
		description: "",
		notification: false
	}
	postsBD: FirebaseListObservable<any[]>;
	validationMessage: string;
	isValidated: boolean = true;

  constructor(public af: AngularFireDatabase) {
  	this.postsBD = af.list('/posts');
  }

  ngOnInit() {
  }

  validate(){
  	if(this.postData.title == "")
  		this.validationMessage = "Form title is required";
  	
  	else if(this.postData.description == "")
  	  this.validationMessage = "Description is required";
  	
  	else{
  		this.postsBD.push(this.postData)
  		return
  	}

  	this.isValidated = false;
  	setTimeout(() => { this.isValidated = true }, 5000)
  }

}
