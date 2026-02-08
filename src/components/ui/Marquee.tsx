interface MarqueeProps {
  children: string;
  speed?: 'normal' | 'fast';
  bgColor?: string;
  textColor?: string;
  className?: string;
  separator?: string;
}

const Marquee = ({
  children,
  speed = 'normal',
  bgColor = 'bg-cute-blue',
  textColor = 'text-white',
  className = '',
  separator = ' \u2022 ',
}: MarqueeProps) => {
  const animClass = speed === 'fast' ? 'animate-marquee-fast' : 'animate-marquee';
  const repeatedText = Array(10).fill(children).join(separator);

  return (
    <div className={`${bgColor} ${textColor} overflow-hidden whitespace-nowrap ${className}`}>
      <div className={`marquee-track ${animClass}`}>
        <span className="inline-block px-4 font-display text-sm md:text-base uppercase tracking-wider py-2.5">
          {repeatedText}{separator}
        </span>
        <span className="inline-block px-4 font-display text-sm md:text-base uppercase tracking-wider py-2.5">
          {repeatedText}{separator}
        </span>
      </div>
    </div>
  );
};

export default Marquee;
