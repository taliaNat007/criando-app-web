import { Controller, Get, Post, Body, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  @Render('inicial')
  getHello(): object {
    
    let dadosAcademicos = [
      {formacao: 'Ensino Médio, Completo', instituicao: 'IFRO Campus Ji-Paraná'},
      {formacao: 'Técnico em Informática, Concluído', instituicao: 'IFRO Campus Ji-Paraná'},
      {formacao: 'Análise e Desenvolvimento de Sistemas, Cursando (5° P)', instituicao: 'IFRO Campus Ji-Paraná'},
    ];
    
    let experiencia = [
      {cargo: "Instrutora de Programação", empresa: "Código Kid"},
      {cargo: "Instrutora de Programação", empresa: "Código Kid"}
    ];

    let habilidades = [
      {hab: "Comunicação clara e didática"},
      {hab: "Proatividade e iniciativa"},
      {hab: "Facilidade de aprendizado contínuo"},
      {hab: "Facilidade de aprendizado contínuo"},
      {hab: "Adaptabilidade a novos ambientes e tecnologias"},
      {hab: "Trabalho em equipe"},
      {hab: "Organização e documentação de projetos"}
    ];

    let habTec = [
      {habT:"Linguagens: C#, JavaScript"},
      {habT:"Desenvolvimento Mobile: React Native"},
      {habT:"Desenvolvimento Web: HTML, CSS, Node.js, NestJS, EJS (Embedded JavaScript Templates) HTML5, CSS3"},
      {habT:"Banco de Dados: SQL"},
      {habT:"Robótica: Arduino"},
      {habT:"Prática em desenvolvimento de projetos acadêmicos"},
    ];

    return {
      titulo: 'Natália da Silva Fernandes',
      horaAgora: new Date(),
      listaAcademica: dadosAcademicos,
      listaExperiencia: experiencia,
      listaHabilidades: habilidades,
      habilidadeTecnica: habTec
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
