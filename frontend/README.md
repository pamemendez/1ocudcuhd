# SensorConnect - Hub de Sensores IoT

![Image](https://github.com/user-attachments/assets/6b50c817-d3ed-4741-8845-76fc8265a067)

##  Sobre o Projeto

Este é o **Projeto Integrador** desenvolvido EM FRONT-END E BACK-END, com foco na criação de uma aplicação web moderna e funcional.  
O sistema **SensorConnect** é um hub inteligente para integração, gerenciamento e visualização de sensores IoT, oferecendo soluções eficientes para monitoramento em tempo real. Mas tudo em simulação.

=============================

## 🚀 Instruções para Execução

### 🔧 Backend

cd back
py -m venv env
.\env\Scripts\activate
pip install -r .\requirements.txt
py .\manage.py migrate
py .\load_sensor.py   
(⚠️ Execute todos os scripts load_*.py disponíveis para popular o banco com os dados dos sensores.)
py manage.py runserver

### 🔧 Frontend
 npm i -g pnpm
 pnpm i 
 npm run dev 

=================================

# Instruções de Uso do Sistema

## 1. Cadastro e Login

Ao ser direcionado para a tela de login, você deve preencher os campos com:

- Um **nome**
- Um **e-mail válido** (contendo `@` e `.`)
- Uma **senha** com **no mínimo 6 dígitos**

Alternativamente, é possível clicar em **"Sign In"** para acessar diretamente, sem realizar o cadastro.

---

## 2. Acesso à Página Manage Sensor

Após o processo, acesse a página **"Manage Sensor"** e atualize-a para visualizar os dados carregados na tabela.

---

## 3. Adicionando um Sensor

Ao adicionar um sensor na página **Manage Sensor**, na aba **Status**, o usuário deve escolher algum tipo de sensor cadastrado no backend, dentre as opções:

- Umidade
- Temperatura
- Contador
- Luminosidade

---

## 4. Navegação

A navegação é totalmente feita pelo **header**.
