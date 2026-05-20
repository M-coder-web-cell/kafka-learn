import {Kafka} from "kafkajs";

const kafka = new Kafka({
    clientId = 'my-app',
    brokers = ['http://localhost:9092']
})

async function init() {
    const admin = kafka.admin;
    console.log('Admin Connecting...');
    admin.connect();
    console.log('Admin connected successfully');

    console.log("Creating Topic rider-updates")
    await admin.createTopics({
        topics: [{
            'topic' : 'rider-updates',
            numPartitions : 2
        }]
    })

}