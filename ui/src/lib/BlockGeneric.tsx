/* eslint-disable-next-line */
export interface BlockGenericProps {
  title: string;
  value: string;
  metric?: string;
}

export function BlockGeneric({ title, value, metric }: BlockGenericProps) {
  return (
    <div className="rounded-xl p-6 bg-primary-default text-center">
      <div className="md:text-md text-lg text-ellipsis whitespace-nowrap overflow-hidden">
        {title}
      </div>
      <div className="md:text-xl text-2xl mt-2">
        {value}
        <span className="ml-1 text-white/70">{metric}</span>
      </div>
    </div>
  );
}

export default BlockGeneric;
