const mongoose = require("mongoose");

const musicInvoicesSchema = mongoose.Schema({
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
  musicId: { type: String},
  musicName: { type: String},
  invoiceNumber: { type: String},
  ptRevenue: { type: String },
  tdsTax: { type: String},
  tds: { type: String},
  type: { type: String},
  inrPayout: { type: String},
  commission: { type: String },
  commissionAmount: { type: String },
  totalPayout: { type: String },
  conversionRate: { type: String },
  payout: { type: String },
  status: { type: String },
  emailStatus: { type: String }

});

const musicInvoices = mongoose.model("musicInvoices", musicInvoicesSchema);

module.exports = musicInvoices;

