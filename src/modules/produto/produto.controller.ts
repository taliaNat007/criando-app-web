import { Controller, Get, Render } from "@nestjs/common";

@Controller('produto')
export class ProdutoController{
    @Get()
    @Render('produto/produto')
    inicial(): object {
        return{
            titulo: 'Produtos - Consulta'
        }
    }
}