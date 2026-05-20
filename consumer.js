import { kafka } from "./client.js"

async function init(){
    const consumer = kafka.consumer({
        groupId : "group-1"
    })
    console.log("Consumer connected successfully...")
    await consumer.connect()

    await consumer.subscribe({ topics: ['rider-updates'], fromBeginning : true })

    await consumer.run({
        eachMessage : async ({topic, partition, message, heartbeat, pause}) => {
            console.log(`TOPIC : ${topic} PARTITION : ${partition}`, message.value.toString())
        }
    })
}

init()