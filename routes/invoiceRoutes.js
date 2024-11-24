import express from 'express';
import {
  createInvoice,
  getInvoices,
  getInvoiceById,
  updateInvoice,
  deleteInvoice,
} from '../controllers/invoiceController.js';

const router = express.Router();

// Create a new invoice
router.post('/', createInvoice);

// Get invoices (filter by status or search query)
router.get('/', getInvoices);

// Get invoice by ID
router.get('/:id', getInvoiceById);

// Update invoice by ID
router.put('/:id', updateInvoice);

// Delete invoice by ID
router.delete('/:id', deleteInvoice);

export default router;
