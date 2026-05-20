# Kafka
Video Link: [Apache Kafka Crash Course | What is Kafka?](https://youtu.be/ZJJHm_bd9Zo)
## Prerequisite
- Knowledge
  - Node.JS Intermediate level
  - Experience with designing distributed systems
- Tools
  - Node.js: [Download Node.JS](https://nodejs.org/en)
  - Docker: [Download Docker](https://www.docker.com)
  - VsCode: [Download VSCode](https://code.visualstudio.com)

## Commands
- Start Zookeper Container and expose PORT `2181`.
```bash
docker run -p 2181:2181 zookeeper
```
- Start Kafka Container, expose PORT `9092` and setup ENV variables.
```bash
docker run -p 9092:9092 \
-e KAFKA_NODE_ID: 1 \
-e KAFKA_PROCESS_ROLES: 'broker,controller' \
-e KAFKA_LISTENER_SECURITY_PROTOCOL_MAP: 'CONTROLLER:PLAINTEXT,PLAINTEXT:PLAINTEXT,LOCAL:PLAINTEXT' \
-e KAFKA_CONTROLLER_QUORUM_VOTERS: '1@localhost:9093' \
-e KAFKA_LISTENERS: 'PLAINTEXT://0.0.0.0:29092,CONTROLLER://0.0.0.0:9093,LOCAL://0.0.0.0:9092' \
-e KAFKA_INTER_BROKER_LISTENER_NAME: 'PLAINTEXT' \
-e KAFKA_ADVERTISED_LISTENERS: 'PLAINTEXT://kafka:29092,LOCAL://localhost:9092' \
-e KAFKA_CONTROLLER_LISTENER_NAMES: 'CONTROLLER' \
-e CLUSTER_ID: 'MkU3OEVBNTcwNTJENDM2Qk' \
confluentinc/cp-kafka
```

## Running Locally
- Run Multiple Consumers
```bash
node consumer.js <GROUP_NAME>
```
- Create Producer
```bash
node producer.js
```
```bash
> tony south
> tony north
```