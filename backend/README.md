# Nola God Level - Backend

## 📜 Descrição

Este projeto é o backend de um sistema de analytics para restaurantes, permitindo explorar dados de vendas, clientes e produtos, gerar insights acionáveis e criar dashboards customizados. Ideal para donos de restaurantes que precisam tomar decisões rápidas com base em dados reais.

## Funcionalidades

- CRUD de Produtos, Categorias, Brands e Clientes
- Paginação de dados
- Análise de clientes leais
- Relatórios de vendas por produto, canal e período
- Preparado para integração com dashboards frontend

## Tecnologias Utilizadas

- Node.js v22.x
- TypeScript
- Express.js
- TypeORM
- PostgreSQL
- ts-node/esm
- Insomnia (para testes de API)

<p>A escolha pelo Node.js foi por ser uma tecnologia que suporta grande volume de dados, rápida e leve.</p>
<p>O Express.js me permite organizar melhor meu código e, também, na criação de rotas RESTful que facilita em aplicações com muitos endpoints.</p>
<p>Com o TypeORM consigo estabelecer uma conexão segura com meu banco de dados, ter uma modelagem clara através das entidades,além de possuir um suporte com o POSTGRES que foi o banco de dados trabalhado.</p>

## Instalação

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/nola.git
cd backend

```

## **Inicializando o projeto**

```
npm install
```

Após a inicialização, criar e preencher as informações da variavel de ambiente (.env) contidas no arquivo (.env.example)

### Inicie o servidor

```
npm run start
```

Ele iniciará em:

```
http://localhost:{PORT ON .ENV}/
```

## Estruturas de pastas

src/
├── controllers/
│ ├── brands.controller.ts
│ ├── categories.controller.ts
│ ├── sales.controller.ts
│ ├── customers.controller.ts
│ └── ...
├── services/
│ ├── brands.service.ts
│ ├── categories.service.ts
│ ├── customers.service.ts
│ ├── sales.service.ts
│ └──...
├── entities/
│ ├── Brands.ts
│ ├── Categories.ts
│ ├── Customers.ts
│ ├── Sales.ts
│ ├── Products.ts
│ └── ...
├── routes/
│ ├── Brands.route.ts
│ ├── Categories.route.ts
│ ├── Customers.ts
│ └── ...
├── app.ts
├── data-source.ts
└── server.ts

## Entidades Principais e endpoints

### Brand

---

| Campo     | Tipo   | Descrição           |
| --------- | ------ | ------------------- |
| id        | number | Identificador único |
| name      | string | Nome da marca       |
| createdAt | date   | Data de criação     |

```bash
# GET /brands - No body

# GET /brands - FORMATO DA RESPOSTA - STATUS 200
[
 {
	"id": 3,
	"name": "marca 3",
	"createdAt": "2025-11-03T22:32:01.434Z"
 }
]
```

<br>

```bash
# GET /brands/:id - No body

# GET /brands/:id - FORMATO DA RESPOSTA - STATUS 200
[
    {
		"id": 3,
		"name": "marca 3",
		"createdAt": "2025-11-03T22:32:01.434Z"
	}
]
```

<br>

```bash
# PATCH /brands/:id - FORMATO DA REQUISIÇÃO
{
  "name": "string"
}

# PATCH /brands/:id - FORMATO DA RESPOSTA - STATUS 200
{
  "id": number,
  "name": "string",
  "createdAt": "string"
}
```

<br>

```bash
# DELETE /brands/:id - No body

# DELETE /brands/:id - FORMATO DA RESPOSTA - STATUS 200 No content
```

<br>

### Customer

| Campo                  | Tipo    | Descrição          |
| ---------------------- | ------- | ------------------ |
| id                     | number  | Identificador      |
| customerName           | string  | Nome completo      |
| email                  | string  | Email do cliente   |
| phoneNumber            | string  | Contato            |
| cpf                    | string  | cpf do cliente     |
| birthDate              | string  | Nascimento         |
| gender                 | string  | Genero do cliente  |
| registrationOrigin     | boolean | ex: "qr_code"      |
| agreeTerms             | boolean | Termos de uso      |
| receivePromotionsEmail | boolean | promoções no email |
| receivePromotionsSms   | bollean | promoções por SMS  |
| createdAt              | date    | Data de cadastro   |

```bash

# GET /customers/loyal - No body
<p>Lista todos os clientes fiéis (3+ compras).</p>
```

/customers/loyal?page=1&limit=10

```

# GET /customers/loyal - FORMATO DA RESPOSTA - STATUS 200
[

{
	"page": 2,
	"limit": 10,
	"results": 10001,
	"data": [
		{
			"id": null,
			"name": null,
			"total_amount": "165801"
		},
		{
			"id": 9554,
			"name": "Luiz Gustavo Carvalho",
			"total_amount": "68"
		},
		{
			"id": 9783,
			"name": "Sra. Isabella Novaes",
			"total_amount": "63"
		}...]
}
]

# GET /customers - No body
<p>Lista todos os clientes.</p>

# GET /customers - FORMATO DA RESPOSTA - STATUS 200
[

	{
		"id": 1,
		"customerName": "Erick Barros",
		"email": "monteiroenrico@example.net",
		"phoneNumber": "+55 (011) 1182-0316",
		"cpf": "104.923.768-40",
		"birthDate": "1986-11-24",
		"gender": "M",
		"registrationOrigin": "qr_code",
		"agreeTerms": true,
		"receivePromotionsEmail": false,
		"receivePromotionsSms": false,
		"createdAt": "2024-07-10T02:18:56.800Z"
	},
	{
		"id": 2,
		"customerName": "Dr. Bruno Alves",
		"email": "fmendes@example.org",
		"phoneNumber": "(081) 9631 2519",
		"cpf": "391.520.874-41",
		"birthDate": "1978-05-19",
		"gender": "F",
		"registrationOrigin": "pos",
		"agreeTerms": false,
		"receivePromotionsEmail": false,
		"receivePromotionsSms": false,
		"createdAt": "2025-06-20T02:18:56.800Z"
	}...
]
```

<br>

```bash
# GET /customers/:id - No body

# GET /customers/:id - FORMATO DA RESPOSTA - STATUS 200
[
	{
		"id": 8,
		"customerName": "Srta. Eloah da Rocha",
		"email": "caldeiraemanuel@example.com",
		"phoneNumber": "+55 (081) 8569-9822",
		"cpf": "418.620.759-30",
		"birthDate": "1997-07-29",
		"gender": "F",
		"registrationOrigin": "qr_code",
		"agreeTerms": false,
		"receivePromotionsEmail": false,
		"receivePromotionsSms": false,
		"createdAt": "2025-03-10T02:18:56.802Z"
	}
]
```

<br>

```bash
# PATCH /customers/:id - FORMATO DA REQUISIÇÃO

	{
		"id": 8,
		"customerName": "string",
		"email": "string",
		"phoneNumber": "string",
		"cpf": "string",
		"birthDate": "string",
		"gender": "string",
		"registrationOrigin": "string",
		"agreeTerms": boolean,
		"receivePromotionsEmail": boolean,
		"receivePromotionsSms": boolean,
		"createdAt": "string"
	}


# PATCH /customers/:id - FORMATO DA RESPOSTA - STATUS 200
[
    	{
		"id": 8,
		"customerName": "string",
		"email": "string",
		"phoneNumber": "string",
		"cpf": "string",
		"birthDate": "string",
		"gender": "string",
		"registrationOrigin": "string",
		"agreeTerms": boolean,
		"receivePromotionsEmail": boolean,
		"receivePromotionsSms": boolean,
		"createdAt": "string"
	}
]
```

<br>

### Sales

```bash
# GET /sales - No body

# GET /sales - FORMATO DA RESPOSTA - STATUS 200
[

	"data": [
		{
			"id": 551295,
			"codSale1": null,
			"codSale2": null,
			"createdAt": "2025-11-03T02:59:08.400Z",
			"customerName": null,
			"saleStatusDesc": "COMPLETED",
			"totalAmountItems": "98.12",
			"totalDiscount": "0.00",
			"totalIncrease": "0.00",
			"deliveryFee": "9.00",
			"serviceTaxFee": "0.00",
			"totalAmount": "107.12",
			"valuePaid": "107.12",
			"productionSeconds": 1435,
			"deliverySeconds": 1791,
			"peopleQuantity": null,
			"discountReason": null,
			"increaseReason": null,
			"origin": "POS",
			"productSales": [
				{
					"id": 1286863,
					"saleId": 551295,
					"productId": 112,
					"quantity": 1,
					"basePrice": 81.81,
					"totalPrice": 98.12,
					"observations": null
				}
			]
		},
		{
			"id": 552303,
			"codSale1": null,
			"codSale2": null,
			"createdAt": "2025-11-03T02:58:13.400Z",
			"customerName": null,
			"saleStatusDesc": "COMPLETED",
			"totalAmountItems": "76.54",
			"totalDiscount": "0.00",
			"totalIncrease": "0.00",
			"deliveryFee": "0.00",
			"serviceTaxFee": "0.00",
			"totalAmount": "76.54",
			"valuePaid": "76.54",
			"productionSeconds": 809,
			"deliverySeconds": null,
			"peopleQuantity": 7,
			"discountReason": null,
			"increaseReason": null,
			"origin": "POS",
			"productSales": [
				{
					"id": 1289192,
					"saleId": 552303,
					"productId": 460,
					"quantity": 1,
					"basePrice": 76.54,
					"totalPrice": 76.54,
					"observations": null
				}
			]
		}...
]
]
```

<br>

## Testar a API com Insomnia

Você pode importar nosso workspace no Insomnia para testar a API rapidamente.

[Download Insomnia Workspace](docs/insomnia_nola.json)
