const CrudRepository = require('./crud-repository');
const { Ticket } = require('../models');
const { where } = require('sequelize');

class TicketRepository extends CrudRepository {
  constructor() {
    super(Ticket);
  }

  async getPendingTickets() {
    const pendingTickets = await this.model.findAll({
      where: {
        status: 'pending'
      }
    });
    return pendingTickets;
  }
}

module.exports = TicketRepository;