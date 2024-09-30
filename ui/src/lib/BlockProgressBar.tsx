/* eslint-disable-next-line */
export interface BlockProgressBarProps {
  title: string;
  value: string;
  barColor: string;
}

export function BlockProgressBar({
  title,
  value,
  barColor,
}: BlockProgressBarProps) {
  return (
    <div className="rounded-xl px-4 py-2 bg-primary-default col-span-2 text-center">
      <div className="sm:text-lg text-md text-ellipsis whitespace-nowrap overflow-hidden">
        {title}
      </div>
      <div className="sm:text-2xl text-xl mt-1">{value}%</div>
      <div className="flex flex-col text-xs mt-1">
        <div className="self-end">%</div>
        <div className="w-full h-[10px] rounded-full bg-white my-1 relative overflow-hidden">
          <div
            className={`w-[0%] h-[10px] ${barColor} bg-cl absolute transition-all`}
            style={{ width: `${value}%` }}
          ></div>
        </div>
        <div className="flex justify-between">
          <div>0</div>
          <div>100</div>
        </div>
      </div>
    </div>
  );
}

export default BlockProgressBar;
