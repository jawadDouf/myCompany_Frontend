import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-paragraph-componenet',
  templateUrl: './paragraph-componenet.component.html',
  styleUrls: ['./paragraph-componenet.component.css']
})
export class ParagraphComponenetComponent {

  @Input() titre! : string;
}
