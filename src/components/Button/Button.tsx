import './button.css';

type IProps = {
    label: string;
}

const Button = ({ label }: IProps) => {
    return (
        <button className="custom-button" type="button">{ label }</button>
    )
}

export default Button;