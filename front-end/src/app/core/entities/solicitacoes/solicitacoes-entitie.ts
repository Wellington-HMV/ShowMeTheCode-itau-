export interface SolicitacoesEntitie{
    _id:string,
    cnpj: string,
    plano: string,
    tarifa: number,
    minutos: number,
    empresa: string,
    dataAdesao: string,
    dataEnvio: string,
    valorDoPlano: number
}