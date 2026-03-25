import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/m3.css';
import App from './App';

/* Error Boundary — shows runtime errors instead of blank page */
class ErrorBoundary extends React.Component {
  declare state: { hasError: boolean; msg: string };

  constructor(p: object) {
    super(p as Record<string, never>);
    this.state = { hasError: false, msg: '' };
  }

  static getDerivedStateFromError(e: Error) {
    return { hasError: true, msg: `${e.message}\n\n${e.stack ?? ''}` };
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return React.createElement(
        'div',
        { style: { padding: 40, fontFamily: 'monospace', color: '#c00', background: '#fff', whiteSpace: 'pre-wrap' } },
        this.state.msg,
      );
    }
    return (this as unknown as { props: { children: React.ReactNode } }).props.children;
  }
}

const root = document.getElementById('root');
if (!root) throw new Error('Root element not found');

ReactDOM.createRoot(root).render(
  React.createElement(React.StrictMode, null,
    React.createElement(ErrorBoundary, null,
      React.createElement(App)
    )
  )
);
