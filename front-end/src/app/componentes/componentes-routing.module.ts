import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ComponentesComponent } from "./componentes.component";
import { SolicitacoesComponent } from "./solicitacoes/solicitacoes.component";

const routes: Routes = [
    {
        path: '',
        component: ComponentesComponent,
        children: [
            {
                path: '',
                component: SolicitacoesComponent,
            },
        ]
    }
]

@NgModule({
        imports: [
            RouterModule.forChild(routes)
        ],
        exports: [RouterModule]
    })
export class ComponentesRoutingModule { }