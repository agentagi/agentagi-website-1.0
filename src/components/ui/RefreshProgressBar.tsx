import { motion } from 'framer-motion';

interface RefreshProgressBarProps {
  secondsUntilNext: number;
  totalSeconds?: number;
}

/**
 * RefreshProgressBar component
 * Displays a progress bar showing time until next data refresh
 */
export function RefreshProgressBar({
  secondsUntilNext,
  totalSeconds = 30,
}: RefreshProgressBarProps) {
  // Calculate progress percentage (0-100)
  const progress = ((totalSeconds - secondsUntilNext) / totalSeconds) * 100;

  return (
    <div className="w-full max-w-md mx-auto mt-4">
      <div className="h-1 bg-cute-blue/20 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-cute-blue rounded-full"
          initial={{ width: '0%' }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}
