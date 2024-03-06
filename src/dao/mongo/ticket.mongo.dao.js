import ticketsModel from '../models/tickets.model.js'
import MongoSingleton from '../../services/mongoSingleton.js'

MongoSingleton.getInstance()

export class TicketService {
    constructor() {
    }

    createTicket = async (amount, purchaser) => {
        const ticket = new ticketsModel({
            amount: totalAmount,
            purchaser: purchaser
        })
        await ticket.save()
    }
}