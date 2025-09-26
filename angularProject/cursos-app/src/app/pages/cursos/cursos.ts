import { Component } from '@angular/core';
import { Header } from '../../component/header/header';
import { Footer } from '../../component/footer/footer';

@Component({
  selector: 'app-cursos',
  imports: [Header,Footer],
  templateUrl: './cursos.html',
  styleUrl: './cursos.css'
})
export class Cursos {

}
