import { Button } from "../ui/button";

type Action <T=void> = {
    label: string;
    icon?: React.ReactNode;
    className?: string;
    onClick?: () => T;
}
type Section = {
    title: string;
    description: string;
    actions: Action[];
}
export default function HedTable(
    {title,
description,
actions,} : Section) {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex flex-col gap-2 text-black">
        <h2 className="text-4xl">{title}</h2>
        <p className="text-2xl">{description}</p>
      </div>
        <div className="flex gap-2">
            {actions.map((action) => (
                <Button key={action.label} onClick={action.onClick} className={action.className}>{action.icon} {action.label} </Button>
            ))}
        </div>
    </div>
  )
}
