
interface ButtonIconProp{
    onClick?:()=>void,
    Icon?:any,
    text?: String,
    className:string,
    IconClassName?:string,
    textClassName?:string
}

export const ButtonIcon = ({ onClick,Icon, text="", className, IconClassName="", textClassName="" }:ButtonIconProp) => {
  return (
    <>
        {
            Icon&&
            <button type="button" onClick={onClick} className={className}>
                <Icon  className={IconClassName} />
                <span className={textClassName}>{text}</span>
            </button>

        }
    </>
  )
}
