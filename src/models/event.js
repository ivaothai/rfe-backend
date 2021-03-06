import Sequelize from 'sequelize'

import sequelize from '../services/sequelize'

const Event = sequelize.define('event', {
  eventID: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  eventName: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  eventDesc: {
    type: Sequelize.TEXT,
  },
  eventCover: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      isUrl: true,
    },
  },
  eventBreifingPilot: {
    type: Sequelize.TEXT,
    allowNull: true,
    validate: {
      isUrl: true,
    },
  },
  eventBreifingATC: {
    type: Sequelize.TEXT,
    allowNull: true,
    validate: {
      isUrl: true,
    },
  },
  isOpen: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
})

sequelize.sync()

export default Event
