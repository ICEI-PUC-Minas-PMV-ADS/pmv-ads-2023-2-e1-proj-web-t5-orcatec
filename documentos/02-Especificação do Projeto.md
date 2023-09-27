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
<td width="600px">Artesãos 
Feirantes 
Pequenos-Varejistas 
Profissionais-Autônomos 
Artistas 
Profissionais da área de alimentação  </td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>Fornecedores e Estoques 
Manutenção e Reparos 
Salários  
Aluguel ou Locação de Espaço 
Atributo  
Outros  </td>
</tr>
</tbody>
</table>


## Histórias de Usuários

|EU COMO... `QUEM`   | QUERO/PRECISO ... `O QUE` |PARA ... `PORQUE`                 |
|--------------------|---------------------------|----------------------------------|
| Microempreendedor | Calcular os valores dos serviços a ser prestado | Saber a margem de lucro |
| Microempreendedor | Listar os fornecedores, saber quais produtos vendem e o seu valor | Sabendo o preço dos produtos utilizados em um serviço é possível calcular o valor e margem de lucro com maior facilidade |

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
| RF-06 |  ...                    | Alta  |
| RF-07 |  ...                    | Média |
| RF-08 |  ...                    | Média |
| RF-09 |  ...                    | Baixa |
| RF-10 |  ...                    | Média |
| RF-11 |  ...                    | Baixa |
| RF-12 |  ...                    | Baixa |

**Prioridade: Alta / Média / Baixa. 

### Requisitos não Funcionais

[Utilize o modelo de tabela abaixo para apresentar os requisitos não-funcionais]

|ID      | Descrição               |Prioridade |
|--------|-------------------------|----|
| RNF-01 |  ...                    | ...   | 
| ...    |  ...                    | ...   | 

**Prioridade: Alta / Média / Baixa. 

