const mongoose = require("mongoose");

const channelInvoicesSchema = mongoose.Schema({
  partnerName: { type: String},
  licensorId: { type: String},
  licensorName: { type: String},
  companyName: { type: String},
  licensorAddress: { type: String},
  licensorEmail: { type: String},

  accNum: { type: String},
  ifsc: { type: String},
  iban: { type: String},
  currency: { type: String},
  date: { type: String},
  ustaxPercentage :{ type: String},
  
  channelId: { type: String},
  channelName: { type: String},
  invoiceNumber: { type: String},
  ptRevenue: { type: String },
  country: { type: String },
  tds: { type: String},
  type: { type: String},

  usTax: { type: String},  
  ptAfterUsTax: { type: String },

  tdsTax: { type: String},
  inrPayout: { type: String}, 
  ustaxPercentage: { type: String}, 


  commission: { type: String },
  commissionAmount: { type: String },
  totalPayout: { type: String },
  conversionRate: { type: String },
  payout: { type: String },
  status: { type: String },
  emailStatus: { type: String }
});

const channelInvoices = mongoose.model("channelInvoices", channelInvoicesSchema);

module.exports = channelInvoices;
