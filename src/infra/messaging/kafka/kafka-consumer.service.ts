import { Injectable, OnModuleDestroy } from "@nestjs/common";
import { ServerKafka } from "@nestjs/microservices";

@Injectable()
export class KafkaConsumerService extends ServerKafka implements OnModuleDestroy{
    constructor(){
        super({
            client:{
                clientId:'notifications',
                brokers: ['cunning-ocelot-13079-us1-kafka.upstash.io:9092'],
                sasl: {
                  mechanism: 'scram-sha-256',
                  username: 'Y3VubmluZy1vY2Vsb3QtMTMwNzkkSYzJWcJxkj5zOlp9qpPc7T6rObWNif4BVx8',
                  password: 'd45b2151bef845e1949a6a69eaf787ea',
                },
                ssl: true,
            },
        });
    }

    async onModuleDestroy(){
        await this.close();
    }
}