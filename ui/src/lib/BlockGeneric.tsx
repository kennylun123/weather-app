/**
 * BlockGeneric component for displaying a title and a corresponding value.
 *
 * @description The BlockGeneric component displays a simple information block with a title and a value, which can optionally include a metric unit.
 * @props {string} title - The title or label of the information being displayed.
 * @props {string} value - The value associated with the title.
 * @props {string} [metric] - The optional unit of measurement for the temperature (e.g., °C, °F).
 */

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
