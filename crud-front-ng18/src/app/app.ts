import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from "./utilida/nav/nav";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Nav],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'crud-front-ng18';
}
