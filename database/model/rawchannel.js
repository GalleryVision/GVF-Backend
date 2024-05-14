const mongoose = require('mongoose');

const channelRawSchema = new mongoose.Schema({
    channelId: {type : String},
    ytRevenue: {type : String},
    partnerRevenue: {type : String}
});

const rawchannels = mongoose.model('rawchannels', channelRawSchema);

module.exports = rawchannels;
