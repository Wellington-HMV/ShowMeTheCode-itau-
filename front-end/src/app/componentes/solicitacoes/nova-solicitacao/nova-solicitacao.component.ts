import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';
import { SolicitacoesEntitie } from 'src/app/core/entities';
import { SolicitacoesService } from 'src/app/core/services';

@Component({
  selector: 'app-nova-solicitacao',
  templateUrl: './nova-solicitacao.component.html',
  styleUrls: ['./nova-solicitacao.component.sass'],
  providers: [DatePipe]
})
export class NovaSolicitacaoComponent implements OnInit {

  @Input() events: Observable<string>;

  solicitacaoForm: FormGroup
  edit: boolean = false
  dataEnvio?: string = this.datePipe.transform(Date.now(), 'dd/MM/yyyy')?.toString()
  
  private eventsSubscription: Subscription
  
  constructor(
    private datePipe: DatePipe,
    private formb: FormBuilder,
    private solicService: SolicitacoesService,
    ) {
  }

  ngOnInit(): void {
    this.GerarSolicitacaoForm()
    this.eventsSubscription = this.events.subscribe((data) => this.preencherFormEdit(data))
  }

  preencherFormEdit(id: string) {
    this.solicService.getSolicitacoesById(id).subscribe(resp => {
      this.solicitacaoForm.patchValue(resp)
      window.localStorage.setItem("idUser", resp._id)
      this.edit = true
    })
  }

  ngOnDestroy() {
    this.eventsSubscription.unsubscribe()
  }

  GerarSolicitacaoForm() {
    this.solicitacaoForm = this.formb.group({
      empresa: ['', Validators.required],
      cnpj: ['', Validators.required],
      plano: ['', Validators.required],
      tarifa: ['', Validators.required],
      minutos: ['', Validators.required],
      valorDoPlano: ['', Validators.required],
      dataAdesao: [this.dataEnvio, Validators.required],
    });
  }

  salvarSolicitcao() {
    this.edit ? this.editar(this.solicitacaoForm.value) :
      this.solicService.createSolicitacao(this.solicitacaoForm.value, this.dataEnvio).subscribe(
        () => {
          location.reload()
          this.edit = false
        }
      )
  }

  editar(solicitacao: SolicitacoesEntitie) {
    solicitacao._id = this.getId()!
    this.solicService.updateSolicitacoes(solicitacao).subscribe(r => {
      alert(r.message)
      location.reload()
      window.localStorage.removeItem("idUser")
    }
      , err => { err.error }
    )
  }

  getId() {
    return window.localStorage.getItem("idUser")?.toString()
  }
}