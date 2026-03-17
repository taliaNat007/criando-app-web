import { Controller, Get, Post, Body, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  @Render('inicial')
  getHello(): object {
    
    let pessoas = [
      {nome: 'Natália Fernandes', email: 'criativosnatalia@gmail.com'},
      {nome: 'Heitor Fernandes', email: 'heitorfernandes@gmail.com'},
      {nome: 'Andressa Marinho', email: 'andressamarinho@gmail.com'},
      {nome: 'João Teixeira', email: 'ajoao@gmail.com'},
    ];
    
    return {
      titulo: 'AppWeb com NestJs',
      horaAgora: new Date(),
      listaPessoas: pessoas
    };
  }
  
  @Get('/contato')
  @Render('contato')
  getContato() {
    
  }

  @Post('/contato')
  enviarContato(@Body() dadosContato){
    console.log(dadosContato);

    return {
      message: 'Mensagem enviada com Sucesso!',
      listaContato: dadosContato
    };
  }
  
}
