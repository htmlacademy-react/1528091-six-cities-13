import React from 'react';
import './error-page.css';
import { Link } from 'react-router-dom';

function ErrorPage() {
  return (
    <div className = 'error-page'>
      <div className='error-page__text'>404: Page not found</div>
      <Link className='error-page__link' to = '/'>Back to Main page</Link>
    </div>
  );
}

export default ErrorPage;
