import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className='mx-auto my-8 max-w-2xl rounded-lg border border-red-200 bg-red-50 p-4'>
            <h2 className='mb-2 text-lg font-semibold text-red-800'>
              Something went wrong
            </h2>
            <p className='text-red-600'>{this.state.error?.message}</p>
          </div>
        )
      );
    }

    return this.props.children;
  }
}
