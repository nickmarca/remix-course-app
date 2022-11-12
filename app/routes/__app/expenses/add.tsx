import type { ActionFunction } from '@remix-run/node';
import { redirect } from '@remix-run/node';
import { useNavigate } from '@remix-run/react';
import ExpenseForm from '~/components/expenses/ExpenseForm';
import Modal from '~/components/util/Modal';
import type { ExpenseData } from '~/data/expenses.server';
import { addExpenses } from '~/data/expenses.server';
import { validateExpenseInput } from '~/data/validation.server';

export default function ExpensesAddPage() {
  const navigate = useNavigate();

  function closeHandler() {
    navigate('..');
  }

  return (
    <Modal onClose={closeHandler}>
      <ExpenseForm />
    </Modal>
  );
}

export const action: ActionFunction = async function ({ request, params }) {
  const formData = await request.formData();
  const expenseData = Object.fromEntries(formData) as ExpenseData;

  try {
    validateExpenseInput(expenseData);
  } catch (error) {
    return error;
  }

  await addExpenses(expenseData);
  return redirect('/expenses');
};
