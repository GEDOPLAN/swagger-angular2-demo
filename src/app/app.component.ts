import { Component } from '@angular/core';
import { DefaultApi } from './gen/api/api'
import { CurrentTime } from './gen/model/models'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DefaultApi]
})
export class AppComponent {

  constructor(private _api: DefaultApi) {

  }

  public echo: string;
  public time: CurrentTime;

  public getEcho(name: string, message: string) {
    this._api.echoNameGet(name, message).subscribe( (resp:any) => this.echo=resp.message);
  }

  public getTime() {
    this._api.timeGet().subscribe(t => this.time=t)
  }

}
