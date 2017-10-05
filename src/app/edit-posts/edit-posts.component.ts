import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-edit-posts',
  templateUrl: './edit-posts.component.html',
  styleUrls: ['./edit-posts.component.css']
})

export class EditPostsComponent implements OnInit {
  
  user: Observable<firebase.User>;
  items: FirebaseListObservable<any[]>;
  msgVal: string = '';
  db: AngularFireDatabase;
  theresItems: number = 1 //1: waiting, 0: no items, 2: theres items
  
  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase) { 
  	this.items = af.list('/messages', {
	  	query: {
	    	limitToLast: 50
		  }
	  })
    this.items.subscribe(resp => {
      this.theresItems = (resp.length) ? 2 : 0
    });
  }

  ngOnInit() {
  }

}
