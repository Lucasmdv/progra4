import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BookService } from '../../services/book-service';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../../models/books';

@Component({
  selector: 'app-book-form',
  imports: [ReactiveFormsModule],
  templateUrl: './book-form.html',
  styleUrl: './book-form.css'
})
export class BookForm implements OnInit {

  booksForm!: FormGroup
  bookID?: string

  constructor(
    private bService: BookService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.bookID = this.route.snapshot.params["id"]

    this.booksForm = this.fb.group({
      title: ["",,[Validators.required,Validators.minLength(3),Validators.maxLength(50)]],
      autor: ["",[Validators.required,Validators.pattern('[A-Za-z ]+')]],
      anioPublicacion: ["",[Validators.required,Validators.min(1500)]],
      genero: ["",[Validators.required]]
    })

    if(this.bookID){
      this.bService.getBook(this.bookID).subscribe(
        b => this.booksForm.patchValue(b)
      )
    }
  }


  onSubmit(){

    if (this.bookID) {
      if (confirm("¿Estas seguro de editar?")) {
        let bookEdited: Book = this.booksForm.value
        bookEdited.id = this.bookID
        this.bService.putBook(bookEdited).subscribe({
          next: () => {
            alert("Libro editado correctamente")
            this.router.navigate(["/book/list"])
          },
          error: (e) => {
            console.log(e)
            alert("Error al editar el libro")
          }
        })
      }
    }else{

      if(!this.bService.books.find( b => 
        this.booksForm.value.title.toLowerCase() === b.title.toLowerCase() && 
        this.booksForm.value.autor.toLowerCase() === b.autor.toLowerCase()
      )){

        this.bService.postBook(this.booksForm.value).subscribe({
          next: (data) =>{
            console.log(data)
            alert("Libro creado correctamente")
          },
          error: (e) =>{
            alert("Error al crear el nuevo producto")
            console.log(e)
          }
        })
        this.router.navigate(["/book/list"])
      }else{
        alert("Ya existe un libro con ese nombre y autor")
      }
    }
  }
}
