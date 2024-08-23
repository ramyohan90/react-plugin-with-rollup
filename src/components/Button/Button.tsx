
type IProps = {
    label: string;
}

function Button({ label }: IProps) {
    return (
        <button type="button">{ label }</button>
    )
}

export default Button;