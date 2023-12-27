
interface ButtonIconProp{
    onClick?:()=>void;
    Icon?:React.ComponentType;
    text?: string|number;
    className:string;
    IconClassName?:string;
    textClassName?:string;
}

export const ButtonIcon = ({ onClick,Icon, text="", className, IconClassName="", textClassName="" }:ButtonIconProp) => {
  return (
    <>
      <button type="button" onClick={onClick} className={className}>
            {Icon&&
              <div className={IconClassName}>
                <Icon />
              </div>
            }
            <span className={textClassName}>{text}</span>
    </button>
    </>
  )
}
