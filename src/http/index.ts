import type ICategoria from "@/Interfaces/ICategoria"; //importar

/* lista de ingredientes separado */
export async function obtercategorias(){

    const resposta = await fetch(' https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/bf463b47860043da3b3604ca60cffc3ad1ba9865/categorias.json')
    
    const categorias: ICategoria[] = await resposta.json(); /* awayt e async = async marca uma função como assíncrona e await pausa a execução dessa função até que uma Promise seja resolvida ou rejeitada */

    return categorias;
} 