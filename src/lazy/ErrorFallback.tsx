import { FallbackProps } from "react-error-boundary";

const ErrorFallback = (props: FallbackProps) => {
  const { error, resetErrorBoundary } = props;
  return (
    <div className="error">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}
export default ErrorFallback