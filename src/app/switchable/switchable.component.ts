import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-switchable',
  templateUrl: './switchable.component.html',
  styleUrls: ['./switchable.component.css']
})
export class SwitchableComponent implements OnInit {

	@Input() iconOn: string;
	@Input() iconOff: string;
  @Input() state: boolean;
  @Output() sender: EventEmitter<boolean> = new EventEmitter<boolean>();

  currentIcon: string;

  constructor() { }

  ngOnInit() {
    this.currentIcon = this.state == true ? this.iconOn : this.iconOff;
  }

  onClick(){
  	this.state = !this.state
    this.currentIcon = this.state == true ? this.iconOn : this.iconOff;
    this.sender.emit(this.state)
  }

}
