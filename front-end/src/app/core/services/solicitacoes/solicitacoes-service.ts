import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { SolicitacoesEntitie } from "../../entities";
import { UrlApi } from "../api-url";

const api = UrlApi.url + 'Solicitacoes/'

@Injectable({ providedIn: 'root' })


export class SolicitacoesService {

    constructor(
        private http: HttpClient) { }

    getSolicitacoes() {
        return this.http.get<SolicitacoesEntitie[]>(api)
    }

    getSolicitacoesById(id?: string) {
        return this.http.get<SolicitacoesEntitie>(`${api}${id}`)
    }

    createSolicitacao(solicitacao: SolicitacoesEntitie, dataEnvio?: string) {
        solicitacao.dataEnvio = dataEnvio!
        return this.http.post(`${api}`, solicitacao)
    }

    updateSolicitacoes(solicitacao: SolicitacoesEntitie) {
        return this.http.put<any>(`${api}${solicitacao._id}`, solicitacao)
    }

    deleteSolicitacao(id?: string) {
        return this.http.delete<any>(`${api}${id}`)
    }
}