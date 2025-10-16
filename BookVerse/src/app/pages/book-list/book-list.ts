import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { BookService } from '../../services/book-service';
import { Book } from '../../models/books';

@Component({
  selector: 'app-book-list',
  imports: [RouterLink],
  templateUrl: './book-list.html',
  styleUrl: './book-list.css'
})
export class BookList implements OnInit {

    constructor(
      public router: Router,
      public bService: BookService
    ){}

    ngOnInit(): void {
      this.obtenerLibros()
    }

    obtenerLibros(){
      this.bService.getBooks().subscribe({
        next: data => this.bService.books = data,
        error: (e) => {
          console.log(e)
          alert("Error al obtener lista de libros")
        }
      })
    }

    editarLibro(book: Book){
      this.router.navigate(["/book/edit",book.id])
    }

    eliminarLibro(id: string){
      this.bService.deleteBook(id).subscribe({
        next: data => {
          console.log(data)
          alert("Libro eliminado correctamente")
          this.obtenerLibros()
        },
        error: (e) => {
          console.log(e)
          alert("Error al eliminar el libro")
        }  
      })
    }
}
