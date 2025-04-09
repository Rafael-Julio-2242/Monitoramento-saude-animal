Português - BR

---

# Sistema de Monitoramento de Saúde Animal

Esse projeto é um sistema para agrupamento e monitoramento de saúde animal. O sistema deve agrupar informações de sensores de animais em campo e, através de determinadas regras, ele age de acordo.

Progresso de features:

- Criado: ✅
- Em Desenvolvimento: 🚧
- A criar: 🚀

## Informações sobre o que o sistema deve Fazer

### Regras de Negócio

* **Cadastro e Identificação dos Animais: 🚧**
  * **Registro Detalhado:** Cada animal deve ter um cadastro único, com informações como identificação (RFID, código de barras), espécie, raça, data de nascimento, histórico de vacinação e tratamentos.
  * **Integração com Sensores:** Integrar dispositivos wearable que monitoram sinais vitais (temperatura, atividade, localização) e associar esses dados ao perfil do animal.
* **Monitoramento em Tempo Real e Alertas: 🚧**
  * **Coleta Contínua de Dados:** O sistema deve coletar dados dos sensores em intervalos regulares e armazenar históricos para análise.
  * **Definição de Parâmetros Críticos:** Estabelecer limites para indicadores de saúde (ex.: temperatura acima de 39°C, diminuição abrupta na atividade) que, quando ultrapassados, acionam alertas.
  * **Alertas e Notificações:** Implementar regras que enviem notificações imediatas para o responsável (via SMS, email ou aplicativo) quando forem detectadas anomalias, possibilitando uma ação rápida.
* **Gestão de Histórico e Análises: 🚀**
  * **Registro de Eventos:** Manter um log detalhado de eventos e intervenções (consultas veterinárias, tratamentos e mudanças de comportamento) para cada animal.
  * **Análise de Tendências:** Utilizar dados históricos para identificar padrões de saúde e prever possíveis surtos de doenças, sugerindo medidas preventivas.
* **Gestão de Usuários e Acessos: 🚀**
  * **Perfis Diferenciados:** Definir níveis de acesso para diferentes usuários, como fazendeiros, veterinários, técnicos e administradores, garantindo a segurança e a privacidade dos dados.
  * **Relatórios Customizados:** Permitir que os usuários gerem relatórios personalizados com base em critérios como período, grupo de animais ou tipo de alerta, auxiliando na tomada de decisão.
* **Integração com Outros Sistemas: 🚀**
  * **Sistemas de Gestão:** Possibilitar a integração com sistemas de ERP agropecuário e softwares de gerenciamento financeiro para correlacionar dados de saúde com a produtividade e custos.
  * **Compliance e Regulamentação:** Garantir que o sistema atenda às normas e regulamentações do setor agropecuário, facilitando auditorias e a prestação de contas.

### Stack Utilizada

- Typescript
- Fastify (interface http)
- prisma (conexão com base de dados)

### Comandos para a Aplicação

Desenvolvimento:

```b
npm run dev
```

Build:

```b
npm run build
```

Produção

```
npm run start
```

---

English - US

---

# Animal Health Monitoring System

This project is a system for grouping and monitoring animal health. It gathers sensor data from animals in the field and, using defined rules, takes appropriate actions.

**Feature Progress:**

* Completed: ✅
* In Development: 🚧
* To be created: 🚀

## System Requirements and Functionality

### Business Rules

* **Animal Registration and Identification: 🚧**
  * **Detailed Record:** Each animal must have a unique record with information such as identification (RFID, barcode), species, breed, date of birth, vaccination history, and treatments.
  * **Sensor Integration:** Integrate wearable devices that monitor vital signs (e.g., temperature, activity, location) and associate these data with the animal’s profile.
* **Real-Time Monitoring and Alerts: 🚧**
  * **Continuous Data Collection:** The system should collect sensor data at regular intervals and store historical data for analysis.
  * **Critical Parameter Definition:** Establish thresholds for health indicators (e.g., temperature above 39°C, sudden drop in activity) that, when exceeded, trigger alerts.
  * **Alerts and Notifications:** Implement rules to send immediate notifications (via SMS, email, or an app) to the responsible party when anomalies are detected, enabling rapid response.
* **History Management and Analysis: 🚀**
  * **Event Logging:** Maintain a detailed log of events and interventions (veterinary consultations, treatments, behavioral changes) for each animal.
  * **Trend Analysis:** Utilize historical data to identify health patterns and predict potential disease outbreaks, suggesting preventive measures.
* **User and Access Management: 🚀**
  * **Differentiated Profiles:** Define different access levels for users—such as farmers, veterinarians, technicians, and administrators—to ensure data security and privacy.
  * **Custom Reports:** Allow users to generate customized reports based on criteria such as time period, animal group, or type of alert, aiding decision-making.
* **Integration with Other Systems: 🚀**
  * **Management Systems:** Enable integration with agricultural ERP systems and financial management software to correlate health data with productivity and costs.
  * **Compliance and Regulation:** Ensure the system complies with agricultural sector regulations, simplifying audits and accountability.

### Stack Used

* TypeScript
* Fastify (HTTP interface)
* Prisma (database connection)

### Application Commands

**Development:**

```
npm run dev
```

**Build:**

```
npm run build
```

**Production:**

```
npm run start
```
