import { prisma } from './database.server';

export type ExpenseData = {
  title: string;
  amount: string;
  date: string;
};

export async function addExpenses({ title, amount, date }: ExpenseData) {
  try {
    return await prisma.expense.create({
      data: {
        title,
        amount: parseFloat(amount),
        date: new Date(date),
      },
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getExpenses() {
  try {
    return await prisma.expense.findMany({ orderBy: { date: 'desc' } });
  } catch (error) {
    console.log(error);
    throw error;
  }
}
