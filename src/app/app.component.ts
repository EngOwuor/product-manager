import { templateJitUrl } from '@angular/compiler';
import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Component } from '@angular/core';

@Component({
  selector :'pm-root',
  template :`
    <div><h1>{{pageTitle}}</h1>
      <pm-products></pm-products>
    </div>
    `

})
export class AppComponent{
  pageTitle:string = 'Acme Product Management'
}
