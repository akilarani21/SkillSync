/**
 * Reusable Loader component.
 * Props:
 * - size: 'sm' | 'md' | 'lg'
 * - fullScreen: boolean — centers loader in the full viewport
 */
const SIZE_CLASSES = {
  sm: 'h-5 w-5 border-2',
  md: 'h-8 w-8 border-2',
  lg: 'h-12 w-12 border-4',
};

const Loader = ({ size = 'md', fullScreen = false }) => {
  const spinner = (
    <div
      className={`animate-spin rounded-full border-primary-600 border-t-transparent ${
        SIZE_CLASSES[size] || SIZE_CLASSES.md
      }`}
      role="status"
      aria-label="Loading"
    />
  );

  if (fullScreen) {
    return (
      <div className="flex min-h-[60vh] w-full items-center justify-center">
        {spinner}
      </div>
    );
  }

  return spinner;
};

export default Loader;