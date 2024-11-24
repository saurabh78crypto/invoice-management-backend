import Invoice from '../models/invoiceModel.js';

// Create a new invoice
export const createInvoice = async (req, res) => {
  const { vendorName, invoiceNumber, status, netAmount, invoiceDate, dueDate, department, poNumber } = req.body;

  try {
    const newInvoice = new Invoice({
      vendorName,
      invoiceNumber,
      status,
      netAmount,
      invoiceDate,
      dueDate,
      department,
      poNumber
    });

    await newInvoice.save();
    res.status(201).json(newInvoice);
  } catch (error) {
    res.status(400).json({ message: 'Error creating invoice', error });
  }
};

// Get all invoices or filter by status
export const getInvoices = async (req, res) => {
  const { status, searchQuery, page = 1, limit = 5 } = req.query;

  try {
    let query = {};

    // Filter by status if provided
    if (status && status !== 'All') {
      query.status = status;
    }

    // Search by vendor name or invoice number if provided
    if (searchQuery) {
      query.$or = [
        { vendorName: { $regex: searchQuery, $options: 'i' } },
        { invoiceNumber: { $regex: searchQuery, $options: 'i' } },
      ];
    }

    // Pagination logic
    const invoices = await Invoice.find(query)
      .skip((page - 1) * limit)  // Skip documents based on current page and limit
      .limit(parseInt(limit))    // Limit the number of documents per page
      .exec();

    const totalInvoices = await Invoice.countDocuments(query); // Count total invoices matching the query

    if (invoices.length === 0) {
      return res.status(200).json({
        invoices: [],
        message: 'No invoices were found',
        pagination: {
          totalInvoices: 0,
          totalPages: 1,
          currentPage: parseInt(page),
          limit: parseInt(limit),
        },
      });
    }

    // Return paginated response
    res.status(200).json({
      invoices,
      pagination: {
        totalInvoices,
        totalPages: Math.ceil(totalInvoices / limit),
        currentPage: parseInt(page),
        limit: parseInt(limit),
      }
  });
  } catch (error) {
    res.status(400).json({ message: 'Error retrieving invoices', error });
  }
};

// Get invoice by ID
export const getInvoiceById = async (req, res) => {
  const { id } = req.params;

  try {
    const invoice = await Invoice.findById(id);

    if (!invoice) {
      return res.status(404).json({ message: 'Invoice not found' });
    }

    res.status(200).json(invoice);
  } catch (error) {
    res.status(400).json({ message: 'Error retrieving invoice', error });
  }
};

// Update invoice
export const updateInvoice = async (req, res) => {
  const { id } = req.params;
  
  const { vendorName, invoiceNumber, status, netAmount, invoiceDate, dueDate, department, poNumber } = req.body;

  try {
    const updatedInvoice = await Invoice.findByIdAndUpdate(
      id,
      {
        vendorName,
        invoiceNumber,
        status,
        netAmount,
        invoiceDate,
        dueDate,
        department,
        poNumber
      },
      { new: true }
    );

    if (!updatedInvoice) {
      return res.status(404).json({ message: 'Invoice not found' });
    }

    res.status(200).json(updatedInvoice);
  } catch (error) {
    res.status(400).json({ message: 'Error updating invoice', error });
  }
};

// Delete invoice
export const deleteInvoice = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedInvoice = await Invoice.findByIdAndDelete(id);

    if (!deletedInvoice) {
      return res.status(404).json({ message: 'Invoice not found' });
    }

    res.status(200).json({ message: 'Invoice deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: 'Error deleting invoice', error });
  }
};
