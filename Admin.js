import {kafka} from "./client.js"

const admin = await kafka.admin();
console.log('Admin Connecting...');

async function init() {
    await admin.connect();
    console.log('Admin connected successfully');

    await createtopic('rider-updates')

    console.log('Disconnecting Admin...')
    await admin.disconnect()
    console.log('Successfully disconnected')

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