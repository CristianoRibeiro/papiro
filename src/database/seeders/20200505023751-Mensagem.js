'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>  queryInterface.bulkInsert('Mensagem',
  
 [
  {
    DsMensagem:'Acredito que devíamos criar, com supervisão de nossos arquitetos e seniores, uma estrutura básica possuindo bibliotecas já criadas de javascript e extensões diversas mais comuns em nossos projetos. Ao meu ver, isso economizaria um tempo precioso no início de cada novo projeto e ajudaria a manter nossos códigos mais uniformes. ',
    Up:'5',
    CdUsuario:'1',
    createdAt:new Date(),
    updatedAt:new Date(),
  },

  {
    DsMensagem:'Apoio totalmente a idéia! Inclusive é uma atitude muito comum pela experiência que tive em empresas anteriores.',
    Up:'1',
    CdMsgPai:'1',
    CdUsuario:'2',
    createdAt:new Date(),
    updatedAt:new Date(),
  },
  {
    DsMensagem:'Não acredito que seja viável, nossos novos projetos são muito discrepantes uns dos outros. Regular os componentes para atender essas especificades em cada caso, faria perder totalmente o brilho de sua ideia.',
    Up:'0',
    CdMsgPai:'1',
    CdUsuario:'3',
    createdAt:new Date(),
    updatedAt:new Date(),
  },
  {
    DsMensagem:'Bom dia caros colegas, identifiquei que nosso processo seletivo não contém testes práticos de atividade em grupo. O que considero prejudicial, novos colaboradores de meu setor tem tido problema para interagir e desenvolver trabalho com a equipe. ',
    Up:'0',
    CdUsuario:'4',
    createdAt:new Date(),
    updatedAt:new Date(),
  },
  {
    DsMensagem:'Boa tarde amigos, a área de testes vem tendo dificuldades pelas múltiplas ferramentas para gestão de Tasks. Existe alguma ferramenta padronizada em nossos fluxos? Se não, não seria o caso passar a ter ? É um problema, pois muitas vezes as ferramentas não se comunicam entre sí. Gerando transtornos. Por minha experiência, indicaria o uso do Mantis',
    Up:'3',
    CdUsuario:'10',
    createdAt:new Date(),
    updatedAt:new Date(),
  },
  {
    DsMensagem:'Boa tarde Rafael, tudo bom? Nos projetos em que participei, optamos por usar o visual Studio. Fomos bem sucedidos até então, e a empresa disponibiliza a versão Enterprise do mesmo. Com ainda mais recursos :)',
    Up:'1',
    CdMsgPai:'5',
    CdUsuario:'12',
    createdAt:new Date(),
    updatedAt:new Date(),
  },
  {
    DsMensagem:'Já tentei usar o cadastro e acompanhamento de bugs pelo visual studio. Sem muito sucesso :x, achei a interface pouco intuitiva. Ainda apoio o uso do Mantis para tal..',
    Up:'1',
    CdMsgPai:'5',
    CdUsuario:'10',
    createdAt:new Date(),
    updatedAt:new Date(),
  },
  {
    DsMensagem:'Acredito que o sistema de recompensas por pontuação, poderia buscar fazer mais parcerias com os locais próximos daqui. Além de ser mais fácil, existem boas opções consideravelmente próximos. Existe um podólogo aqui em baixo que realmente me motivaria a aumentar meus pontos #FicaaDica',
    Up:'0',
    CdUsuario:'6',
    createdAt:new Date(),
    updatedAt:new Date(),
  },
  {
    DsMensagem:'O filtro de nosso telemarketing está muito vago com apenas duas opções, acredito que novos filtros deveriam ser aplicados. Para que o cliente já chegue para atendimento com a gente tendo alguma ideia do problema dele. Assim estando prontos para melhores atendimentos',
    Up:'1',
    CdUsuario:'3',
    createdAt:new Date(),
    updatedAt:new Date(),
  },
  {
    DsMensagem:'Não seria mais ideal que a cor da ferramenta de pontuação, refletisse as cores de nossa empresa?',
    Up:'3',
    CdUsuario:'13',
    createdAt:new Date(),
    updatedAt:new Date(),
  },

],{} ),

  down: (queryInterface,) =>  queryInterface.bulkDelete('Mensagem',null,{}),

   /*
    Estrutura de banco, Migrations e Seeders by Tery
    */

};
