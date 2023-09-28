# Especificação do Projeto

## Perfis de Usuários

[Enumere e faça o detalhamento dos perfis de usuários. Utilize o modelo de tabela abaixo para sintetizá-los.]

<table>
<tbody>
<tr align=center>
<th colspan="2">Microempreendedor </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Artesãos, Feirantes, Pequenos-Varejistas, Profissionais-Autônomos, Artistas, Profissionais da área de alimentação  </td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>Fornecedores e Estoques, Manutenção e Reparos, Salários, Aluguel ou Locação de Espaço, Atributo, Outros  </td>
</tr>
</tbody>
</table>


## Histórias de Usuários

|EU COMO... `QUEM`   | QUERO/PRECISO ... `O QUE` |PARA ... `PORQUE`                 |
|--------------------|---------------------------|----------------------------------|
| Microempreendedor | Calcular os valores dos serviços a ser prestado | Saber a margem de lucro |
| Microempreendedor | Listar os fornecedores, saber quais produtos vendem e o seu valor | Sabendo o preço dos produtos utilizados em um serviço é possível calcular o valor e margem de lucro com maior facilidade |
| Microempreendedor | Listar todos os serviços que tenho possibilidade de executar | Ajuda a precisar melhor quais partes do serviço podem ser entregues pelo microempreendedor e quais precisam ser terceirizadas para outros |
| Microempreendedor | Salvar as informações do cliente | Saber quem é o cliente e poder entrar em contato com ele facilmente |
| Microempreendedor | Salvar as informações dos serviços já realizados | Ter um portifólio com imagens dos serviços ajuda a convencer o cliente a aceitar o valor solicitado no orçamento |
| Microempreendedor | Definir datas e horários para a execução dos serviços | Organizar quanto a datas de início e fim para entrega dos serviços |
| Microempreendedor | Listar todos os produtos que posso vender e seus respectivos custos | Sabendo o custo dos meus produtos posso calcular o lucro com maior facilidade |
| Microempreendedor | Entregar o orçamento para o cliente e aguardar uma resposta | Iniciar a fase de negociação com o cliente discutindo valores e prazos para a entrega do serviço |
| Microempreendedor | Organizar uma lista com todos os orçamentos | Avaliar a expectativa de trabalho, tempo que será gasto e expectativa de lucro |
| Microempreendedor | Criar um contrato com base em um orçamento aprovado pelo cliente | Assinar o contrato é validar todo o tempo empregado na criação do orçamento |

## Requisitos do Projeto

[Com base nas Histórias de Usuários, enumere os requisitos da solução. Lembre-se que cada requisito deve corresponder a uma, e somente uma, característica alvo da solução. Além disso, certifique-se de que todos os aspectos capturados nas Histórias de Usuário foram cobertos.]

### Requisitos Funcionais

[Utilize o modelo de tabela abaixo para apresentar os requisitos funcionais]

|ID    | Descrição                                                                  | Prioridade |
|-------|-------------------------------------------------------------------------------|----|
| RF-01 |  Cadastro do cliente na plataforma, para o cadastro deve ser inserido nome, CPF, e-mail, telefone e endereço, deve ser gerada uma mensagem para o e-mail do cliente confirmando a criação da conta e uma senha aleatória que obrigatoriamente deve ser trocada no primeiro acesso.  | Alta  | 
| RF-02 |  Ambiente do cliente com visualização do histórico dos orçamentos podendo selecionar o orçamento desejado, aprová-lo ou reprová-lo, inserir feedbacks para avaliação do prestador de serviço e imprimir os orçamentos, além disso deve haver um filtro para organização dos orçamentos por data, tipo do serviço ou status.  | Alta  |
| RF-03 |  Após o aceite do orçamento o contrato deve ser gerado contendo os valores e serviços descritos no orçamento bem como as clausuras inseridas pelo prestador de serviço, deve haver uma opção para imprimir o contrato e outra para enviá-lo por e-mail. | Média |
| RF-04 |  Orçamentos não aprovados podem ser reabertos e dados como ativos para atualização de informações e valores para uma nova troca de feedbacks com o prestador de serviço. | Média |
| RF-05 |  Deve existir no ambiente do prestador de serviço um espaço para a realização do cálculo dos valores cobrados pelo serviço, o serviço deve ter um nome, um id, uma descrição e um valor levando em conta o custo de execução e margem de lucro. | Alta  |
| RF-06 |  No ambiente do prestador de serviço deve existir um espaço para a criação da lista de fornecedores com id, nome, endereço, contato, descrição, produtos vendidos e os valores dos produtos. O prestador de serviço pode navegar nessa lista filtrando por fornecedor ou por produto. | Alta  |
| RF-07 |  Deve haver um espaço na área de criação do orçamento para definição do escopo do serviço e inserção de informações relevantes para o orçamento em formata de texto ou imagens. | Média |
| RF-08 |  Na criação do orçamento é necessário existir um espaço em que o prestador de serviço possa colocar o cronograma para a realização do serviço. | Média |
| RF-09 |  Durante a criação do orçamento é necessário existir um campo para inserção de serviços complementares e o valor desses serviços deve ser destacado dos outros | Baixa |
| RF-10 |  O prestador de serviço precisa responder os feedbacks dos clientes após a modificação dos orçamentos. | Média |
| RF-11 |  O prestador de serviço precisa de um espaço para edição de um ou mais modelos de contrato, que podem ser inseridos nos orçamentos. | Baixa |
| RF-12 |  O prestador de serviços deve acessar uma ferramenta de CRM dentro da plataforma contendo as informações de andamento e aceite dos seus orçamentos. | Baixa |

**Prioridade: Alta / Média / Baixa. 

### Requisitos não Funcionais

[Utilize o modelo de tabela abaixo para apresentar os requisitos não-funcionais]

|ID      | Descrição               |Prioridade |
|--------|-------------------------|----|
| RNF-01 |  Sistema deve ser feito em plataformas web.       | Alta  | 
| RNF-02 |  Necessidade de criar um logotipo para o sistema. | Alta  | 
| RNF-03 |  Deve ter suas operações integradas com opções para envio de e-mails com notificações para o cliente e para o prestador de serviço. | Média | 

**Prioridade: Alta / Média / Baixa. 

