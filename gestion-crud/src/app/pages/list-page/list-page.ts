import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ProductService } from '../../services/product-service';
import { Product } from '../../models/Product';
import { FormBuilder, FormGroup, ɵInternalFormsSharedModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-page',
  standalone: true,
  imports: [RouterLink, ɵInternalFormsSharedModule, ReactiveFormsModule],
  templateUrl: './list-page.html',
  styleUrl: './list-page.css'
})
export class ListPage implements OnInit {

  products?: Product[]
  formFiltros!: FormGroup

  constructor(
    public pService: ProductService,
    private router: Router,
    private fb: FormBuilder
  ){

  }

  ngOnInit(): void {
    this.formFiltros = this.fb.group({
      filtro: [""],
      producto: [""]
    })
    this.formFiltros.valueChanges.subscribe(() => {
      this.getProducts();
    });
    this.getProducts()
  }

  getProducts(){
    this.pService.getProducts().subscribe({
      next: (data) => {
        this.products = [...data]

        if(this.formFiltros.value.filtro === "MenorMayor"){
          this.products.sort((a, b) => (a.price - b.price))

        }else if(this.formFiltros.value.filtro === "MayorMenor"){
          this.products.sort((a, b) => (b.price - a.price))

        }else if (this.formFiltros.value.filtro === "Nombre"){
          this.products.sort((a, b) => a.name.localeCompare(b.name))
        }
        
        if(this.formFiltros.value.producto !== ""){
          this.products = this.products.filter( p => p.name.toLowerCase().startsWith(this.formFiltros.value.producto))
        }

      },
      error(err) {
        console.log(err);
      },
    })
  }

  deleteProduct(id: string){
    this.pService.deleteProduct(id).subscribe({
      next: (data) => {
        this.getProducts(),
        console.log(data)
      },
      error: (e) =>{console.log(e)}
    })
  }

  editProduct(p : Product){
    this.router.navigate(["/product/edit",p.id])
  }

}
