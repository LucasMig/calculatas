# DIGITAL REPUBLIC CODE CHALLENGE

## Objetivo

O Objetivo do desafio era criar uma aplicação que ajudasse o usuário a calcular a quantidade de tinta necessária para pintar uma sala.

Essa aplicação deveria considerar que a sala é composta de 4 paredes e deveria permitir que o usuário escolha qual a medida de cada parede e quantas janelas e portas possuem cada parede.

Com base na quantidade necessária o sistema deveria apontar tamanhos de lata de tinta que o usuário deve comprar, sempre priorizando as latas maiores.

## Como rodar

O resultado final do projeto está [hospedado aqui]()

### Regras de negócio

1. Nenhuma parede pode ter menos de 1 metro quadrado nem mais de 15 metros quadrados, mas podem possuir alturas e larguras diferentes
2. O total de área das portas e janelas deve ser no máximo 50% da área de parede
3. A altura de paredes com porta deve ser, no mínimo, 30 centímetros maior que a altura da porta
4. Cada janela possui as medidas: 2,00 x 1,20 mtos
5. Cada porta possui as medidas: 0,80 x 1,90
6. Cada litro de tinta é capaz de pintar 5 metros quadrados
7. Não considerar teto nem piso.
8. As variações de tamanho das latas de tinta são:
   - 0,5 L
   - 2,5 L
   - 3,6 L
   - 18 L

## Requistos técnicos

Você é livre para utilizar qualquer linguagem ou framework que queira e os calculos podem ser resolvidos tanto no backend ou frontend.

Mesmo o teste sendo algo simples e que pode ser resolvido com poucas linhas de código, crie uma estrutura de arquivos como se fosse um projeto maior. A organização e componentização são extremamente importantes.

Torne o projeto fácil de ser executado (crie um passo a passo e/ou utilize docker).

## O que será avaliado

- Qualidade do código
- Baixo acoplamento
- Componentização e reutilização de código
- Versionamento correto
- Escalabilidade
- Testabilidade

## Dicas

- Prefira funções puras
- Use gitflow e escreva comentários claros e objetivos em cada commit
- O uso de eslint, editor config, docker, webpack, etc facilitam sua vida
- Lembre-se do conceito de DRY e aplique
