import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: "server", name:"testserver", content:"new test!"}];
  

  onAddServer(serverData:{ serverName:string, serverContent:string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onAddBlueprint(bpData:{ serverName:string, serverContent:string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: bpData.serverName,
      content: bpData.serverContent
    });
  }
}
