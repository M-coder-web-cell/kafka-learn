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
- For latest versions do not need zookeeper, we will use Kafka Raft Metadata mode (KRaft)
- Start Kafka Container, expose PORT `9092` and setup ENV variables.
```bash
docker run -d `
  --name kafka `
  -p 9092:9092 `
  -e KAFKA_NODE_ID=1 `
  -e KAFKA_PROCESS_ROLES=broker,controller `
  -e KAFKA_LISTENERS=PLAINTEXT://:9092,CONTROLLER://:9093 `
  -e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://localhost:9092 `
  -e KAFKA_CONTROLLER_LISTENER_NAMES=CONTROLLER `
  -e KAFKA_LISTENER_SECURITY_PROTOCOL_MAP=CONTROLLER:PLAINTEXT,PLAINTEXT:PLAINTEXT `
  -e KAFKA_CONTROLLER_QUORUM_VOTERS=1@localhost:9093 `
  -e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 `
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