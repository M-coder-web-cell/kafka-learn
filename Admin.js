import {Kafka} from "kafkajs";

const kafka = new Kafka({
    clientId : 'my-app',
    brokers :  ['localhost:9092']
})

const admin = await kafka.admin();
console.log('Admin Connecting...');

async function init() {
    await admin.connect();
    console.log('Admin connected successfully');

    createtopic('rider-updates')

}

const createtopic = async (name) =>{
    console.log("Creating Topic [", name, "]")
    await admin.createTopics({
        topics: [{
            'topic' : 'rider-updates',
            numPartitions : 2
        }]
    })
    console.log('topic successfully created [', name, ']')
}

init()