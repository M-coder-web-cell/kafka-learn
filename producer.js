import {kafka} from "./client.js"

const init = async () => {
    const producer = kafka.producer()

    await producer.connect()
    console.log("Producer connected Successfully...")

    await producer.send({
        topic: 'rider-updates',
        messages: [
            { key: 'location-updates', 
                partition : 0, 
                value: JSON.stringify({ 
                    rider : "Amrit Mishra",
                    time : "20:00:07", 
                    coordinates : "[19.61, 78.67]"
                 })
            },
            { key: 'location-updates', 
                partition : 0, 
                value: JSON.stringify({ 
                    rider : "Ram Sharma",
                    time : "20:00:07", 
                    coordinates : "[25.78, 73.69]" 
                })
            },
         ],
    })

    await producer.disconnect()
    console.log('Producer disconnected successfully...')
}

init()