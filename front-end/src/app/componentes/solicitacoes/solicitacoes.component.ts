import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

import { SolicitacoesEntitie } from 'src/app/core/entities';
import { SolicitacoesService } from 'src/app/core/services';

@Component({
  selector: 'app-solicitacoes',
  templateUrl: './solicitacoes.component.html',
  styleUrls: ['./solicitacoes.component.sass']
})
export class SolicitacoesComponent implements OnInit {

  eventsSubject: Subject<string> = new Subject<string>();

  solicitacoes$: Observable<SolicitacoesEntitie[]>;

  soliccacao: SolicitacoesEntitie;

  constructor(
    private solicService: SolicitacoesService
  ) {
  }
  
  ngOnInit(): void { 
    this.solicitacoes$ = this.solicService.getSolicitacoes();
  }

  editar(id: Element) {
    this.eventsSubject.next(id.innerHTML);
  }

  deletar(id: Element){
    this.solicService.deleteSolicitacao(id.innerHTML).subscribe(r=>{
      alert(r.message);
      window.location.reload(); 
      //está com problema no reload retorna erro 500 (header de request verificado porém não encontrei o erro por prazo enviei sem solucionar o caso)
    }, e=>{alert(e.error)});
  }
}
