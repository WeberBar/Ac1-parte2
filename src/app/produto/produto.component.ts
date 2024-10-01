import { Component } from '@angular/core';
import { Produto } from '../models/Produto';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.css'
})
export class ProdutoComponent {

  produtos: Produto[] = [
    {
      id: 1,
      nome: 'Lumina Pro 5000',
      marca: 'TechCorp',
      valor: 299.99,
      quantidade: 100
    },
    {
      id: 2,
      nome: 'Echo Sound X',
      marca: 'AudioTech',
      valor: 199.99,
      quantidade: 30
    },
    {
      id: 3,
      nome: 'Quantum Watch',
      marca: 'TimeGears',
      valor: 149.99,
      quantidade: 50
    },
    {
      id: 4,
      nome: 'UltraVision TV',
      marca: 'VisionPro',
      valor: 499.99,
      quantidade: 0
    }
  ];

}
