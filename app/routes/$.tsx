import type { LoaderFunction } from '@remix-run/node';
import { redirect } from '@remix-run/node';

export const loader: LoaderFunction = function ({ params }) {
  if (params['*'] === 'exp') {
    return redirect('/expenses');
  }

  throw new Response('Not Found', { status: 404 });
};
