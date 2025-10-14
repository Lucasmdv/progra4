import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product-service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Product } from '../../models/Product';

@Component({
  selector: 'app-form-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-page.html',
  styleUrl: './form-page.css'
})
export class FormPage implements OnInit{

  pForm!: FormGroup
  pId?: string

  constructor(
    private fb: FormBuilder,
    private pService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.pId = this.route.snapshot.params["id"]

    this.pForm= this.fb.group({
      name: ["",[Validators.required,Validators.minLength(1)]],
      price: ["",[Validators.required,Validators.min(0),Validators.max(500000)]],
      stock: ["",[Validators.required,Validators.min(0),Validators.minLength(2)]]
    })

    if(this.pId){
      this.pService.getProduct(this.pId!).subscribe(
      p => this.pForm?.patchValue(p)
    )}
  }

  onSubmit(){
    if(this.pId){
      const editedProduct: Product = this.pForm?.value
      editedProduct.id = this.pId
      this.pService.updateProduct(editedProduct).subscribe({
        next: () =>{
          alert("Producto editado correctamente")
          this.router.navigate(["/product/list"])
        },
        error: (e) => {
          alert("error al editar el producto")
          console.log(e)
        }
    })
    }else{
      this.pService.postProduct(
        this.pForm?.value
      ).subscribe({
        next: (data) =>{
          console.log(data)
        },
        error: (e) =>{
          alert("Error al crear el nuevo producto")
          console.log(e)
        }
      })
      this.router.navigate(["/product/list"])
    }
  }

}
