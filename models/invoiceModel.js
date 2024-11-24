import mongoose from 'mongoose';

const invoiceSchema = new mongoose.Schema(
  {
    vendorName: { 
      type: String, 
      required: true 
    },
    invoiceNumber: { 
      type: String, 
      required: true 
    },
    status: { 
      type: String, 
      required: true 
    },
    netAmount: { 
      type: String, 
      required: true 
    },
    invoiceDate: { 
      type: String, 
      required: true 
    },
    dueDate: { 
      type: String, 
      required: true 
    },
    department: { 
      type: String, 
      default: '' 
    },
    poNumber: {  
      type: String,
      required: true
    }
  },
  {
    timestamps: true  
  }
);

const Invoice = mongoose.model('Invoice', invoiceSchema);
export default Invoice;
