export type ApiCallMethods = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'


export interface ApiCallParams {
    type: ApiCallMethods,
    url: string
}