import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.css']
})
export class NewClientComponent implements OnInit {

	userData = {
		username: "",
		nickName: "",
		password: "",
		passwordRepeat: ""
	}

	validationMessage: string;
	isValidated: boolean = true;
	usersBD: FirebaseListObservable<any[]>;

	constructor(public af: AngularFireDatabase) {
		this.usersBD = af.list('/users');
	}

	validate(){
		if(this.userData.username == "")
			this.validationMessage = "Username is required";
		else if(this.userData.password == "")
			this.validationMessage = "password is required";
		else if(this.userData.password.length < 7)
			this.validationMessage = "password most have 8 characters or more";
		else if(this.userData.passwordRepeat == "")
			this.validationMessage = "repeat the password is required";
		else if(this.userData.passwordRepeat != this.userData.password)
			this.validationMessage = "passwords are not equal"
	  	else{
	  		this.usersBD.push(this.userData)
	  		return
	  	}

		this.isValidated = false
		setTimeout(() => { this.isValidated = true }, 5000);
	}

	ngOnInit() {
	}

}
