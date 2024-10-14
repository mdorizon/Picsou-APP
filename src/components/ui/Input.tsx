type InputProps = {
    placeholder?: string;
    className?: string;
    type?: 'text' | 'number' | 'email' | 'password';
    setValue?: (value: any) => void;
}

const Input = ({placeholder, className, type, setValue}: InputProps) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(!setValue) return;

        if(type === 'number') {
            setValue(Number(e.target.value));
        } else {
            setValue(e.target.value);
        }
    }
    return (  
        <input 
            type={type || 'text'}
            className={`border-2 m-5 text-xl py-2 px-4 text-slate-600 ${className}`}
            placeholder={placeholder}
            onChange={handleChange}
        />
    );
}

export default Input;