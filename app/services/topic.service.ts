/**
 * Created by marcelo on 30/01/17.
 */
import {Topic} from "../models/models";
import {Injectable} from "@angular/core";

@Injectable()
export class TopicService {

    get(): Topic {
        return {
            id: 1,
            name: 'Teste',
            message: 'Mensagem teste',
            sendDate: new Date('2012-04-23T18:25:43.511Z')
        };

    }
}


