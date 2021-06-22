import { Component, OnInit } from '@angular/core';
// import { Event } from '@angular/router';

@Component({
  selector: 'app-servers',
  // template: '<app-server></app-server><app-server></app-server>',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer= false;
  serverCreationStatus = "No server created";
  serverName = "";
  // serverName = "test";
  serverCreated = false;
  servers = ["testserver1", "testserver2"]
  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    },2000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = "Server is created" + this.serverName;
  }

  onUpdateServerName(event: any){
     console.log(event);
  }

//   onUpdateServerName(event: Event){
//     this.serverName = (<HTMLInputElement>event.target).value;
//  }

}
